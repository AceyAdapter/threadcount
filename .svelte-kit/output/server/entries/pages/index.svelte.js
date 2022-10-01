import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "../../chunks/index-2835083a.js";
var instagram_svelte_svelte_type_style_lang = "";
const Threadcount_logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style = "w-4" } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  return `<div><svg${add_attribute("class", style, 0)} viewBox="${"0 0 507 627"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M400 18.4375C400 83.8906 351.256 137.993 288.107 146.348C284.017 115.58\n      270.477 87.8086 250.483 66.0869C272.551 26.6768 314.727 0 363.125\n      0H381.562C391.761 0 400 8.23926 400 18.4375ZM105 55.3125C105 45.1143\n      113.239 36.875 123.438 36.875H141.875C213.147 36.875 270.938 94.665\n      270.938 165.937V184.375V239.687C270.938 249.886 262.698 258.125 252.5\n      258.125C242.302 258.125 234.062 249.886 234.062 239.687V184.375C162.79\n      184.375 105 126.585 105 55.3125Z"}" fill="${"#367B31"}"></path><path d="${"M168.45 222.125C174.617 222.125 179.756 226.631 181.653 232.561C191.378\n      263.158 220.077 285.374 253.994 285.374C287.912 285.374 316.611 263.158\n      326.335 232.561C328.233 226.631 333.372 222.125 339.539\n      222.125H349.5C367.289 222.125 384.445 228.371 398.123 239.756L497.898\n      322.849C503.116 327.197 506.357 333.522 506.911 340.321C507.464 347.121\n      505.251 353.841 500.744 358.98L456.47 409.579C447.457 419.936 431.803\n      421.122 421.209 412.346L380.492 378.429V576.319C380.492 604.227 357.802\n      626.918 329.893 626.918H178.096C150.187 626.918 127.497 604.227 127.497\n      576.319V378.429L86.7801 412.346C76.265 421.122 60.6109 419.936 51.5189\n      409.579L7.24465 358.98C2.73816 353.841 0.524452 347.121 1.07788\n      340.321C1.63131 333.522 4.87281 327.197 10.0908 322.849L109.866\n      239.756C123.544 228.371 140.7 222.125 158.489 222.125H168.45Z"}" fill="${"#7C6354"}"></path></svg></div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { initTransparent = false } = $$props;
  let y = 0;
  if ($$props.initTransparent === void 0 && $$bindings.initTransparent && initTransparent !== void 0)
    $$bindings.initTransparent(initTransparent);
  return `<div class="${"sticky top-0 flex flex-row lg:justify-between justify-center py-3 lg:py-4 lg:px-10 px-6 bg-base-100 z-50 " + escape(initTransparent || y > 70 ? "border-b-2 border-primary" : "")}"><div><a class="${"flex flex-row items-end"}" href="${"/"}">${validate_component(Threadcount_logo, "ThreadcountLogo").$$render($$result, { style: "lg:w-8 w-6 mr-2" }, {}, {})}
      <div class="${"text-primary font-poppins font-bold text-xl lg:text-2xl"}">Thread
        <span class="${"ml-[-2px] text-secondary"}">Count</span></div></a></div>
  </div>

`;
});
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style = "w-screen h-screen" } = $$props;
  let { id = "#" } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<div${add_attribute("class", style, 0)}${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
var cta_svelte_svelte_type_style_lang = "";
const css = {
  code: "@-webkit-keyframes svelte-wi2t7f-bounce{0%,20%,50%,80%,100%{transform:translateY(0)}40%{transform:translateY(-30px)}60%{transform:translateY(-15px)}}@keyframes svelte-wi2t7f-bounce{0%,20%,50%,80%,100%{transform:translateY(0)}40%{transform:translateY(-30px)}60%{transform:translateY(-15px)}}.bounce.svelte-wi2t7f{-webkit-animation:svelte-wi2t7f-bounce 3s infinite;animation:svelte-wi2t7f-bounce 3s infinite}",
  map: null
};
const Cta = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"z-40 absolute bottom-4 left-1/2 transform -translate-x-1/2"}"><div class="${"flex flex-row items-center justify-center"}"><div><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"bounce w-4 fill-secondary svelte-wi2t7f"}" viewBox="${"0 0 384 512"}"><path d="${"M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8\n          0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32\n          14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0\n          45.3l160 160z"}"></path></svg></div>
    <div class="${"text-xl text-secondary font-semibold bounce mx-2 svelte-wi2t7f"}">Learn More
    </div>
    <div><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"bounce w-4 fill-secondary svelte-wi2t7f"}" viewBox="${"0 0 384 512"}"><path d="${"M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8\n          0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32\n          14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0\n          45.3l160 160z"}"></path></svg></div></div></div>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, { initTransparent: true }, {}, {})}
${validate_component(Cta, "Cta").$$render($$result, {}, {}, {})}
<div><div>${validate_component(Section, "Section").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"text-center pt-10"}"><div class="${"lg:mt-32 mt-20 flex-col text-primary font-poppins font-bold xl:text-6xl text-4xl px-5"}"><div class="${"lg:mb-5 mb-10"}">How sustainable is your closet?</div>
          <div class="${""}">Explore 2500+ brands below.</div></div></div>`;
    }
  })}</div></div>`;
});
export { Routes as default };
