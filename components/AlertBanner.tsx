import type { ComponentChildren } from "preact";

interface AlertBannerProps {
	children: ComponentChildren;
}

export default function AlertBanner({ children }: AlertBannerProps) {
	return (
		<div role="alert" class="alert">
			<svg
				aria-hidden="true"
				focusable="false"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="h-6 w-6 shrink-0 stroke-current"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				>
				</path>
			</svg>
			<span>{children}</span>
		</div>
	);
}