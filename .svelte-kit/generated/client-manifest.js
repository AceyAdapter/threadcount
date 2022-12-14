export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/app.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/threadscore.svelte")
];

export const dictionary = {
	"": [[0, 3], [1]],
	"app": [[0, 2], [1]],
	"threadscore": [[0, 4], [1]]
};