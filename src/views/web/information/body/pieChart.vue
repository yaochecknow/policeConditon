<style scoped>

</style>

<template>
  <!--  -->
  <div :id="'pieChart'+index"
       :class="getItemStyleClass()"
       :style="{ width: width + '%', height: height + '%'}"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  // 组件名
  name: 'pieChart',
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
        title: {
          text: '',
          subtext: '总数',
          x: 'center',
          y: '30%',
          itemGap: 0,
          padding: 3,
          textStyle: {
            color: '#fff',
            fontSize: 24,
            fontWeight: 'normal',
            fontFamily: 'DS-DIGI'
          },
          subtextStyle: {
            color: '#fff',
            fontSize: 14,
            fontWeight: 'normal'
          }
        },
        calculable: true,
        series: [

          {
            name: '',
            type: 'pie',
            radius: ['55%', '75%'],
            center: ['50%', '50%'],
            data: [{
              value: 34,
              name: '',
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                  offset: 0,
                  color: this.data.color[0] || '#f6e3a1'
                }, {
                  offset: 1,
                  color: this.data.color[1] || '#ff4236'
                }])
              },
              label: {
                color: 'rgba(255,255,255,.45)',
                fontSize: 14,
                formatter: '{a|{c}}\n{b|{b}}',
                rich: {
                  a: {
                    color: '#00ff90',
                    fontFamily: 'DS-DIGI',
                    fontSize: 28,
                    lineHeight: 30
                  },
                  b: {
                    color: '#ffffff',
                    fontSize: 14,
                  }
                }
              },
              labelLine: {
                length: 3,
                length2: 6,
                lineStyle: {
                  type: 'dashed',
                  color: '#15deff'
                }
              }
            },
            {
              value: 52,
              name: '',
              itemStyle: {
                color: 'transparent'
              }
            }
            ]
          },
          {
            name: '',
            type: 'pie',
            radius: ['60%', '70%'],
            center: ['50%', '50%'],
            data: [{
              value: 34,
              name: '',
              itemStyle: {
                color: 'transparent'
              }
            },
            {
              value: 52,
              name: '',
              itemStyle: {
                color: '#004559'
              },
              label: {
                color: 'rgba(255,255,255,.45)',
                fontSize: 14,
                formatter: '{a|{c}}\n{b|{b}}',
                rich: {
                  a: {
                    color: '#00ff90',
                    fontFamily: 'DS-DIGI',
                    fontSize: 28,
                    lineHeight: 30
                  },
                  b: {
                    color: '#ffffff',
                    fontSize: 14,
                  }
                }
              },
              labelLine: {
                length: 3,
                length2: 6,
                lineStyle: {
                  type: 'dashed',
                  color: '#15deff'
                }
              }
            }
            ]
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
    this.option.title.text = this.data.total
    this.data.data.forEach((item, index) => {
      this.option.series[0].data[index].value = item.value
      this.option.series[0].data[index].name = item.name
      this.option.series[1].data[index].value = item.value
      this.option.series[1].data[index].name = item.name
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
        this.option.title.text = this.data.total
        this.data.data.forEach((item, index) => {
          this.option.series[0].data[index].value = item.value
          this.option.series[0].data[index].name = item.name
          this.option.series[1].data[index].value = item.value
          this.option.series[1].data[index].name = item.name
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
