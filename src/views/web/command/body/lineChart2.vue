<style scoped>

</style>

<template>
  <!--  -->
  <div :id="'lineChart2'+index"
       :class="getItemStyleClass()"
       :style="{ width: width + '%', height: height + '%'}"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  // 组件名
  name: 'lineChart2',
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
      type: Array, // String, Number, Object
      required: false,
      default() {
        return 0
      }
    }
  },
  // 组件数据
  data() {
    return {
      myChart: {},
      chartTimer: null,
      selectIndex: 0,
      option: {
        grid: {
          top: '15%',
          bottom: '15%',
          right: '10%'
        },
        xAxis: {
          data: [],
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#1a9195'
            }
          },
          axisLabel: {
            show: true,
            align: 'center',
            textStyle: {
              fontSize: 14,
              color: '#ffffff',
            },
            interval: 0
          },
          interval: 0
        },
        yAxis: {
          minInterval: 100,
          splitLine: {
            show: true,
            lineStyle: {
              color: '#1a9195'
            }
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: 'rgba(12, 67, 101, 0.2)'
            }
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#1a9195'
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: 14,
              color: '#ffffff',
            }
          },
        },
        series: [{
          z: 17,
          symbolSize: 10,
          symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAA4ElEQVQokX2SP0oDQRjFfxmwUHAhrQjiEZJ0wVI8gqdIsx5kD2KfFMZNo31uEMdGSBVYU0XIz2Y2WTZ/HjyYb+Y9Bt77UGkwV8dqlThOdztNfbhVp57GNGl2hlI1unHk0r7RvtGRS6Ob2lSqdNQcKL7445kfKrY0kRF45YZ7LgBeAvAIULA6EANUbClY1eNTR62A6wHfrI8YAK4IzLkDWIejijMIwAfAkMuToof922cA3gFyumQcfpgRyOnW41sd60x1kWLtGe2lWBf7WGft4sozxZXt4pqrMVF/Eyft1fgHVEAaYUN2MTUAAAAASUVORK5CYII=',
          name: '违法警情',
          type: 'line',
          smooth: true,
          data: [],
          markLine: {
            symbol: '',
            precision: 0,
            lineStyle: {
              color: '#ffff00',
              width: 3,
              type: 'solid'
            },
            label: {
              show: true,
              formatter: (params) => {
                return '{a|周均}\n{b|' + params.value + '}'
              },
              rich: {
                a: {
                  fontSize: 14,
                  color: '#ffffff'
                },
                b: {
                  fontSize: 24,
                  color: '#ffff00'
                }
              }
            },
            data: [{
              name: '平均线',
              // 支持 'average', 'min', 'max'
              type: 'average'
            }]
          },
          itemStyle: {
            normal: {
              borderWidth: 2,
              color: '#00ffff',
            }
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: 'rgba(33,255,179,.8)' // 0% 处的颜色
              }, {
                offset: 1, color: 'rgba(33,255,179,.1)' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            },
          },
          label: {
            show: true,
            position: 'top',
            color: '#ffe400',
            fontSize: 18
          },
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
    this.data.forEach((item) => {
      this.option.xAxis.data.push(item.date)
      this.option.series[0].data.push(item.value)
    })
    this.eChartInit()
  },
  beforeDestroy() {
    this.myChart.clear()
    this.myChart = null
  },
  destroyed() {
    clearInterval(this.chartTimer)
  },
  watch: {
    data: {
      handler(newVal) {
        this.option.xAxis.data = []
        this.option.series[0].data = []
        this.data.forEach((item) => {
          this.option.xAxis.data.push(item.date)
          this.option.series[0].data.push(item.value)
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
      if (_this.chartTimer) {
        _this.selectIndex = 0
        clearInterval(this.chartTimer)
      }
      _this.chartTimer = setInterval(() => {
        _this.myChart.dispatchAction({
          type: 'downplay',
          dataIndex: _this.selectIndex - 1 < 0 ? _this.data.length - 1 : _this.selectIndex - 1
        })
        _this.myChart.dispatchAction({
          type: 'highlight',
          dataIndex: _this.selectIndex
        })
        _this.selectIndex++
        if (_this.selectIndex >= _this.data.length) {
          _this.selectIndex = 0
        }
      }, 2000)
    }
  }
}
</script>
