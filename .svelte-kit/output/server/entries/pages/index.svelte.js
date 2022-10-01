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
var cta_svelte_svelte_type_style_lang = "";
const css = {
  code: "@-webkit-keyframes svelte-12qrohu-bounce{0%,20%,50%,80%,100%{transform:translateY(0)}40%{transform:translateY(-30px)}60%{transform:translateY(-15px)}}@keyframes svelte-12qrohu-bounce{0%,20%,50%,80%,100%{transform:translateY(0)}40%{transform:translateY(-30px)}60%{transform:translateY(-15px)}}@-webkit-keyframes svelte-12qrohu-disappear{0%{opacity:1}100%{opacity:0}}@keyframes svelte-12qrohu-disappear{0%{opacity:1}100%{opacity:0}}.bounce.svelte-12qrohu{-webkit-animation:svelte-12qrohu-bounce 3s infinite;animation:svelte-12qrohu-bounce 3s infinite}.dissolve.svelte-12qrohu{-webkit-animation:svelte-12qrohu-disappear 1s ease-in-out forwards;animation:svelte-12qrohu-disappear 1s ease-in-out forwards}",
  map: null
};
const Cta = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${escape("") + " z-40 absolute bottom-4 left-1/2 transform -translate-x-1/2 svelte-12qrohu"}"><div class="${"bounce flex flex-row items-center justify-center svelte-12qrohu"}"><div><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"w-4 fill-white"}" viewBox="${"0 0 384 512"}"><path d="${"M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8\n          0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32\n          14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0\n          45.3l160 160z"}"></path></svg></div>
    <div class="${"text-xl text-white font-semibold mx-2"}">Learn More</div>
    <div><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"w-4 fill-white"}" viewBox="${"0 0 384 512"}"><path d="${"M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8\n          0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32\n          14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0\n          45.3l160 160z"}"></path></svg></div></div></div>

