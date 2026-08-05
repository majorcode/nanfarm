import { HttpError, PageProps } from "fresh";
import { Container } from "@/components/layout/container.tsx";

export default function ErrorPage(props: PageProps) {
  const error = props.error; // Contains the thrown Error or HTTPError
	
  if (error instanceof HttpError) {
    const status = error.status; // HTTP status code

    // Render a 404 not found page
    if (status === 404) {
			const meta = {
				title: "Page Not Found",
				description: "The page you requested does not exist.",
			};

			return (
				<Container {...meta}>
					<main role="main" class="prose">
						<h1>{meta.title}</h1>
						<p>
							Sorry, but the page you were trying to view (<code>
								{props.url.pathname}
							</code>) does not exist.
						</p>
					</main>
				</Container>
			);
    }
  }

  return (
		<Container title="Error">
			<main role="main" class="prose">
				<h1>Oh no...</h1>
				<p>Something went wrong.</p>
			</main>
		</Container>
	);
}