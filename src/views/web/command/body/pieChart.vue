<style scoped>
</style>

<template>
  <!--  -->
  <div
    :id="'pieChart'+index"
    :class="getItemStyleClass()"
    :style="{ width: width + '%', height: height + '%'}"
  ></div>
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
      type: String, // String, Number, Object
      required: false,
      default: '0',
    },
    width: {
      type: String, // String, Number, Object
      required: false,
      default: '100',
    },
    height: {
      type: String, // String, Number, Object
      required: false,
      default: '100',
    },
    data: {
      type: Object, // String, Number, Object
      required: false,
      default() {
        return {}
      },
    },
  },
  // 组件数据
  data() {
    return {
      myChart: {},
      option: {
        color: ['#1a8ffa', '#d6dee2', '#d6dee2'],
        title: {
          show: true,
          text: this.data.name,
          left: 'center',
          top: 'bottom',
          textStyle: {
            fontSize: 14,
            color: '#ffffff',
          },
        },
        series: [
          {
            type: 'pie',
            startAngle: -80,
            center: ['50%', '50%'],
            radius: ['50%', '60%'],
            hoverAnimation: false,
            data: [
              {
                name: this.data.name,
                value: this.data.percent / 100,
                itemStyle: {
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: '#ffffff', // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: '#ffffff', // 100% 处的颜色
                      },
                    ],
                    globalCoord: false, // 缺省为 false
                  },
                },
                label: {
                  show: true,
                  color: '#000000',
                  position: 'center',
                  fontSize: 13,
                  formatter: val => {
                    return '{a|}\n{b|' + this.data.value + '}'
                  },
                  rich: {
                    a: {
                      color: '#ffffff',
                      align: 'center',
                      fontSize: 12,
                      width: 20,
                      height: 20,
                      backgroundColor: {
                        image: this.data.icon,
                      },
                    },
                    b: {
                      color: '#ffffff',
                      align: 'center',
                      fontWeight: 'bold',
                      fontSize: 16,
                      padding: [5, 0],
                    },
                  },
                },

                labelLine: {
                  length: 10,
                  length2: 0,
                },
              },
              {
                // 画中间的图标
                name: '',
                value: 0,
                labelLine: {
                  show: false,
                },
                label: {
                  position: 'inside',
                  backgroundColor: this.data.color[1],
                  width: 0,
                  height: 0,
                  borderRadius: 8,
                  padding: 8,
                },
              },
              {
                // 画剩余的刻度圆环
                name: '',
                value: 1 - this.data.percent / 100,
                itemStyle: {
                  color: '#0a7a8c',
                },
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
              },
            ],
          },
          {
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['45%', '47%'],
            startAngle: -80,
            label: {
              show: false,
            },
            data: [
              {
                value: 55,
                itemStyle: {
                  color: '#04bebf',
                },
              },
              {
                value: 45,
                itemStyle: {
                  color: 'transparent',
                },
              },
            ],
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
  beforeCreate() {},
  mounted() {
    this.option.series[0].data[0].itemStyle.color.colorStops[0].color = this.data.color[0]
    this.option.series[0].data[0].itemStyle.color.colorStops[1].color = this.data.color[1]
    this.eChartInit()
  },
  beforeDestroy() {
    this.myChart.clear()
    this.myChart = null
  },
  destroyed() {},
  watch: {
    data: {
      handler(newVal) {
        this.$nextTick(() => {
          this.option.series[0].data[0].value = this.data.percent / 100
          this.option.series[0].data[2].value = 1 - this.data.percent / 100
          this.eChartInit()
        })
      },
      deep: true,
    },
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
    },
  },
}
</script>
