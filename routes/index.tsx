import { Container } from "/components/layout/container.tsx";

export default function Home() {
	const date = new Date();
	date.setHours(date.getHours() + 1);

	const meta = {
		title: "Placeholder Landing Page",
		description: "This is a sample landing page using Tailwind CSS and daisyUI.",
	};

	return (
		<Container {...meta}>
			<img src="/img/photo.png" class="my-4 rounded-lg" />
		</Container>
	);
}
