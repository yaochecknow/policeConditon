<style lang="scss" type="text/scss" scoped>

</style>

<template>
  <!--  -->
  <div :id="'barChart'+index"
       :class="getItemStyleClass()"
       :style="{ width: width + '%', height: height + '%'}"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  // 组件名
  name: 'barChart',
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
      type: Array, // String, Number, Object
      required: false,
      default() {
        return []
      }
    }
  },
  // 组件数据
  data() {
    return {
      myChart: {},
      option: {
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'rgba(1, 59, 83, .84)',
          borderColor: '#157082',
          borderWidth: 1,
          padding: [10, 5],
          formatter: (params) => {
            let $index = params[0].dataIndex
            let newHtml = '<div><span class="B106_name">' + this.data[$index].name + '</span><span class="B106_number">' + this.data[$index].total + '</span><span class="B106_unit">' + this.data[$index].unit + '</span></div><div><span class="B106_name">' + this.data[$index].name2 + '</span><span class="B106_number">' + this.data[$index].value + '</span><span class="B106_unit">' + this.data[$index].unit2 + '</span></div>'
            return newHtml
          }
        },
        xAxis: {
          data: [],
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#1d7f81'
            }
          },
          axisLabel: {
            textStyle: {
              color: '#fff'
            },
            formatter: (val) => {
              if (val.length>4) {
                return val.substring(0, 3) + '...'
              } else {
                return val
              }
            },
            interval: 0,
            margin: 10, // 刻度标签与轴线之间的距离。
          },

        },
        yAxis: [
          {
            name: '条',
            nameLocation: 'start',
            nameTextStyle: {
              color: '#fff'
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#1d7f81'
              }
            },
            axisLabel: {
              textStyle: {
                color: '#fff'
              },
            }
          },
          {
            name: '人',
            nameLocation: 'start',
            nameTextStyle: {
              color: '#fff'
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#1d7f81'
              }
            },
            axisLabel: {
              textStyle: {
                color: '#fff'
              },
            }
          }
        ],
        series: [
          {// 三个最低下的圆片
            'name': '',
            'type': 'pictorialBar',
            'symbolSize': [30, 11],
            'symbolOffset': [0, 0],
            'itemStyle': {
              'normal': {
                color: '#00d1c4'
              }
            },
            'z': 12,
            'data': []
          },

          // 下半截柱状图
          {
            name: '2020',
            type: 'bar',
            yAxisIndex: 0,
            barWidth: 30,
            barGap: '-100%',
            itemStyle: {// lenged文本
              color: 'rgba(4, 228, 212, .8)'
            },
            data: []
          },

          { // 替代柱状图 默认不显示颜色，是最下方柱图的value值 - 20
            type: 'bar',
            barWidth: 30,
            yAxisIndex: 1,
            barGap: '-100%',
            stack: '',
            itemStyle: {
              color: 'transparent'
            },
            data: []
          },

          {
            'name': '', // 头部
            'type': 'pictorialBar',
            'symbolSize': [30, 11],
            'symbolOffset': [0, -5],
            'symbolPosition': 'end',
            'itemStyle': {
              'normal': {
                color: '#16c4ad'
              }
            },
            'z': 12,
            'data': []
          },

          {
            'name': '',
            'type': 'pictorialBar',
            'symbolSize': [30, 11],
            'symbolOffset': [0, -5],
            'symbolPosition': 'end',
            'itemStyle': {
              'normal': {
                color: '#0ef6ed'
              }
            },
            'z': 12,
            'data': []
          },

          {
            name: '2019',
            type: 'bar',
            barWidth: 30,
            barGap: '-100%',
            stack: '',
            itemStyle: {
              // barBorderRadius: 20,
              color: 'rgba(4, 166, 195, .3)'
            },
            label: {
              show: true,
              position: 'top',
              fontFamily: 'DS-DIGI',
              fontSize: 28,
              color: '#fff'
            },
            // 上班截开始
            data: []
          }

        ]
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
    this.data.forEach((item) => {
      this.option.series[0].data.push(item.value)
      this.option.series[1].data.push(item.value)
      this.option.series[2].data.push(item.value)
      this.option.series[3].data.push(item.total)
      this.option.series[4].data.push(item.value)
      this.option.series[5].data.push(item.total)
      this.option.xAxis.data.push(item.name)
    })
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
        this.option.series[0].data = []
        this.option.series[1].data = []
        this.option.series[2].data = []
        this.option.series[3].data = []
        this.option.series[4].data = []
        this.option.series[5].data = []
        this.option.xAxis.data = []
        this.data.forEach((item) => {
          this.option.series[0].data.push(item.value)
          this.option.series[1].data.push(item.value)
          this.option.series[2].data.push(item.value)
          this.option.series[3].data.push(item.total)
          this.option.series[4].data.push(item.value)
          this.option.series[5].data.push(item.total)
          this.option.xAxis.data.push(item.name)
        })
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
