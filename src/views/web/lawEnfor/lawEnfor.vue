<template>
  <div class="L124_content">
    <div class="L124_block">
      <div class="L124_b_left">
        <div class="L124_title">电子笔录</div>
        <div class="L124_led_wrap">
          <div class="L124_led">{{dataTran(elecNum)[0]}}</div>
          <div class="L124_led">{{dataTran(elecNum)[1]}}</div>
          <div class="L124_led">{{dataTran(elecNum)[2]}}</div>
          <div class="L124_led">{{dataTran(elecNum)[3]}}</div>
          <div class="L124_unit">份</div>
        </div>
        <div class="L124_chart">
          <div class="L124_chart_wrap">
            <div id="charArea1"></div>
            <div>笔录关联率</div>
          </div>
          <div class="L124_chart_wrap">
            <div id="charArea2"></div>
            <div>笔录审核率</div>
          </div>
        </div>
      </div>
      <div class="L124_b_right">
        <div class="L124_take_wrap">
          <div class="L124_take_ti">笔录质态</div>
          <div class="L124_take_data L124_take_data1">
            <div class="L124_take_data_n">
              <span>{{jqgll}}</span>
              <span></span>
            </div>
            <div class="L124_take_data_t">警情关联率</div>
          </div>
          <div class="L124_take_data L124_take_data2">
            <div class="L124_take_data_n">
              <span>{{rzhyl}}</span>
              <span></span>
            </div>
            <div class="L124_take_data_t">人证核验率</div>
          </div>
          <div class="L124_take_data L124_take_data3">
            <div class="L124_take_data_n">
              <span>{{zjcjs}}</span>
              <span></span>
            </div>
            <div class="L124_take_data_t">证据采集率</div>
          </div>
        </div>
      </div>
    </div>
    <div class="L124_block">
      <div class="L124_b_left L124_b_left_bo">
        <div class="L124_title">执法视频</div>
        <div class="L124_led_wrap">
          <div class="L124_led">{{dataTran(enlawNum)[0]}}</div>
          <div class="L124_led">{{dataTran(enlawNum)[1]}}</div>
          <div class="L124_led">{{dataTran(enlawNum)[2]}}</div>
          <div class="L124_led">{{dataTran(enlawNum)[3]}}</div>
          <div class="L124_unit">份</div>
        </div>
        <div class="L124_b_left_charts">
          <div>
            <div id="L124_b_left_chart1"></div>
            <div>执法视频关联率</div>
          </div>
          <div>
            <div id="L124_b_left_chart2"></div>
            <div>执法视频审核率</div>
          </div>
        </div>
      </div>
      <div class="L124_b_right L124_b_right_bo" id="echartZ"></div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts-liquidfill'
