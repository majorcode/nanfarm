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
				<p>
					Choose the metros that you want to print forms for and click the print
					button.
				</p>
				<h3 class="mb-2">Metros</h3>
				<MetroForm />
			</main>
		</Container>
	);
}
