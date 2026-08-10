import { define } from "@/utils.ts";
import { HttpError } from "fresh";

export default define.page(({ error, state, url}) => {

	if (error instanceof HttpError) {
		const status = error.status; // HTTP status code
		state.title = `${status} ${error.message}`;
		state.description = `An error occurred: ${error.message}`;

		// Render a 404 not found page
		if (status === 404) {
			return (
				<section class="prose">
					<h1>Page Not Found</h1>
					<p>
						Sorry, but the page you were trying to view (
							<code class="whitespace-nowrap">
								{url.pathname}
							</code>
						) does not exist.
					</p>
				</section>
			);
		}
	}

	state.title = "Error";
	state.description = "An unexpected error occurred.";

	return (
		<section class="prose">
			<h1>Oh no...</h1>
			<p>Something went wrong.</p>
		</section>
	);
});