import { Container } from "/components/layout/container.tsx";
import { UnknownPageProps } from "$fresh/server.ts";

export default function NotFoundPage({ url }: UnknownPageProps) {
	const meta = {
		title: "Page Not Found",
		description: "The page you requested does not exist.",
	};

	return (
		<Container {...meta}>
			<div class="flex justify-center">
				<div class="mt-24">
					<h1 class="text-xl font-bold">{meta.title}</h1>
					<p>
						Sorry, but the page you were trying to view
						(<code>{url.pathname}</code>) does not exist.
					</p>
				</div>
			</div>
		</Container>
	);
}