export const manifest = {
	appDir: "_app",
	assets: new Set([".nojekyll","CNAME","Nicholas_Kreitz_resume.pdf","favicon.png","img/blackjack_1.png","img/blackjack_2.png","img/closeup.png","img/crazy-crypto.png","img/daisyui.jpeg","img/egoh-site.png","img/fridge_1.png","img/fridge_2.png","img/nick-color.jpeg","img/nick-cutout.png","img/nmi-logo.jpeg","img/stats-card.png","img/sveltekit.png","img/vault.png"]),
	mimeTypes: {".pdf":"application/pdf",".png":"image/png",".jpeg":"image/jpeg"},
	_: {
		entry: {"file":"start-d29e1518.js","js":["start-d29e1518.js","chunks/index-9c5562c4.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
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
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
