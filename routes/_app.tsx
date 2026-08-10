import { define } from "@/utils.ts";

const SITE_NAME = "Nanfarm.com";

export default define.page((ctx) => {
	const { Component, state } = ctx;
	const { title, description, keywords } = state;
	const siteTitle = (title ? `${title} · ${SITE_NAME}` : SITE_NAME);

	return (
		<html data-theme="valentine" lang="en">
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>{siteTitle}</title>
				{description && <meta name="description" content={description} />}
				{keywords && <meta name="keywords" content={keywords} />}
				<meta name="theme-color" content="#ffffff"></meta>
				<link rel="icon" href="/favicon.svg" type="image/svg" />
				<link rel="mask-icon" href="/icon-mask.svg" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				<link rel="manifest" href="/manifest.json" />
			</head>
			<Component />
		</html>
	);
});
