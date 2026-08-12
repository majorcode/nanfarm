import { define } from "@/utils.ts";
import AlertBanner from "@/components/AlertBanner.tsx";
import MetroForm from "@/islands/MetroForm.jsx";

export default define.page(({ state }) => {
	state.title = "UPS Truck Audit";
	state.description = "Choose the metros to print truck audit forms.";

	return (
		<section class="prose">
			<h1>UPS</h1>
			<h2>Truck Audit Forms</h2>
			<AlertBanner>
				Choose the metros that you want to print forms for and click the print button.
			</AlertBanner>
			<h3 class="mb-2">Metros</h3>
			<MetroForm />
		</section>
	);
});
