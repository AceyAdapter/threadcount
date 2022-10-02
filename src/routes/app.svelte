<script>
  // @ts-nocheck

  import { onMount } from 'svelte'
  import Header from '../components/header.svelte'
  import Highcharts from 'highcharts'
  import OverallChart from '../components/overall_chart.svelte'

  $: brands = []
  $: name = ''
  $: rating_series = []
  $: chart = undefined
  $: rating_counts = {}

  $: formatData(brands)

  function formatData(...args) {
    let counts = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    }

    for (let i = 0; i < brands.length; i++) {
      let ratings = JSON.parse(brands[i].ratings.replaceAll("'", '"'))

      brands[i].ratings = ratings

      counts[brands[i].overall_score] += 1
    }

    rating_counts = counts
  }

  onMount(async () => {
    fetch('https://threadcount-api.herokuapp.com/api/brands')
      .then((res) => res.json())
      .then((data) => {
        brands = data
      })
  })
</script>

<div class="min-h-screen">
  <Header initTransparent={true} />
  <div class="flex flex-row flex-wrap">
    <div class="overflow-x-auto">
      <OverallChart {rating_counts} />
      <table class="table table-compact table-zebra w-full">
        <!-- head -->
        <thead>
          <tr>
            <th />
            <th>Name</th>
            <th>Rating</th>
            <th>People</th>
            <th>Animals</th>
            <th>Planet</th>
          </tr>
        </thead>
        <tbody>
          {#each brands as brand, i}
            <!-- row 1 -->
            <tr>
              <th>{i + 1}</th>
              <td>{brand.name}</td>
              <td>{brand.overall_score}</td>
              <td>{brand.ratings.People}</td>
              <td>{brand.ratings.Animals}</td>
              <td>{brand.ratings.Planet}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</div>
