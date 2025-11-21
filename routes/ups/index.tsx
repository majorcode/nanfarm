import { Container } from "@/components/layout/container.tsx";

export default function Home() {
	const date = new Date();
	date.setHours(date.getHours() + 1);

	const meta = {
		title: "UPS",
		description:
			"This page hosts tools I've made to make my work at UPS easier.",
	};

	return (
		<Container {...meta}>
			<main role="main" class="prose">
				<h1>UPS</h1>
				<h2>Easy Peasy Forms</h2>
				<div role="alert" class="alert">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-6 w-6 shrink-0 stroke-current">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
					</svg>
					<span>Click on a link below and print the page.</span>
				</div>
				<h3>Saturday Sort</h3>
				<ul>
					<li>
						<a href="/ups/saturday_sort.html">Sign-in Sheets</a>
					</li>
					<li>
						<a href="/ups/truck_audit">Truck Audit</a>
					</li>
				</ul>
				<h3>Doubles Sign-in Sheets</h3>
				<ul>
					<li>
						<a href="/ups/doubles_preload.html">Preload</a>
					</li>
					<li>
						<a href="/ups/doubles_day.html">Day</a>
					</li>
					<li>
						<a href="/ups/doubles_twilight.html">Twilight</a>
					</li>
					<li>
						<a href="/ups/doubles_midnight.html">Midnight</a>
					</li>
					<li>
						<a href="/ups/doubles_da_secondary.html">
							DA / Secondary
						</a>
					</li>
				</ul>
			</main>
		</Container>
	);
}