import { homeAPI } from '@/apis'
export default {
  name: 'lawEnter',
  data() {
    return {
      chartData: {
        names: ['01', '02', '03', '04', '05', '06', '07', '08'],
        data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02, 281.55, 398.35, 214.02],
      },
      elecNum: 5,
      enlawNum: '',
      zfygl: 0,
      zfysh: 0,
      jqgll: 20,
      rzhyl: 1,
      zjcjs: 1,
    }
  },
  methods: {
    //   仪表盘
    echartPic1(areaId, data, color = []) {
      let myChart = echarts.init(document.getElementById(areaId))
      var option = {
        series: [
          {
            name: '刻度',
            type: 'gauge',
            radius: '130%',
            center: ['50%', '70%'],
            min: 0,
            max: 100,
            splitNumber: 10,
            startAngle: 200,
            endAngle: -20,
            axisLine: {
              show: true,
              lineStyle: {
                width: 1,
                color: [[1, 'rgba(0,0,0,0)']],
              },
            },
            axisLabel: {
              show: false,
              color: '#fff',
              distance: 20,
            },
            axisTick: {
              show: true,
              lineStyle: {
                color: '#24fdb8',
                width: 1,
              },
              length: -4,
            },
            splitLine: {
              show: true,
              length: -4,
              lineStyle: {
                color: '#24fdb8',
              },
            },
            detail: {
              show: false,
            },
            pointer: {
              show: true,
            },
          },
          {
            type: 'gauge',
            radius: '120%',
            center: ['50%', '70%'],

            splitNumber: 0,
            startAngle: 200,
            endAngle: -20,
            axisLine: {
              show: true,
              lineStyle: {
                width: 8,
                color: [
                  [
                    data / 100,
                    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                      {
                        offset: 0,
                        color: color[0],
                      },
                      {
                        offset: 1,
                        color: color[1],
                      },
                    ]),
                  ],
                  [1, '#222e7d'],
                ],
              },
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            pointer: {
              show: false,
            },
            detail: {
              show: true,
              offsetCenter: [0, 0],
              color: '#ddd',
              formatter: function(params) {
                return params + '%'
              },
              textStyle: {
                fontSize: 20,
              },
            },
            data: [
              {
                value: data,
              },
            ],
          },
        ],
      }
      myChart.setOption(option)
      window.onresize = myChart.resize
    },
    // 水波图
    liquidFill(areaId, data = [], color = []) {
      var liquid = echarts.init(document.getElementById(areaId))
      liquid.setOption({
        series: [
          {
            type: 'liquidFill', // 类型
            data: data, // 数据是个数组 数组的每一项的值是0-1
            label: {
              fontSize: 26,
              fontWeight: 400,
              color: '#fff',
              fontFamily: 'led',
            },
            outline: {
              show: true, // 是否显示轮廓 布尔值
              borderDistance: 4, // 外部轮廓与图表的距离 数字
              itemStyle: {
                borderColor: color[0], // 边框的颜色
                borderWidth: 1, // 边框的宽度
                // shadowBlur: 5 , //外部轮廓的阴影范围 一旦设置了内外都有阴影
                shadowColor: '#000', // 外部轮廓的阴影颜色
              },
            },
            backgroundStyle: {
              color: color[1], // 图表的背景颜色
              itemStyle: {
                shadowBlur: 100, // 设置无用
                shadowColor: '#f60', // 设置无用
                opacity: 1, // 设置无用
              },
            },
            itemStyle: {
              opacity: 0.6, // 波浪的透明度
              shadowBlur: 10, // 波浪的阴影范围
              shadowColor: color[0], // 阴影颜色
            },
            emphasis: {
              itemStyle: {
                opacity: 0.4, // 鼠标经过波浪颜色的透明度
              },
            },
            color: [color[0]], // 水波的颜色 对应的是data里面值
            shape:
              'path://M19,1 L21,0,23,1 L39,10 L41.5,11,42,14 L42,36 L41.5,39,39,40 L23,49 L21,50,19,49 L3,40 L0.5,39,0,36 L0,14 L0.5,11,3,10 L19,1', // 水填充图的形状 circle默认圆形  rect圆角矩形  triangle三角形  diamond菱形  pin水滴状 arrow箭头状  还可以是svg的path
            center: ['50%', '50%'], // 图表相对于盒子的位置 第一个是水平的位置 第二个是垂直的值 默认是[50%,50%]是在水平和垂直方向居中 可以设置百分比 也可以设置具体值
            radius: '80%', // 图表的大小 值是圆的直径 可以是百分比 也可以是具体值 100%则占满整个盒子 默认是40%; 百分比下是根据宽高最小的一个为参照依据
            amplitude: 3, // 振幅 是波浪的震荡幅度 可以取具体的值 也可以是百分比 百分比下是按图标的直径来算
            waveLength: '50%', // 波的长度 可以是百分比也可以是具体的像素值  百分比下是相对于直径的 取得越大波浪的起伏越小
            phase: 0, // 波的相位弧度 默认情况下是自动
            period: (value, index) => {
              // 控制波的移动速度 可以是函数 也可以是数字 两个参数  value 是data数据里面的值 index 是data值的索引

              return index * 2000
            },
            direction: 'left', // 波移动的速度 两个参数  left 从右往左 right 从左往右
            waveAnimation: true, // 控制波动画的开关  值是布尔值 false 是关闭动画 true 是开启动画 也是默认值
            animationEasing: 'linear', // 初始动画
            animationEasingUpdate: 'quarticInOut', // 数据更新的动画效果
            animationDuration: 3000, // 初始动画的时长，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更绚丽的初始动画效果
            animationDurationUpdate: 300, // 数据更新动画的时长
          },
        ],
      })
      window.onresize = liquid.resize
    },
    // 折线图
    echartPic3(areaId, data = {}) {
      let myChart = echarts.init(document.getElementById(areaId))
      var option = {
        title: {
          textStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 20,
          },
          top: '5%',
          left: 'center',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          },
        },
        grid: {
          top: '15%',
          left: '10%',
          right: '5%',
          bottom: '15%',
          // containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            axisLine: {
              show: true,
            },
            splitArea: {
              // show: true,
              color: '#f00',
              lineStyle: {
                color: '#f00',
              },
            },
            axisLabel: {
              color: '#fff',
            },
            splitLine: {
              show: false,
            },
            boundaryGap: false,
            data: data.names,
          },
        ],

        yAxis: [
          {
            type: 'value',
            min: 0,
            // max: 140,
            splitNumber: 4,
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(255,255,255,0.1)',
              },
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              show: true,
              margin: 8,
              textStyle: {
                fontSize: 10,
                color: '#ffffff',
              },
            },
            axisTick: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: '注册总量',
            type: 'line',
            // smooth: true, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'circle',
            symbolSize: 10,
            lineStyle: {
              normal: {
                color: '#0affc2',
                shadowBlur: 0,
              },
            },
            label: {
              show: false,
              position: 'top',
              textStyle: {
                color: '#6c50f3',
              },
            },
            itemStyle: {
              color: '#0affc2',
              borderColor: '#fff',
              borderWidth: 1,
              shadowColor: 'rgba(0, 0, 0, .3)',
              shadowBlur: 0,
              shadowOffsetY: 2,
              shadowOffsetX: 2,
            },
            tooltip: {
              show: false,
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(0,255,144,1)',
                    },
                    {
                      offset: 1,
                      color: 'rgba(56,207,137,0.1)',
                    },
                  ],
                  false,
                ),
                shadowColor: 'rgba(108,80,243, 0.9)',
                shadowBlur: 20,
              },
            },
            data: data.data,
          },
        ],
      }
      myChart.setOption(option)
      window.onresize = myChart.resize
    },
    dataTran(num) {
      return num
        .toString()
        .padStart(4, '0')
        .split('')
    },
    // 执法仪数据获取
    async lawenforGet(dw) {
      let num = await homeAPI.lawenSystemReq(dw)
      this.enlawNum = num[0].total
      this.zfygl = parseFloat(num[0].glper) / 100
      this.zfysh = parseFloat(num[0].shper) / 100
      this.liquidFill(
        'L124_b_left_chart1',
        [this.zfygl, this.zfygl, this.zfygl - 0.1],
        ['#04ffc7', 'rgba(21,117,115,0.2)'],
      )
      this.liquidFill(
        'L124_b_left_chart2',
        [this.zfysh, this.zfysh, this.zfysh - 0.1],
        ['#ff455b', 'rgba(99,79,99,0.2)'],
      )
    },
    // 笔录统计
    async putDownGet(dw) {
      let num = await homeAPI.putDownReq(dw)
      this.elecNum = num[0].total
      this.echartPic1('charArea1', parseInt(num[0].glper), ['#3cff3a', '#a0ffa6'])
      this.echartPic1('charArea2', parseInt(num[0].shper), ['#fcc227', '#f7f862'])
    },
    // 笔录质态接口
    async blztjkGet(dw) {
      let num = await homeAPI.blzttjReq(dw)
      let data = num[0]
      this.jqgll = data.jqglper
      this.rzhyl = data.rzhyper
      this.zjcjs = data.zjcjper
    },
  },
  mounted() {
    let dw = this.$route.query.dw
    this.lawenforGet(dw)
    this.putDownGet(dw)
    this.echartPic3('echartZ', this.chartData)
    this.blztjkGet(dw)
  },
}
</script>

