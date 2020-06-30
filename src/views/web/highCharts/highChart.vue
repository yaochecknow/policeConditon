<template>
  <div class="container">
    <div :id="id" :option="option"></div>
  </div>
</template>
<script>
import HighCharts from 'highcharts'
export default {
  data() {
    return {
      myChart: {},
    }
  },
  beforeDestroy() {
    this.myChart.clear()
    this.myChart = null
  },
  props: {
    id: {
      type: String,
    },
    option: {
      type: Object,
    },
  },
  methods: {
    chartArt() {
      let _this = this
      this.myChart = HighCharts.chart(this.id, this.option)
      $(window).resize(() => {
        if (_this.myChart) {
          _this.myChart.reflow()
        }
      })
    },
  },
  mounted() {
    this.chartArt()
  },
}
</script>

<style scoped>
/* 容器 */
.container {
  width: 100%;
  height: 100px;
}
</style>
