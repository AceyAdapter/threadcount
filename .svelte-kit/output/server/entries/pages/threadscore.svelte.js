import { c as create_ssr_component, v as validate_component } from "../../chunks/index-c5e2452c.js";
import { H as Header } from "../../chunks/header-29570dc9.js";
const Threadscore = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"min-h-screen"}">${validate_component(Header, "Header").$$render($$result, { initTransparent: true }, {}, {})}
  <div>Score!</div></div>`;
});
export { Threadscore as default };
