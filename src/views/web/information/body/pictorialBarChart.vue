<style scoped>

</style>

<template>
  <!--  -->
  <div :id="'pictorialBarChart'+index"
       :class="getItemStyleClass()"
       :style="{ width: width + '%', height: height + '%'}"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  // 组件名
  name: 'pictorialBarChart',
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
        grid: {
          left: '10%',
          top: '15%',
          bottom: '12%',
          right: '0'
        },
        xAxis: {
          data: [],
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#18898f',
              width: 1 // 这里是为了突出显示加上的
            }
          },
          axisLabel: {
            textStyle: {
              color: '#ffffff',
              fontSize: 14
            },
            interval: 0
          }
        },
        yAxis: [{
          splitNumber: 2,
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#18898f',
              width: 1 // 这里是为了突出显示加上的
            }
          },
          axisLabel: {
            textStyle: {
              color: '#ffffff',
              fontSize: 14
            }
          },
          splitArea: {
            show: false
          },
          splitLine: {
            show: false,
          }
        }
        ],
        series: [{
          name: '',
          type: 'pictorialBar',
          barCategoryGap: '0%',
          symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
          label: {
            show: true,
            position: 'top',
            distance: 10,
            color: '#ffffff',
            fontFamily: 'DS-DIGI',
            fontSize: 32,
          },
          itemStyle: {
            normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: 'rgba(255, 252, 29, 1)' //  0%  处的颜色
                },
                {
                  offset: 1,
                  color: 'rgba(255, 252, 29, .1)' //  100%  处的颜色
                }
                ],
                global: false //  缺省为  false
              }
            },
            emphasis: {
              opacity: 1
            }
          },
          data: [],
          z: 10
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
      this.option.series[0].data.push(item.value)
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
        this.option.xAxis.data = []
        this.data.forEach((item) => {
          this.option.series[0].data.push(item.value)
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
