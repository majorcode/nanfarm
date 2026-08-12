import { define } from "@/utils.ts";

export default define.middleware(async (ctx) => {
	const start = performance.now();
	const response = await ctx.next();
	const duration = performance.now() - start;
	response.headers.set("Server-Timing", `total;dur=${duration.toFixed(1)}`);
	return response;
});