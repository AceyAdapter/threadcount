import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../chunks/index-c5e2452c.js";
import { H as Header } from "../../chunks/header-29570dc9.js";
import "highcharts";
const Overall_chart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let chart;
  let { rating_counts } = $$props;
  function updateChart(...args) {
    console.log("run");
    if (chart) {
      console.log("run");
      chart.addSeries({
        name: "Count",
        color: "#000",
        data: [
          { name: "Avoid", y: rating_counts[1] },
          { name: "Not Good", y: rating_counts[2] },
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
const Rating_chart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let chart;
  let { rating_counts } = $$props;
  let { container_id } = $$props;
  let { title } = $$props;
  function updateChart(...args) {
    console.log("run");
    if (chart) {
      console.log("run");
      chart.addSeries({
        name: "Count",
        color: "#000",
        data: [
          { name: "Terrible", y: rating_counts[0] },
          { name: "Avoid", y: rating_counts[1] },
          { name: "Not Good", y: rating_counts[2] },
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
  if ($$props.container_id === void 0 && $$bindings.container_id && container_id !== void 0)
    $$bindings.container_id(container_id);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  chart = void 0;
  {
    updateChart(rating_counts);
  }
  return `<div><figure${add_attribute("id", container_id, 0)}></figure></div>`;
});
const App = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let brands;
  let rating_counts;
  let animal_counts;
  let people_counts;
  let planet_counts;
  function formatData(...args) {
    let counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    let ani_counts = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    let pep_counts = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    let pla_counts = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    for (let i = 0; i < brands.length; i++) {
      let ratings = JSON.parse(brands[i].ratings.replaceAll("'", '"'));
      brands[i].ratings = ratings;
      counts[brands[i].overall_score] += 1;
      ani_counts[brands[i].ratings.Animals] += 1;
      pep_counts[brands[i].ratings.People] += 1;
      pla_counts[brands[i].ratings.Planet] += 1;
    }
    rating_counts = counts;
    animal_counts = ani_counts;
    people_counts = pep_counts;
    planet_counts = pla_counts;
  }
  brands = [];
  rating_counts = {};
  animal_counts = {};
  people_counts = {};
  planet_counts = {};
  {
    formatData(brands);
  }
  return `<div class="${"min-h-screen"}">${validate_component(Header, "Header").$$render($$result, { initTransparent: true }, {}, {})}
  <div class="${"flex flex-row flex-wrap"}"><div class="${"lg:w-1/2 w-full p-5"}">${validate_component(Overall_chart, "OverallChart").$$render($$result, { rating_counts }, {}, {})}</div>
    <div class="${"lg:w-1/2 w-full p-5"}">${validate_component(Rating_chart, "RatingChart").$$render($$result, {
    rating_counts: animal_counts,
    title: "Distribtution of Animal Ratings",
    container_id: "animals"
  }, {}, {})}</div>
    <div class="${"lg:w-1/2 w-full p-5"}">${validate_component(Rating_chart, "RatingChart").$$render($$result, {
    rating_counts: people_counts,
    title: "Distribution of People Ratings",
    container_id: "people"
  }, {}, {})}</div>
    <div class="${"lg:w-1/2 w-full p-5"}">${validate_component(Rating_chart, "RatingChart").$$render($$result, {
    rating_counts: planet_counts,
    title: "Distribution of Planet Ratings",
    container_id: "planet"
  }, {}, {})}</div>
    <div class="${"overflow-x-auto"}"><table class="${"table table-compact table-zebra w-full"}">
        <thead><tr><th></th>
            <th>Name</th>
            <th>Rating</th>
            <th>People</th>
            <th>Animals</th>
            <th>Planet</th></tr></thead>
        <tbody></tbody></table></div></div></div>`;
});
export { App as default };
