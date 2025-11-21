import { Container } from "@/components/layout/container.tsx";
import MetroForm from "@/islands/MetroForm.jsx";

export default function Home() {
	const date = new Date();
	date.setHours(date.getHours() + 1);

	const meta = {
		title: "UPS — Truck Audit",
		description: "Choose the metros to print truck audit forms.",
	};

	return (
		<Container {...meta}>
			<main role="main" class="prose">
				<h1>UPS</h1>
				<h2>Truck Audit Forms</h2>
				<div role="alert" class="alert">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-6 w-6 shrink-0 stroke-current">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
					</svg>
					<span>Choose the metros that you want to print forms for and click the print button.</span>
				</div>
				<h3 class="mb-2">Metros</h3>
				<MetroForm />
			</main>
		</Container>
	);
}
