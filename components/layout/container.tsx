import { ComponentChildren } from "preact";
import { Head } from "$fresh/runtime.ts";
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
				<div class="container mx-auto px-4 grow">{children}</div>
				<Footer />
			</div>
		</>
	);
};

const Seo = ({ ...customMeta }) => {
	const meta = {
		title: "Untitled",
		description: "no description",
		...customMeta,
	};

	// https://medium.com/swlh/are-you-using-svg-favicons-yet-a-guide-for-modern-browsers-836a6aace3df

	return (
		<Head>
			<title>{meta.title}</title>
			<meta content={meta.description} name="description" />
			<meta name="theme-color" content="#ffffff"></meta>
			<link rel="icon" href="favicon.svg" type="image/svg" />
			<link rel="mask-icon" href="icon-mask.svg" color="#b3404a" />
			<link rel="apple-touch-icon" href="apple-touch-icon.png" />
			<link rel="manifest" href="manifest.json" />
			<link rel="stylesheet" href="/css/compiled.css"></link>
		</Head>
	);
};
