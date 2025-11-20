import { ComponentChildren } from "preact";
import Seo from "./Seo.jsx";
import NavBar from "../NavBar.tsx";
import Footer from "../Footer.tsx";

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
			<div class="flex flex-col min-h-screen">
				<NavBar />
				<div class="container px-4 mx-auto grow">{children}</div>
				<Footer />
			</div>
		</>
	);
};
