<style scoped>

</style>

<template>
  <!--  -->
  <div :id="'pie3DChart1'+index"
       :class="getItemStyleClass()"
       :style="{ width: width + '%', height: height + '%'}"></div>
</template>

<script>
import Highcharts from 'highcharts'
export default {
  // 组件名
  name: 'pie3DChart1',
  // 组件构造
  mixins: [],
  // 组件扩展
  extends: {},
  // 组件属性
  props: {
    // 组件传入的数据
    index: {
      type: Number, // String, Number, Object
      required: false,
      default: 0
    },
    width: {
      type: String, // String, Number, Object
      required: false,
      default: '100'
    },
    height: {
      type: String, // String, Number, Object
      required: false,
      default: '100'
    },
    data: {
      type: Object, // String, Number, Object
      required: false,
      default() {
        return {}
      }
    }
  },
  // 组件数据
  data() {
    return {
      myChart: {},
      option: {
        chart: {
          type: 'pie',
          options3d: {
            enabled: true,
            alpha: 70,
            beta: 0,
          },
          backgroundColor: 'transparent',
        },
        title: {
          text: '',
          verticalAlign: 'middle',
          style: {
            'background': 'linear-gradient(to right,#63bd78,#36a28e,#1e8fab,#047bcb)',
            '-webkit-background-clip': 'text',
            'color': '#65ffe5',
            'font-weight': 'bold'
          }
        },
        tooltip: {
          enabled: true
        },
        credits: {
          enabled: false,
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            size: 100,
            innerSize: '70%',
            depth: 15,
            dataLabels: {
              enabled: true,
              padding: 0,
              distance: 1,
              format: '{point.y}',
              style: {
                color: '#00ff90',
                fontSize: 15,
                fontFamily: 'DS-DIGI',
                fill: 'none',
                textOutline: 'none',
              },
            },
          },
        },
        series: [
          {
            type: 'pie',
            startAngle: 120,
            center: ['50%', '80%'],
            colors: ['#00e1c5', '#01a7f5'],
            name: '违法线索',
            data: [
              ['已办结', 353],
              ['未办结', 632],
            ],
          },
        ],
      }
    }
  },
  // 组件过滤器
  filters: {},
  // 组件计算属性
  computed: {},
  // 组件挂载
  components: {},
  // 钩子函数
  beforeCreate() {
  },
  mounted() {
    this.option.title.text = this.data.name
    this.option.series[0].data = this.data.data
    let isZero = true
    this.data.data.forEach((item) => {
      if (item[1] > 0) {
        isZero = false
      }
    })
    if (isZero) {
      this.option.plotOptions.pie.dataLabels.format = '0'
      this.option.series[0].data = []
      this.data.data.forEach((item) => {
        this.option.series[0].data.push([item[0], 1])
      })
    }
    this.eChartInit()
  },
  beforeDestroy() {
    this.myChart.clear()
    this.myChart = null
  },
  destroyed() {
  },
  watch: {
    data: {
      handler(newVal) {
        this.option.title.text = this.data.name
        this.option.series[0].data = this.data.data
        this.$nextTick(() => {
          this.eChartInit()
        })
      },
      deep: true
    }
  },
  methods: {
    getItemStyleClass() {
      return this.$options.name + '_' + this.index
    },
    eChartInit() {
      let _this = this
      this.myChart = Highcharts.chart('pie3DChart1' + _this.index, _this.option)
      $(window).resize(() => {
        if (_this.myChart) {
          _this.myChart.reflow()
        }
      })
    }
  }
}
</script>
