import { c as create_ssr_component, v as validate_component, a as each, e as escape } from "../../chunks/index-e92a6b2a.js";
import { H as Header } from "../../chunks/header-c6fc00f6.js";
import "highcharts";
const Overall_chart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let chart;
  let { rating_counts } = $$props;
  function updateChart(...args) {
    console.log("run");
    if (chart) {
      console.log("run");
      chart.addSeries({
        name: "Test",
        color: "#000",
        data: [
          { name: "We Avoid", y: rating_counts[1] },
          {
            name: "Not Good Enough",
            y: rating_counts[2]
          },
          {
            name: "It's a Start",
            y: rating_counts[3]
          },
          { name: "Good", y: rating_counts[4] },
          { name: "Great", y: rating_counts[5] }
        ]
      }, true);
    }
  }
  if ($$props.rating_counts === void 0 && $$bindings.rating_counts && rating_counts !== void 0)
    $$bindings.rating_counts(rating_counts);
  chart = void 0;
  {
    updateChart(rating_counts);
  }
  return `<div><figure id="${"container"}"></figure></div>`;
});
const App = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let brands;
  let rating_counts;
  function formatData(...args) {
    let counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    for (let i = 0; i < brands.length; i++) {
      let ratings = JSON.parse(brands[i].ratings.replaceAll("'", '"'));
      brands[i].ratings = ratings;
      counts[brands[i].overall_score] += 1;
    }
    rating_counts = counts;
  }
  brands = [];
  rating_counts = {};
  {
    formatData(brands);
  }
  return `<div class="${"min-h-screen"}">${validate_component(Header, "Header").$$render($$result, { initTransparent: true }, {}, {})}
  <div class="${"flex flex-row flex-wrap"}"><div class="${"overflow-x-auto"}">${validate_component(Overall_chart, "OverallChart").$$render($$result, { rating_counts }, {}, {})}
      <table class="${"table table-compact table-zebra w-full"}">
        <thead><tr><th></th>
            <th>Name</th>
            <th>Rating</th>
            <th>People</th>
            <th>Animals</th>
            <th>Planet</th></tr></thead>
        <tbody>${each(brands, (brand, i) => {
    return `
            <tr><th>${escape(i + 1)}</th>
              <td>${escape(brand.name)}</td>
              <td>${escape(brand.overall_score)}</td>
              <td>${escape(brand.ratings.People)}</td>
              <td>${escape(brand.ratings.Animals)}</td>
              <td>${escape(brand.ratings.Planet)}</td>
            </tr>`;
  })}</tbody></table></div></div></div>`;
});
export { App as default };
