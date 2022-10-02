<script>
  // @ts-nocheck

  import { onMount } from 'svelte'
  import Header from '../components/header.svelte'
  import Highcharts from 'highcharts'
  import OverallChart from '../components/overall_chart.svelte'
  import RatingChart from '../components/rating_chart.svelte'
  import Loader from '../components/loader.svelte'

  $: brands = []
  $: name = ''
  $: rating_series = []
  $: chart = undefined
  $: rating_counts = {}
  $: animal_counts = {}
  $: people_counts = {}
  $: planet_counts = {}

  $: isLoading = true

  $: formatData(brands)

  function formatData(...args) {
    let counts = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    }

    let ani_counts = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    }

    let pep_counts = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    }

    let pla_counts = {
      0: 0,
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
      ani_counts[brands[i].ratings.Animals] += 1
      pep_counts[brands[i].ratings.People] += 1
      pla_counts[brands[i].ratings.Planet] += 1
    }

    rating_counts = counts
    animal_counts = ani_counts
    people_counts = pep_counts
    planet_counts = pla_counts

    isLoading = false
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
  <div class={isLoading ? '' : 'hidden'}>
    <Loader />
  </div>
  <div class="{isLoading ? 'hidden' : ''} flex flex-row flex-wrap">
    <div class="lg:w-1/2 w-full p-5">
      <OverallChart {rating_counts} />
    </div>
    <div class="lg:w-1/2 w-full p-5">
      <RatingChart
        rating_counts={animal_counts}
        title={'Distribtution of Animal Ratings'}
        container_id={'animals'} />
    </div>
    <div class="lg:w-1/2 w-full p-5">
      <RatingChart
        rating_counts={people_counts}
        title={'Distribution of People Ratings'}
        container_id={'people'} />
    </div>
    <div class="lg:w-1/2 w-full p-5">
      <RatingChart
        rating_counts={planet_counts}
        title={'Distribution of Planet Ratings'}
        container_id={'planet'} />
    </div>
    <div class="hidden overflow-x-auto">
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
          <!-- {#each brands as brand, i}
            <tr>
              <th>{i + 1}</th>
              <td>{brand.name}</td>
              <td>{brand.overall_score}</td>
              <td>{brand.ratings.People}</td>
              <td>{brand.ratings.Animals}</td>
              <td>{brand.ratings.Planet}</td>
            </tr>
          {/each} -->
        </tbody>
      </table>
    </div>
  </div>
</div>
