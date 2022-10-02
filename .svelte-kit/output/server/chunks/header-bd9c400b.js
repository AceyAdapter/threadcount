import { c as create_ssr_component, e as escape, n as null_to_empty, a as add_attribute, v as validate_component } from "./index-6b489d84.js";
var instagram_svelte_svelte_type_style_lang = "";
const css = {
  code: "@-webkit-keyframes svelte-kahn6z-delayed_spin{0%,20%,70%{transform:rotate(0deg)}90%{transform:rotate(360deg)}}@keyframes svelte-kahn6z-delayed_spin{0%,20%,70%{transform:rotate(0deg)}90%{transform:rotate(360deg)}}.spin-delay.svelte-kahn6z{-webkit-animation:svelte-kahn6z-delayed_spin 15s infinite;animation:svelte-kahn6z-delayed_spin 15s infinite}",
  map: null
};
const Instagram = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style = "w-3" } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css);
  return `<div class="${"hover:animate-spin spin-delay ml-2 p-2 rounded-3xl bg-primary flex justify-center items-center svelte-kahn6z"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 448 512"}" class="${escape(null_to_empty(style)) + " svelte-kahn6z"}"><path d="${"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0\n      53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9\n      448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69\n      76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0\n      111.28 61.9 111.28 142.3V448z"}"></path></svg></div>`;
});
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
  <div class="${"lg:block hidden"}"><a href="${"https://www.linkedin.com/in/nicholas-kreitz-3a13531a0/"}" target="${"_blank"}">${validate_component(Instagram, "Instagram").$$render($$result, { style: "w-5 h-5 fill-base-100" }, {}, {})}</a></div>
  <div class="${"lg:hidden absolute right-5 top-2"}"><a href="${"https://www.linkedin.com/in/nicholas-kreitz-3a13531a0/"}" target="${"_blank"}">${validate_component(Instagram, "Instagram").$$render($$result, { style: "w-5 h-5 fill-base-100" }, {}, {})}</a></div></div>

`;
});
export { Header as H };
