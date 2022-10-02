<script>
  // @ts-nocheck

  import { onMount } from 'svelte'
  import Highcharts from 'highcharts'

  $: chart = undefined
  export let rating_counts
  export let container_id
  export let title

  function updateChart(...args) {
    console.log('run')
    if (chart) {
      console.log('run')
      chart.addSeries(
        {
          name: 'Count',
          color: '#000',
          data: [
            {
              name: 'Terrible',
              y: rating_counts[0],
            },
            {
              name: 'Avoid',
              y: rating_counts[1],
            },
            {
              name: 'Not Good',
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
    chart = Highcharts.chart(container_id, {
      chart: {
        type: 'pie',
        backgroundColor: '#ABD369',
        borderRadius: 25,
      },
      title: {
        text: title,
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
  <figure id={container_id} />
</div>
