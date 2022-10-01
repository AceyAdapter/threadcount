
import root from '__GENERATED__/root.svelte';
import { respond } from '/Users/nicholaskreitz/Desktop/threadcount/.svelte-kit/runtime/server/index.js';
import { set_paths, assets, base } from '/Users/nicholaskreitz/Desktop/threadcount/.svelte-kit/runtime/paths.js';
import { set_prerendering } from '/Users/nicholaskreitz/Desktop/threadcount/.svelte-kit/runtime/env.js';

const template = ({ head, body, assets, nonce }) => "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <title>ThreadCount</title>\n    <meta charset=\"utf-8\" />\n    <link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n    <link\n      href=\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap\"\n      rel=\"stylesheet\"\n    />\n    <!-- Google tag (gtag.js) -->\n    <script\n      async\n      src=\"https://www.googletagmanager.com/gtag/js?id=G-MHL0YJ8M7N\"\n    ></script>\n    <script>\n      window.dataLayer = window.dataLayer || [];\n      function gtag() {\n        dataLayer.push(arguments);\n      }\n      gtag(\"js\", new Date());\n\n      gtag(\"config\", \"G-MHL0YJ8M7N\");\n    </script>\n    " + head + "\n  </head>\n  <body>\n    <div>" + body + "</div>\n  </body>\n</html>\n";

let read = null;

set_paths({"base":"","assets":""});

let default_protocol = 'https';

// allow paths to be globally overridden
// in svelte-kit preview and in prerendering
export function override(settings) {
	default_protocol = settings.protocol || default_protocol;
	set_paths(settings.paths);
	set_prerendering(settings.prerendering);
	read = settings.read;
}

export class Server {
	constructor(manifest) {
		this.options = {
			csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
			dev: false,
			floc: false,
			get_stack: error => String(error), // for security
			handle_error: (error, event) => {
				this.options.hooks.handleError({
					error,
					event,

					// TODO remove for 1.0
					// @ts-expect-error
					get request() {
						throw new Error('request in handleError has been replaced with event. See https://github.com/sveltejs/kit/pull/3384 for details');
					}
				});
				error.stack = this.options.get_stack(error);
			},
			hooks: null,
			hydrate: true,
			manifest,
			method_override: {"parameter":"_method","allowed":[]},
			paths: { base, assets },
			prefix: assets + '/_app/',
			prerender: {
				default: true,
				enabled: true
			},
			read,
			root,
			service_worker: null,
			router: true,
			template,
			template_contains_nonce: false,
			trailing_slash: "never"
		};
	}

	async respond(request, options = {}) {
		if (!(request instanceof Request)) {
			throw new Error('The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details');
		}

		if (!this.options.hooks) {
			const module = await import("./hooks.js");
			this.options.hooks = {
				getSession: module.getSession || (() => ({})),
				handle: module.handle || (({ event, resolve }) => resolve(event)),
				handleError: module.handleError || (({ error }) => console.error(error.stack)),
				externalFetch: module.externalFetch || fetch
			};
		}

		return respond(request, this.options, options);
	}
}
