import { define } from "@/utils.ts";

export default define.page(({ state }) => {
	state.title = "Home";
	state.description = "Welcome to Nancy Farmer's personal web site.";

	return (
		<img src="/img/photo.png" class="my-4 rounded-lg" alt="Nancy Farmer" />
	);
});
