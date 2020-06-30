<style scoped>

</style>

<template>
  <!--  -->
  <div :id="'lineChart1'+index"
       :class="getItemStyleClass()"
       :style="{ width: width + '%', height: height + '%'}"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  // 组件名
  name: 'lineChart1',
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
          right: 0
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
          name: '',
          type: 'pictorialBar',
          symbolSize: [26, 10],
          symbolOffset: [0, -5],
          z: 12,
          itemStyle: {
            normal: {
              color: '#06e6e8'
            }
          },
          label: {
            show: false,
          },
          symbolPosition: 'end',
          data: [],
        }, {
          type: 'bar',
          name: '非违法警情',
          itemStyle: {
            normal: {
              color: (params) => {
                return new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [{
                    offset: 1,
                    color: '#0094ac'
                  },
                  {
                    offset: 0,
                    color: '#0fe4ab'
                  }
                  ]
                )
              },
              opacity: 0.8
            }
          },
          z: 16,
          silent: true,
          barWidth: 26,
          barGap: '-100%', // Make series be overlap
          data: []
        }, {
          z: 17,
          symbolSize: 10,
          symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAABKElEQVQokX3ST0vUURjF8Y8/CozKRWLOjL0HaSBSUAha12sIdRUEgb4VV0JtgoJa1LpFC/MPWq1KsEBEBW1R4LgT9LjQKzPT0IELz8M9X57LfU5fEl16hEkMYQOfsdLhSFJOM8lSeutVkpvF23cxqYmvYHeP1XVaRzTqPJjkWr+LiQ9xXKBljPv4iddvaX/y4C2eP+XOCLzAdIXHGLezx5t3nQD8+cv8AqenMIUrFSbA6lq5+FcHv9naLt29CnVw2OoNFLWOSlWr8AOMNP4PNWql2qiwCCbGuHG9N9AcpTbM+Q9uVljCBwMDzD7j9lAncHeUmSele4/L5daTrCVJTk6Sn7+SL9+S/YPuBUvSkYj+JC97pGExyVyb7zIR7bqK+xjGd2x2G84AkPDLPpFoDAcAAAAASUVORK5CYII=',
          name: '违法警情',
          type: 'line',
          data: [],
          itemStyle: {
            normal: {
              borderWidth: 2,
              color: '#ff6068',
            }
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
      this.option.series[1].data.push(item.value)
      this.option.series[2].data.push(item.value2)
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
        this.option.series[1].data = []
        this.option.series[2].data = []
        this.data.forEach((item) => {
          this.option.xAxis.data.push(item.date)
          this.option.series[0].data.push(item.value)
          this.option.series[1].data.push(item.value)
          this.option.series[2].data.push(item.value2)
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
