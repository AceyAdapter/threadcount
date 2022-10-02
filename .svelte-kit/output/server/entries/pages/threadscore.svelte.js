import { c as create_ssr_component, v as validate_component, e as escape, b as each, a as add_attribute } from "../../chunks/index-6b489d84.js";
import { H as Header } from "../../chunks/header-bd9c400b.js";
const Threadscore = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let brands;
  let items;
  let results;
  let isLoading;
  let submitted;
  let threadscore;
  function calcScore(...args) {
    if (submitted) {
      let score = 0;
      for (let i = 0; i < results.length; i++) {
        score += results[i].overall_score;
        console.log(results[i]["overall_score"]);
      }
      threadscore = score / results.length;
      isLoading = false;
    }
  }
  brands = [];
  items = ["none"];
  results = [];
  isLoading = false;
  submitted = false;
  {
    calcScore(submitted, results);
  }
  threadscore = 0;
  return `<div class="${"min-h-screen"}">${validate_component(Header, "Header").$$render($$result, { initTransparent: true }, {}, {})}
  <div class="${"flex flex-col items-center my-10 px-6"}"><div class="${"lg:text-5xl text-3xl font-bold text-primary"}">Get Your Threadscore
    </div>
    <div class="${"lg:text-2xl text-lg text-primary mt-5 underline"}">What is a Threadscore?
    </div>
    <div class="${"text-primary mt-5 text-center"}">The Threadscore calculator allows you to enter the brands of your outfit
      and receive a score based on the brand ratings as categorized by Good On
      You.
    </div>
    <div class="${"text-primary mt-5 text-center"}">Give it a try!</div>
    <div class="${"lg:w-1/2 w-full p-5 bg-base-200 rounded-xl mt-10"}"><div class="${"text-xl font-bold text-primary text-center"}">Threadscore Calculator
      </div>
      <div class="${"divider mt-0"}"></div>
      ${results.length > 0 && !isLoading ? `<div class="${"text-primary text-2xl text-center"}">Score: ${escape(threadscore.toFixed(2))}/5
        </div>
        <div class="${"mt-4 text-primary"}">Breakdown:</div>
        <div class="${"overflow-x-auto"}"><table class="${"table table-compact table-zebra w-full"}">
            <thead><tr><th>Name</th>
                <th>Rating</th>
                <th>People</th>
                <th>Animals</th>
                <th>Planet</th></tr></thead>
            <tbody>${each(results, (result, i) => {
    return `<tr><td>${escape(result.name)}</td>
                  <td>${escape(result.overall_score)}</td>
                  <td>${escape(result.ratings.People)}</td>
                  <td>${escape(result.ratings.Animals)}</td>
                  <td>${escape(result.ratings.Planet)}</td>
                </tr>`;
  })}</tbody></table></div>` : ``}
      <div class="${escape(submitted ? "hidden" : "") + " flex flex-col items-center"}">${each(items, (item, i) => {
    return `<div class="${"flex flex-row w-full justify-between items-center mt-2"}"><div>Item ${escape(i + 1)}</div>
            <select class="${"select select-bordered w-2/3"}"><option value="${"none"}" disabled selected>Select a brand</option>${each(brands, (brand) => {
      return `<option${add_attribute("value", brand.code, 0)}>${escape(brand.name)}</option>`;
    })}</select>
          </div>`;
  })}
        <div class="${"btn btn-outline btn-primary mt-10"}">Add an item
        </div>
        <div class="${"btn btn-primary btn-primary mt-10"}">Calculate Score
        </div></div></div></div></div>`;
});
export { Threadscore as default };
