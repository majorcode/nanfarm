import { ComponentChildren } from "preact";
import Seo from "./Seo.jsx";
import NavBar from "/components/NavBar.tsx";
import Footer from "/components/Footer.tsx";

export type Props = {
	children: ComponentChildren;
	title?: string;
	name?: string;
	description?: string;
};

export const Container = ({ children, ...customMeta }: Props) => {
	return (
		<>
			<Seo {...customMeta} />
			<div class="flex flex-col min-h-[100vh]">
				<NavBar />
				<div class="container px-4 mx-auto grow">{children}</div>
				<Footer />
			</div>
		</>
	);
};
