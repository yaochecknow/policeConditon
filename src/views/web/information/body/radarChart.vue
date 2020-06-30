<style scoped>

</style>

<template>
  <!--  -->
  <div :id="'radarChart'+index"
       :class="getItemStyleClass()"
       :style="{ width: width + '%', height: height + '%'}"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  // 组件名
  name: 'radarChart',
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
        color: ['#4A99FF', '#4BFFFC'],
        radar: {
          radius: '60%',
          name: {
            formatter: (value, indicator) => {
              return '{a|' + indicator.value + '}{b|%}\n{b|' + value + '}'
            },
            rich: {
              a: {
                fontSize: 26,
                fontFamily: 'DS-DIGI',
                color: '#fff'
              },
              b: {
                fontSize: 14,
                color: '#fff'
              }
            }
          },
          nameGap: 5,
          indicator: [],
          splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
            show: true,
            areaStyle: { // 分隔区域的样式设置。
              color: ['rgba(255,255,255,0)', 'rgba(255,255,255,0)'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
            }
          },
          axisLine: { // 指向外圈文本的分隔线样式
            lineStyle: {
              color: '#1a88a0'
            }
          },
          splitLine: {
            lineStyle: {
              color: '#0f4f6a', // 分隔线颜色
              width: 1, // 分隔线线宽
            }
          },
        },
        series: [{
          type: 'radar',
          symbolSize: 0,
          data: [{
            value: [],
            name: '',
            itemStyle: {
              normal: {
                lineStyle: {
                  color: '#27a9d6',
                },
              },
            },
            areaStyle: {
              normal: { // 单项区域填充样式
                color: {
                  type: 'linear',
                  x: 0, // 右
                  y: 0, // 下
                  x2: 0, // 左
                  y2: 1, // 上
                  colorStops: [{
                    offset: 0,
                    color: 'rgba(38, 235, 255, .38)'
                  }, {
                    offset: 1,
                    color: 'rgba(140, 113, 255, .38)'
                  }],
                  globalCoord: false
                },
                opacity: 1 // 区域透明度
              }
            }
          }, ]
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
    this.option.radar.indicator = this.data
    this.data.forEach((item) => {
      this.option.series[0].data[0].value.push(item.value)
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
        this.option.series[0].data[0].value = []
        this.option.radar.indicator = this.data
        this.data.forEach((item) => {
          this.option.series[0].data[0].value.push(item.value)
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
