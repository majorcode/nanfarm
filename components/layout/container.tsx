import { ComponentChildren } from "preact";
import { Head } from "$fresh/runtime.ts";
import NavBar from "/components/NavBar.tsx";
import Footer from "/components/Footer.tsx";

export type Props = {
	children: ComponentChildren;
	title?: string;
	titleSuffix?: string;
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
		title: null,
		titleSuffix: "nanfarm.com",
		description: "no description",
		...customMeta,
	};

	return (
		<Head>
			<title>{meta.title? meta.title + " - " + meta.titleSuffix : meta.titleSuffix}</title>
			<meta content={meta.description} name="description" />
			<link href="/img/heart.svg" rel="icon" type="image/svg" />
			<link rel="stylesheet" href="/css/compiled.css"></link>
		</Head>
	);
};
