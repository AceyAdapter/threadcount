<script>
  import Header from '../components/header.svelte'
  import { onMount } from 'svelte'

  $: brands = []
  $: items = ['none']
  $: results = []

  $: isLoading = false
  $: submitted = false
  $: calcScore(submitted, results)
  $: threadscore = 0

  function calcScore(...args) {
    if (submitted) {
      let score = 0

      for (let i = 0; i < results.length; i++) {
        score += results[i].overall_score

        console.log(results[i]['overall_score'])
      }

      threadscore = score / results.length

      isLoading = false
    }
  }

  onMount(async () => {
    fetch('https://threadcount-api.herokuapp.com/api/brands')
      .then((res) => res.json())
      .then((data) => {
        data = data.sort(function (a, b) {
          return a.name.localeCompare(b.name)
        })

        brands = data
      })
  })
</script>

<div class="min-h-screen">
  <Header initTransparent={true} />
  <div class="flex flex-col items-center my-10 px-6">
    <div class="lg:text-5xl text-3xl font-bold text-primary">
      Get Your Threadscore
    </div>
    <div class="lg:text-2xl text-lg text-primary mt-5 underline">
      What is a Threadscore?
    </div>
    <div class="text-primary mt-5 text-center">
      The Threadscore calculator allows you to enter the brands of your outfit
      and receive a score based on the brand ratings as categorized by Good On
      You.
    </div>
    <div class="text-primary mt-5 text-center">Give it a try!</div>
    <div class="lg:w-1/2 w-full p-5 bg-base-200 rounded-xl mt-10">
      <div class="text-xl font-bold text-primary text-center">
        Threadscore Calculator
      </div>
      <div class="divider mt-0" />
      {#if results.length > 0 && !isLoading}
        <div class="text-primary text-2xl text-center">
          Score: {threadscore.toFixed(2)}/5
        </div>
        <div class="mt-4 text-primary">Breakdown:</div>
        <div class="overflow-x-auto">
          <table class="table table-compact table-zebra w-full">
            <!-- head -->
            <thead>
              <tr>
                <th>Name</th>
                <th>Rating</th>
                <th>People</th>
                <th>Animals</th>
                <th>Planet</th>
              </tr>
            </thead>
            <tbody>
              {#each results as result, i}
                <tr>
                  <td>{result.name}</td>
                  <td>{result.overall_score}</td>
                  <td>{result.ratings.People}</td>
                  <td>{result.ratings.Animals}</td>
                  <td>{result.ratings.Planet}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      {/if}
      <div class="{submitted ? 'hidden' : ''} flex flex-col items-center">
        {#each items as item, i}
          <div class="flex flex-row w-full justify-between items-center mt-2">
            <div>Item {i + 1}</div>
            <select class="select select-bordered w-2/3" bind:value={items[i]}>
              <option value="none" disabled selected>Select a brand</option>
              {#each brands as brand}
                <option value={brand.code}>{brand.name}</option>
              {/each}
            </select>
          </div>
        {/each}
        <div
          class="btn btn-outline btn-primary mt-10"
          on:click={() => {
            items.push('none')
            items = items
          }}>
          Add an item
        </div>
        <div
          class="btn btn-primary btn-primary mt-10"
          on:click={() => {
            isLoading = true
            for (let i = 0; i < items.length; i++) {
              if (items[i] != 'none') {
                fetch(`https://threadcount-api.herokuapp.com/api/brands/${items[i]}`)
                  .then((res) => res.json())
                  .then((data) => {
                    console.log(data)
                    let ratings = JSON.parse(data[0].ratings.replaceAll("'", '"'))
                    data[0].ratings = ratings
                    results.push(data[0])
                    results = results
                  })
              }
            }
            submitted = true
          }}>
          Calculate Score
        </div>
      </div>
    </div>
  </div>
</div>
