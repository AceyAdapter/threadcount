<script>
  // @ts-nocheck

  import { onMount } from 'svelte'
  import Highcharts from 'highcharts'

  $: chart = undefined
  export let rating_counts

  function updateChart(...args) {
    console.log('run')
    if (chart) {
      console.log('run')
      chart.addSeries(
        {
          name: 'Test',
          color: '#000',
          data: [
            {
              name: 'We Avoid',
              y: rating_counts[1],
            },
            {
              name: 'Not Good Enough',
              y: rating_counts[2],
            },
            {
              name: "It's a Start",
              y: rating_counts[3],
            },
            {
              name: 'Good',
              y: rating_counts[4],
            },
            {
              name: 'Great',
              y: rating_counts[5],
            },
          ],
        },
        true,
      )
    }
  }

  $: updateChart(rating_counts)

  onMount(() => {
    chart = Highcharts.chart('container', {
      chart: {
        type: 'pie',
      },
      title: {
        text: 'Distribution of Brand by Overall Score',
      },
      subtitle: {
        text: 'Source: Good On You',
      },
      plotOptions: {},
      series: [],
    })
  })
</script>

<div>
  <figure id="container" />
</div>
