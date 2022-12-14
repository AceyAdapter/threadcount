export const manifest = {
	appDir: "_app",
	assets: new Set([".nojekyll","CNAME","favicon.png","img/blackjack_1.png","img/blackjack_2.png","img/closeup.png","img/crazy-crypto.png","img/daisyui.jpeg","img/egoh-site.png","img/fridge_1.png","img/fridge_2.png","img/nick-color.jpeg","img/nick-cutout.png","img/nmi-logo.jpeg","img/stats-card.png","img/sveltekit.png","img/vault.png"]),
	mimeTypes: {".png":"image/png",".jpeg":"image/jpeg"},
	_: {
		entry: {"file":"start-01e38b08.js","js":["start-01e38b08.js","chunks/index-38327061.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "app",
				pattern: /^\/app\/?$/,
				names: [],
				types: [],
				path: "/app",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "threadscore",
				pattern: /^\/threadscore\/?$/,
				names: [],
				types: [],
				path: "/threadscore",
				shadow: null,
				a: [0,4],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
