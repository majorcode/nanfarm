/**
 * Global handling for Fresh partial / client-nav failures.
 *
 * Fresh updates the URL (history.pushState) before fetching the next page
 * with `?fresh-partial=true`. On network failure the click handler has no
 * catch, so the URL changes and the content stays put. This module:
 *  1. Detects partial fetch failures and post-fetch partial errors
 *  2. Dispatches a cancelable `fresh-client-nav-error` event for app hooks
 *  3. Shows a client-side error page when the event is not prevented
 * 
 * NOTE: This solves the problem of frozen pages on network errors with 
 * an application-agnostic error page. Not a reusable error template.
 * 
 */

const PARTIAL_SEARCH_PARAM = "fresh-partial";
const ERROR_ROOT_ID = "fresh-client-nav-error";

export type ClientNavErrorDetail = {
	error: unknown;
	url: string;
	/** "network" = fetch threw; "partial" = response could not be applied */
	kind: "network" | "partial";
};

/** Bumps on every partial request so each navigation can report once. */
let partialNavGeneration = 0;
/** Generation that already fired `fresh-client-nav-error`. */
let reportedGeneration = -1;

function resolveUrl(input: RequestInfo | URL): URL | null {
	try {
		if (input instanceof URL) return input;
		if (typeof input === "string") return new URL(input, location.href);
		return new URL(input.url, location.href);
	} catch {
		return null;
	}
}

function isPartialRequest(input: RequestInfo | URL): boolean {
	const url = resolveUrl(input);
	return url?.searchParams.get(PARTIAL_SEARCH_PARAM) === "true";
}

function isPartialProcessingError(reason: unknown): boolean {
	const msg = reason instanceof Error ? reason.message : String(reason ?? "");
	return (
		msg.includes("Unable to process partial response") ||
		msg.includes("Found no partials in HTML response")
	);
}

function isNetworkError(reason: unknown): boolean {
	if (!(reason instanceof TypeError)) return false;
	const msg = reason.message;
	return /fetch|network|load failed|Failed to fetch|NetworkError/i.test(msg);
}

function clearClientNavError(): void {
	document.getElementById(ERROR_ROOT_ID)?.remove();
}

function defaultErrorMessage(kind: ClientNavErrorDetail["kind"]): string {
	if (kind === "network") {
		return "Could not reach the server. Check your connection and try again.";
	}
	return "Something went wrong loading this page.";
}

function showDefaultErrorPage(detail: ClientNavErrorDetail): void {
	clearClientNavError();

	const root = document.createElement("div");
	root.id = ERROR_ROOT_ID;
	root.setAttribute("role", "alert");
	root.className =
		"fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto bg-base-100 p-4 pt-16 sm:pt-24";

	const message = defaultErrorMessage(detail.kind);
	const path = (() => {
		try {
			return new URL(detail.url).pathname;
		} catch {
			return location.pathname;
		}
	})();

	root.innerHTML = `
		<section class="prose w-full max-w-prose">
			<h1>Oh no...</h1>
			<p>${message}</p>
			<p class="not-prose flex flex-wrap gap-2">
				<button type="button" class="btn btn-primary" data-action="retry">
					Try again
				</button>
				<a href="/" class="btn btn-ghost" f-client-nav="false">
					Go home
				</a>
			</p>
			<p class="text-sm opacity-70">
				Failed to load <code class="whitespace-nowrap">${path}</code>
			</p>
		</section>
	`;

	root.querySelector("[data-action=retry]")?.addEventListener("click", () => {
		location.reload();
	});

	document.title = "Error · Nanfarm.com";
	document.body.appendChild(root);
}

/**
 * Report a client-nav failure. Dispatches `fresh-client-nav-error`.
 * Call `event.preventDefault()` on that event to suppress the default UI.
 */
export function reportClientNavError(
	error: unknown,
	kind: ClientNavErrorDetail["kind"] = "network",
): void {
	// One report per partial navigation (fetch wrapper + unhandledrejection)
	if (reportedGeneration === partialNavGeneration) return;
	reportedGeneration = partialNavGeneration;

	const detail: ClientNavErrorDetail = {
		error,
		url: location.href,
		kind,
	};

	const event = new CustomEvent<ClientNavErrorDetail>("fresh-client-nav-error", {
		detail,
		cancelable: true,
		bubbles: true,
	});

	const prevented = !dispatchEvent(event);
	if (!prevented) {
		showDefaultErrorPage(detail);
	}
}

// --- Wire into Fresh partial navigation ------------------------------------

const originalFetch = globalThis.fetch.bind(globalThis);

globalThis.fetch = async (
	input: RequestInfo | URL,
	init?: RequestInit,
): Promise<Response> => {
	const isPartial = isPartialRequest(input);

	// New navigation attempt — drop any previous error overlay
	if (isPartial) {
		partialNavGeneration++;
		clearClientNavError();
	}

	try {
		return await originalFetch(input, init);
	} catch (error) {
		if (isPartial) {
			reportClientNavError(error, "network");
		}
		throw error;
	}
};

// Fresh's click handler has try/finally but no catch, so partial apply failures
// and rethrown network errors surface as unhandled promise rejections.
globalThis.addEventListener("unhandledrejection", (event) => {
	const reason = event.reason;

	if (isPartialProcessingError(reason)) {
		event.preventDefault();
		reportClientNavError(reason, "partial");
		return;
	}

	// Network errors are reported in the fetch wrapper first; silence the
	// matching unhandled rejection from Fresh's click/popstate handlers.
	if (isNetworkError(reason) && reportedGeneration === partialNavGeneration) {
		event.preventDefault();
	}
});