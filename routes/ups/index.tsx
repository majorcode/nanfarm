import { Container } from "@/components/layout/container.tsx";

export default function Home() {
	const date = new Date();
	date.setHours(date.getHours() + 1);

	const meta = {
		title: "UPS",
		description:
			"This page hosts tools I've made to make mu work at UPS easier.",
	};

	return (
		<Container {...meta}>
			<main role="main" class="prose">
				<h1>UPS</h1>
				<h2>Easy Peasy Forms</h2>
				<p>Click on a link below and print the page.</p>
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
