import { define } from "@/utils.ts";

export default define.page(({ state }) => {
	state.title = "UPS";
	state.description = "This page hosts tools I've made to make my work at UPS easier.";

	return (
		<section class="prose">
			<h1>UPS</h1>
			<h2>Easy Peasy Forms</h2>
			<div role="alert" class="alert">
				<svg
					aria-hidden="true"
					focusable="false"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="h-6 w-6 shrink-0 stroke-current"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					>
					</path>
				</svg>
				<span>Click on a link below and print the page.</span>
			</div>
			<h3>Saturday Sort</h3>
			<ul>
				<li>
					<a href="/ups/saturday_sort.html" f-client-nav={false}>Sign-in Sheets</a>
				</li>
				<li>
					<a href="/ups/truck_audit">Truck Audit</a>
				</li>
			</ul>
			<h3>Doubles Sign-in Sheets</h3>
			<ul>
				<li>
					<a href="/ups/doubles_preload.html" f-client-nav={false}>Preload</a>
				</li>
				<li>
					<a href="/ups/doubles_day.html" f-client-nav={false}>Day</a>
				</li>
				<li>
					<a href="/ups/doubles_twilight.html" f-client-nav={false}>Twilight</a>
				</li>
				<li>
					<a href="/ups/doubles_midnight.html" f-client-nav={false}>Midnight</a>
				</li>
				<li>
					<a href="/ups/doubles_da_secondary.html" f-client-nav={false}>DA / Secondary</a>
				</li>
			</ul>
			<h3>Mobile Device Sign Out/In Sheets</h3>
			<ul>
				<li>
					<a href="/ups/mda_list_woodbury.html" f-client-nav={false}>Woodbury MDA Sheet</a>
				</li>
			</ul>
		</section>
	);
});
