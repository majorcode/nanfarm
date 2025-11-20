import { Head } from "fresh/runtime";

export default function Seo({ ...customMeta }) {
	const meta = {
		title: "Untitled",
		description: "no description",
		...customMeta,
	};

	// https://medium.com/swlh/are-you-using-svg-favicons-yet-a-guide-for-modern-browsers-836a6aace3df

	// There are suggestions to do icons better, but Safari still seems to want a mask-icon.
	// https://dev.to/masakudamatsu/favicon-nightmare-how-to-maintain-sanity-3al7

	return (
		<Head>
			<title>{meta.title}</title>
			<meta content={meta.description} name="description" />
			<meta name="theme-color" content="#ffffff"></meta>
			<link rel="icon" href="/favicon.svg" type="image/svg" />
			<link rel="mask-icon" href="/icon-mask.svg" color="#b3404a" />
			<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
			<link rel="manifest" href="/manifest.json" />
			<link rel="stylesheet" href="/css/compiled.css"></link>
		</Head>
	);
}
