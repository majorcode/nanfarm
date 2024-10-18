export default function Footer() {
	return (
		<footer class="grid grid-cols-2 p-4 bg-neutral text-neutral-content">
			<div class="flex items-center whitespace-nowrap">
				<img src="/img/heart.svg" style="width: 36px; height: 36px;" />
				<p>Copyright © 2024 - Nancy Farmer</p>
			</div>
			<div class="flex justify-end items-center">
				<a href="https://www.facebook.com/nanfarm">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
				</a>
			</div>
		</footer>
	);
}
