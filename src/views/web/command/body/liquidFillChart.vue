<style scoped>

</style>

<template>
  <!--  -->
  <div :id="'liquidFillChart'+index"
       :class="getItemStyleClass()"
       :style="{ width: width + '%', height: height + '%'}"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  // 组件名
  name: 'liquidFillChart',
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
        series: [{
          type: 'liquidFill',
          data: [0.33],
          radius: '100%',
          waveLength: '90%',
          waveHeight: '10',
          amplitude: 10,
          outline: { show: false },
          backgroundStyle: {
            color: 'transparent',
            borderColor: '#863551',
            borderWidth: 1,
            shadowColor: 'rgba(0, 0, 0, 0.4)',
            shadowBlur: 20
          },
          // path代码粘贴到此处,代码的多少取决于图形的复杂度
          shape: 'path://M86.6 0L173.2 50 173.2 150 86.6 200 0 150 0 50z',
          color: ['#e8395c'],
          label: {
            show: true,
            position: 'inside',
            color: '#ffffff',
            fontSize: 28,
            fontFamily: 'DS-DIGI',
            formatter: (val) => {
              return val.value * 100
            }
          }
        }]
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
    this.option.series[0].data = [this.data.value]
    this.option.series[0].color = [this.data.color]
    this.option.series[0].backgroundStyle.borderColor = this.data.color
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
        this.option.series[0].data = [this.data.value]
        this.option.series[0].color = [this.data.color]
        this.option.series[0].backgroundStyle.borderColor = this.data.color
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
      let dom = document.getElementsByClassName(this.getItemStyleClass())[0]
      this.myChart = echarts.init(dom)
      this.myChart.setOption(this.option)
      let _this = this
      $(window).resize(() => {
        if (_this.myChart) {
          _this.myChart.resize()
        }
      })
    }
  }
}
</script>
