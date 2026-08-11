import { define } from "@/utils.ts";
import MetroForm from "@/islands/MetroForm.jsx";

export default define.page(({ state }) => {
	state.title = "UPS Truck Audit";
	state.description = "Choose the metros to print truck audit forms.";

	return (
		<section class="prose">
			<h1>UPS</h1>
			<h2>Truck Audit Forms</h2>
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
				<span>
					Choose the metros that you want to print forms for and click the print button.
				</span>
			</div>
			<h3 class="mb-2">Metros</h3>
			<MetroForm />
		</section>
	);
});
