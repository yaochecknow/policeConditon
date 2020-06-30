<style scoped>

</style>

<template>
  <!--  -->
  <div :id="'pie3DChart2'+index"
       :class="getItemStyleClass()"
       :style="{ width: width + '%', height: height + '%'}"></div>
</template>

<script>
import Highcharts from 'highcharts'
export default {
  // 组件名
  name: 'pie3DChart2',
  // 组件构造
  mixins: [],
  // 组件扩展
  extends: {},
  // 组件属性
  props: {
    // 组件传入的数据
    index: {
      type: String, // String, Number, Object
      required: false,
      default: '0'
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
        },
        tooltip: {
          enabled: false
        },
        credits: {
          enabled: false,
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 15,
            size: 100,
            dataLabels: {
              enabled: false,
            },
          },
        },
        series: [
          {
            type: 'pie',
            startAngle: 120,
            center: ['50%', '50%'],
            colors: [],
            name: '竞赛组警情',
            data: [],
          },
        ],
      },
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
    this.option.series[0].data = this.data.data
    this.option.series[0].colors = this.data.color
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
        this.option.series[0].data = this.data.data
        this.option.series[0].colors = this.data.color
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
      this.myChart = Highcharts.chart('pie3DChart2' + _this.index, _this.option)
      $(window).resize(() => {
        if (_this.myChart) {
          _this.myChart.reflow()
        }
      })
    }
  }
}
</script>
