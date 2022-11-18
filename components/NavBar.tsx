export default function NavBar() {
	return (
		<div class="navbar bg-base-100">
			<div class="flex-1">
				<a href="/" class="btn btn-ghost normal-case text-xl">
					<img src="/img/heart.svg" style="width: 36px; height: 36px;" />
					<span class="pl-2">Nanfarm</span>
				</a>
			</div>
			<div class="flex-none">
				<ul class="menu menu-horizontal p-0">
					<li><a href="/">Home</a></li>
					<li><a href="/ups">UPS</a></li>
				</ul>
			</div>
		</div>
	);
}