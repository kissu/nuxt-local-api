// components/Charts.vue

<template>
  <client-only>
    <LineChart :data="lineData" :options="options" />
  </client-only>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      lineData: {
        labels: [],
        datasets: [
          {
            label: 'Close',
            data: [],
          },
          {
            label: 'High',
            data: [],
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Value',
            },
          },
        },
      },
    }
  },
  async mounted() {
    try {
      const response = await this.$axios.get('/api/entries')
      if (response.status === 200) {
        for (let i = 0; i < response.data.length; i++) {
          this.lineData.labels.push(response.data[i].date)
          this.lineData.datasets[0].data.push(response.data[i].close)
          this.lineData.datasets[1].data.push(response.data[i].high)
        }
      }
    } catch (e) {
      console.log(e)
    }
  },
}
</script>
