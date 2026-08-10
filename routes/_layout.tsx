import { define } from "../utils.ts";
import { Partial } from "fresh/runtime";

export default define.layout(({ Component }) => {
	return (
		<body class="flex flex-col min-h-screen" f-client-nav f-view-transition>
			<Partial name="body">
				<nav class="navbar bg-base-300 mb-8">
					<div class="flex-1">
						<a
							href="/"
							class="btn btn-ghost text-xl hover:bg-base-content/8 border-0"
						>
							<img src="/img/heart.svg" style="width: 36px; height: 36px;" alt="" />
							<span class="pl-2">Nanfarm</span>
						</a>
					</div>
					<div class="flex-none">
						<ul class="menu menu-horizontal p-0">
							<li>
								<a href="/" class="rounded-lg">Home</a>
							</li>
							<li>
								<a href="/ups" class="rounded-lg">UPS</a>
							</li>
						</ul>
					</div>
				</nav>
				<main class="container px-4 mx-auto grow">
					<Component />
				</main>
				<footer class="footer footer-horizontal bg-neutral text-neutral-content items-center p-4">
					<aside class="grid-flow-col items-center">
						<img src="/img/heart.svg" style="width: 36px; height: 36px;" alt="" />
						<p>Copyright ©{new Date().getFullYear()} - All right reserved</p>
					</aside>
					<nav class="grid-flow-col gap-4 place-self-center justify-self-end">
						<a href="https://www.facebook.com/nanfarm">
							<svg
								aria-hidden="true"
								focusable="false"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								class="fill-current"
							>
								<path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z">
								</path>
							</svg>
							<span class="sr-only">Facebook</span>
						</a>
					</nav>
				</footer>
			</Partial>
		</body>
	);
});