<style lang='scss' scoped type='text/scss'>
.L124_content {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 2.5% 1% 1.2% 1.5%;
  .L124_block:first-child {
    border-bottom: 1px dotted #0d7a82;
  }
  .L124_block {
    flex: 1;
    display: flex;
    margin-top: 1%;
    // 电子笔录
    .L124_b_left {
      width: 50%;
      .L124_title {
        color: #ffffff;
        background: url('~@/assets/images/24/title_back.png') no-repeat;
        padding: 0 20px 10px 20px;
        background-size: 100% 100%;
        width: 70px;
        font-size: 0.8vw;
      }
      .L124_led_wrap {
        margin: 1vw 0 0.4vh 0vw;
        display: flex;
        justify-content: center;
        .L124_led {
          color: #ffffff;
          font-size: 1.4vw;
          padding: 4px 8px 1px;
          margin: 0 4px;
          background: url('~@/assets/images/24/led_back.png') no-repeat;
          background-size: 100% 100%;
          font-family: led;
        }
        .L124_unit {
          color: #ffffff;
          font-size: 0.7vw;
          align-self: flex-end;
        }
      }
      .L124_chart {
        width: 100%;
        height: 54%;
        display: flex;
        box-sizing: border-box;
        padding-top: 0.4vh;
        .L124_chart_wrap {
          flex: 1;
          div:first-child {
            height: 6vh;
            box-sizing: border-box;
          }
          div:last-child {
            height: 10%;
            color: #ffffff;
            font-size: 0.7vw;
            text-align: center;
          }
        }
      }
    }
    .L124_b_right {
      height: 18vh;
      width: 100%;
      position: relative;
      .L124_take_wrap {
        position: absolute;
        height: 85%;
        width: 80%;
        background: url('~@/assets/images/24/take_down.png') no-repeat;
        background-size: 100% 100%;
        bottom: 0;
        right: 1vw;
        .L124_take_ti {
          color: #ffffff;
          font-size: 0.9vw;
          widows: 3.6vw;
          position: absolute;
          bottom: 0.8vw;
          left: 50%;
          margin-left: -1.8vw;
        }
        .L124_take_data {
          color: #ffffff;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: absolute;
          width: 3.8vw;
          .L124_take_data_n span:first-child {
            font-size: 1vw;
          }
          .L124_take_data_n span:last-child {
            font-size: 0.4vw;
          }
          .L124_take_data_t {
            font-size: 0.6vw;
          }
        }
        .L124_take_data1 {
          left: -3%;
          top: -6%;
        }
        .L124_take_data2 {
          top: -25%;
          left: 53%;
          margin-left: -2.5vw;
        }
        .L124_take_data3 {
          right: -2%;
          top: 0%;
        }
      }
    }
    // 执法仪大小有点特殊
    .L124_b_left_bo {
      width: 40%;
      .L124_b_left_charts {
        display: flex;
        height: 11vh;
      }
      .L124_b_left_charts > div {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .L124_b_left_charts > div > div:first-child {
        width: 5vw;
        height: 9vh;
      }
      .L124_b_left_charts > div > div:last-child {
        height: 2vh;
        width: 5vw;
        color: #ffffff;
        font-size: 0.7vw;
        text-align: center;
      }
    }
    .L124_b_right_bo {
      width: 60%;
    }
  }
}
</style>