`;
});
const Good_on_you = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style = "w-4" } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  return `<svg${add_attribute("class", style, 0)} viewBox="${"0 0 187 34"}" xmlns="${"http://www.w3.org/2000/svg"}"><g fill-rule="${"evenodd"}"><path d="${"M10.08 15.8a3.64 3.64 0 0 1-4.83 0 3.5 3.5 0 0\n      1-.97-2.63c0-1.1.33-1.99.97-2.62a3.49 3.49 0 0 1 4.83 0c.65.63.97 1.52.97\n      2.62s-.32 2-.97 2.62M4.2 24.64c.54.04.97.08 1.33.08h3.67c2.06 0 3.06.92\n      3.06 2.76 0 2.03-1.54 3.4-4.57 3.4-3.02 0-4.68-1.4-4.68-3.51 0-1.18.4-2.1\n      1.2-2.73M15.9 5.38h-2.6a2.3 2.3 0 0 1-2.01\n      2.3c-.28.01-.59-.07-.81-.15l-.33-.14c-.78-.3-1.6-.45-2.5-.45-1.83\n      0-3.34.6-4.53 1.73a5.94 5.94 0 0 0-1.8 4.5c0 1.59.43 2.95 1.33\n      4.06-1.47.77-2.2 1.92-2.2 3.43 0 1.25.4 2.25 1.23 2.95A4.97 4.97 0 0 0 0\n      27.48c0 3.84 3.06 6.12 7.7 6.12 4.47 0 7.67-2.1 7.67-6.41\n      0-3.29-2.23-5.13-5.69-5.13H5.4c-1.37 0-2.05-.52-2.05-1.55 0-.81.4-1.4\n      1.19-1.8.9.44 1.94.66 3.13.66 1.83 0 3.34-.55 4.53-1.66a6.02 6.02 0 0 0\n      1.8-4.54c0-1.26-.28-2.35-.87-3.3a4.99 4.99 0 0 0 2.78-4.49"}"></path><path d="${"M30.04 21.96a4.79 4.79 0 0 1-4.1 2 4.9 4.9 0 0 1-4.14-2 8.04 8.04 0 0\n      1-1.47-4.8c0-1.83.5-3.42 1.47-4.75a4.84 4.84 0 0 1 4.14-2.03c1.76 0\n      3.13.67 4.1 2.03a7.64 7.64 0 0 1 1.52 4.76c0 1.84-.5 3.43-1.52\n      4.8m-4.1-14.39c-2.63 0-4.71.96-6.33 2.84a10.14 10.14 0 0 0-2.38 6.75c0\n      2.62.8 4.9 2.38 6.79a7.91 7.91 0 0 0 6.33 2.8 7.8 7.8 0 0 0 6.3-2.8 10.08\n      10.08 0 0 0 2.41-6.8c0-2.6-.8-4.86-2.41-6.74a7.82 7.82 0 0 0-6.3-2.84"}"></path><path d="${"M49.84 21.96a4.79 4.79 0 0 1-4.1 2 4.9 4.9 0 0 1-4.14-2 8.04 8.04 0 0\n      1-1.48-4.8c0-1.83.5-3.42 1.48-4.75a4.84 4.84 0 0 1 4.14-2.03c1.76 0\n      3.13.67 4.1 2.03a7.64 7.64 0 0 1 1.51 4.76c0 1.84-.5 3.43-1.5 4.8M45.73\n      7.57c-2.63 0-4.72.96-6.34 2.84a10.14 10.14 0 0 0-2.37 6.75c0 2.62.79 4.9\n      2.37 6.79a7.91 7.91 0 0 0 6.34 2.8 7.8 7.8 0 0 0 6.3-2.8 10.08 10.08 0 0 0\n      2.4-6.8c0-2.6-.78-4.86-2.4-6.74a7.82 7.82 0 0 0-6.3-2.84"}"></path><path d="${"M65.57 23.96c-3.17 0-5.25-2.77-5.25-6.8 0-4.01 2.08-6.78 5.25-6.78 3.28\n      0 5.26 2.77 5.26 6.79s-1.98 6.79-5.26\n      6.79zm5-13.87c-.32-.59-1.04-1.14-2.08-1.7a6.78 6.78 0 0 0-3.2-.8c-5.19\n      0-8.07 3.83-8.07 9.58s2.88 9.59 8.06 9.59c2.16 0 4.4-1.15\n      5.3-2.58v2.28h3.02V.36h-3.03v9.73z"}"></path><path d="${"M97 21.96a4.79 4.79 0 0 1-4.11 2 4.9 4.9 0 0 1-4.14-2 8.03 8.03 0 0\n      1-1.47-4.8c0-1.83.5-3.42 1.47-4.75a4.84 4.84 0 0 1 4.14-2.03c1.76 0\n      3.13.67 4.1 2.03a7.64 7.64 0 0 1 1.51 4.76c0 1.84-.5 3.43-1.5 4.8M92.88\n      7.57c-2.63 0-4.71.96-6.33 2.84a10.14 10.14 0 0 0-2.38 6.75c0 2.62.8 4.9\n      2.38 6.79a7.92 7.92 0 0 0 6.33 2.8 7.8 7.8 0 0 0 6.3-2.8 10.08 10.08 0 0 0\n      2.41-6.8c0-2.6-.8-4.86-2.41-6.74a7.82 7.82 0 0 0-6.3-2.84"}"></path><path d="${"M114.2 7.58c-2.63 0-4.64 1.26-6.01\n      3.73V7.88h-3.02v18.58h3.02v-7.78c0-2.47.5-4.5 1.51-6 1.04-1.52 2.27-2.3\n      3.67-2.3 2.09 0 3.13 1.26 3.13\n      3.8v12.28h3.03V13.37c0-3.69-2.02-5.79-5.33-5.79"}"></path><path d="${"M136.4 21.3l-4.6-13.42h-3.3l6.36 17.8-2.88 8.3h3.1l9-26.1h-3.17z"}"></path><path d="${"M157.82 21.96a4.79 4.79 0 0 1-4.1 2 4.9 4.9 0 0 1-4.14-2 8.03 8.03 0 0\n      1-1.47-4.8c0-1.83.5-3.42 1.47-4.75a4.84 4.84 0 0 1 4.14-2.03c1.76 0\n      3.13.67 4.1 2.03a7.64 7.64 0 0 1 1.52 4.76c0 1.84-.5 3.43-1.52\n      4.8m-4.1-14.39c-2.63 0-4.71.96-6.33 2.84a10.14 10.14 0 0 0-2.38 6.75c0\n      2.62.8 4.9 2.38 6.79a7.92 7.92 0 0 0 6.33 2.8 7.8 7.8 0 0 0 6.3-2.8 10.08\n      10.08 0 0 0 2.41-6.8c0-2.6-.8-4.86-2.41-6.74a7.82 7.82 0 0 0-6.3-2.84"}"></path><path d="${"M177.12 7.88v7.78c0 2.47-.5 4.5-1.55 6-1 1.52-2.23 2.3-3.63 2.3-2.1\n      0-3.13-1.26-3.13-3.8V7.88h-3.03v13.09c0 3.69 2.02 5.79 5.33 5.79 2.63 0\n      4.64-1.26 6-3.73v3.43h3.03V7.88h-3.02z"}"></path><path d="${"M184.02 2.05v.52h.43c.22 0 .32-.09.32-.26s-.1-.26-.32-.26h-.43zm.89\n      2.13l-.74-1.12h-.15v1.12h-.51V1.56h.95c.53 0 .82.26.82.75 0\n      .4-.21.65-.55.72l.76 1.15h-.58zm-2.25-1.31c0 .52.16.96.48 1.3.32.36.73.53\n      1.24.53.5 0 .92-.17 1.24-.52.32-.35.48-.8.48-1.31\n      0-.52-.16-.96-.48-1.31a1.6 1.6 0 0 0-1.24-.52c-.51\n      0-.92.17-1.24.52-.32.35-.48.79-.48 1.3zm-.58\n      0c0-.68.22-1.25.66-1.71.43-.46.98-.69 1.64-.69.65 0 1.2.23\n      1.64.69.43.46.65 1.03.65 1.7 0 .69-.22 1.25-.65\n      1.72-.44.46-.99.68-1.64.68-.66 0-1.2-.22-1.64-.68a2.37 2.37 0 0\n      1-.66-1.71z"}"></path></g></svg>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"min-h-screen"}">${validate_component(Header, "Header").$$render($$result, { initTransparent: true }, {}, {})}
  ${validate_component(Cta, "Cta").$$render($$result, {}, {}, {})}
  <div class="${"text-center my-20"}"><div class="${"lg:mt-32 flex-col text-primary font-poppins font-bold xl:text-6xl text-4xl px-5"}"><div class="${"lg:mb-5 mb-20"}">How sustainable is your closet?</div></div></div>
  <div class="${"flex flex-col items-center py-20 my-20 bg-secondary px-4"}"><div class="${"text-base-100 text-center px-3 text-3xl font-bold"}">Explore sustainability and ethical ratings of 2500+ brands
    </div>
    <div class="${"flex flex-row mt-2 items-center"}"><div class="${"mr-2 text-sm text-white"}">Powered by</div>
      <a href="${"https://goodonyou.eco/"}" target="${"_blank"}">${validate_component(Good_on_you, "GoodOnYou").$$render($$result, { style: "w-24 fill-white" }, {}, {})}</a></div></div>
  <div class="${"flex flex-col items-center my-20 px-4"}"><div class="${"text-primary text-center px-3 text-3xl font-bold"}">Gain insights into your fashion footprint.
    </div></div></div>`;
});
export { Routes as default };