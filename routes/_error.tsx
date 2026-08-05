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
					<div class="flex justify-center">
						<div class="mt-24">
							<h1 class="text-xl font-bold">{meta.title}</h1>
							<p>
								Sorry, but the page you were trying to view (<code>
									{props.url.pathname}
								</code>) does not exist.
							</p>
						</div>
					</div>
				</Container>
			);
    }
  }

  return <h1>Oh no...</h1>;
}