<template>
  <div class="S124_content">
    <div class="S124_top">
      <div class="S124_tars">
        <div
          class="S124_tar"
          :class="dataShowNum===1?'S124_tar_active':''"
          @click="dataChange(1)"
        >警情动态</div>
        <div
          class="S124_tar"
          :class="dataShowNum===2?'S124_tar_active':''"
          @click="dataChange(2)"
        >质态分析</div>
        <div
          class="S124_tar"
          :class="dataShowNum===3?'S124_tar_active':''"
          @click="dataChange(3)"
        >核警情况</div>
      </div>
      <div class="S124_t_datas" v-show="dataShowNum===1">
        <div class="S124_t_data" v-for="item in listData1" :key="item.index">
          <div class="S124_t_light"></div>
          <p class="S124_t_mes">{{item.title}}</p>
          <div class="S124_t_time">{{item.addtime}}</div>
        </div>
      </div>
      <div class="S124_t_datas" v-show="dataShowNum===2">
        <div class="S124_t_data" v-for="item in listData2" :key="item.index">
          <div class="S124_t_light"></div>
          <p class="S124_t_mes">{{item.title}}</p>
          <div class="S124_t_time">{{item.addtime}}</div>
        </div>
      </div>
      <div class="S124_t_datas" v-show="dataShowNum===3">
        <div class="S124_t_data" v-for="item in listData3" :key="item.index">
          <div class="S124_t_light"></div>
          <p class="S124_t_mes">{{item.title}}</p>
          <div class="S124_t_time">{{item.addtime}}</div>
        </div>
      </div>
    </div>
    <div class="S124_middle">
      <div class="S124_ti">数据总量</div>
      <div class="S124_m_datas">
        <div class="S124_data">
          <div>采集</div>
          <div class="S124_data_m">
            <div class="S124_data_t">
              <div>10.8</div>
              <div>万条</div>
            </div>
            <div id="echartJin1"></div>
          </div>
        </div>
        <div class="S124_data">
          <div>表单</div>
          <div class="S124_data_m">
            <div class="S124_data_t">
              <div>56</div>
              <div>条</div>
            </div>
            <div id="echartJin2"></div>
          </div>
        </div>
        <div class="S124_data">
          <div>人证核验</div>
          <div class="S124_data_m">
            <div class="S124_data_t">
              <div>0.95</div>
              <div>万条</div>
            </div>
            <div id="echartJin3"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="S124_bottom">
      <div class="S124_long_ti">
        <div
          class="S124_long_t"
          :class="chartDataNum===1?'S124_long_t_act':''"
          @click="chartDataChange(1)"
        >数据审核</div>|
        <div
          class="S124_long_t"
          :class="chartDataNum===2?'S124_long_t_act':''"
          @click="chartDataChange(2)"
        >入所人员</div>
      </div>
      <div class="S124_highChart">
        <pie :id="id" :option="option"></pie>
      </div>
    </div>
  </div>
</template>

<script>
import pie from '../highCharts/highChart'
import echarts from 'echarts'
import { homeAPI } from '@/apis'
export default {
  name: 'serDuty',
  components: {
    pie,
  },
  data() {
    return {
      id: 'test',
      option: {
        chart: {
          type: 'pie',
          options3d: {
            enabled: true,
            alpha: 80,
            beta: 0,
          },
          height: 220,
          width: 620,
          backgroundColor: 'transparent',
        },
        title: {
          text: '',
        },
        credits: {
          enabled: false,
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 25,
            dataLabels: {
              enabled: true,
              format: '{point.y:.1f}<br><b>{point.name}</b>',
              style: {
                color: '#1affb7',
                fontSize: 15,
                fill: 'none',
                textOutline: 'none',
              },
            },
          },
        },
        series: [
          {
            type: 'pie',
            colors: ['#21ffb5', '#fc9274'],
            name: '浏览器占比',
            data: [
              ['通过', 56],
              ['未通过', 4],
            ],
          },
        ],
      },
      listData1: [
        { text: '文字列表文字列表文字列撒大声地表文字列表', time: '05-01' },
        { text: '文字列表文字列表文字列撒大声地表文字列表', time: '05-01' },
        { text: '文字列表文字列表文字列撒大声地表文字列表', time: '05-01' },
      ],
      listData2: [],
      listData3: [], // 三个上头的列表数据
      dataShowNum: 1, // 该参数控制三个开关
      chartDataNum: 1, // 该参数控制图标
    }
  },
  methods: {
    //   进度条
    echartPic2(el, data, color = []) {
      let myChart = echarts.init(document.getElementById(el))
      let option = {
        xAxis: {
          max: 100,
          splitLine: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
        grid: {
          left: -10,
          top: 60, // 设置条形图的边距
        },
        yAxis: [
          {
            type: 'category',
            inverse: false,
            data: [data],
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
          },
        ],
        series: [
          {
            // 内
            type: 'bar',
            barWidth: 30,
            legendHoverLink: false,
            silent: true,
            itemStyle: {
              normal: {
                color: function(params) {
                  return {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                      {
                        offset: 0,
                        color: color[0], // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: color[1], // 100% 处的颜色
                      },
                    ],
                  }
                },
                barBorderRadius: 40,
                backgroundColor: '#ffffff',
                shadowBlur: {
                  shadowColor: 'rgba(0, 0, 0, 0.9)',
                  shadowBlur: 10,
                },
                showBackground: true,
              },
            },
            label: {
              normal: {
                show: true,
                position: 'left',
                formatter: '{b}',
                textStyle: {
                  color: '#3474de',
                  fontSize: 14,
                },
              },
            },
            data: [data],
            z: 1,
            animationEasing: 'elasticOut',
          },
          {
            // 分隔
            type: 'pictorialBar',
            itemStyle: {
              normal: {
                color: '#ffffff',
              },
            },
            symbolRepeat: 'fixed',
            symbolMargin: 6,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [0, 0],
            symbolPosition: 'start',
            symbolOffset: [0, 0],
            symbolBoundingData: this.total,
            data: [data],
            z: 2,
            animationEasing: 'elasticOut',
          },
        ],
      }
      myChart.setOption(option)
      window.onresize = myChart.resize
    },
    // 三个主题数据切换并操纵数据
    dataChange(index) {
      this.dataShowNum = index
    },
    // 表数据切换
    chartDataChange(index) {
      this.chartDataNum = index
    },
    // 警情动态数据
    async dynamicDataGet() {
      this.listData1 = await homeAPI.policeDynamicReq()
    },
    // 质态分析
    async qualitativeAnalyDataGet() {
      let dw = this.$route.query.dw
      this.listData2 = await homeAPI.qualitativeAnalyReq(dw)
    },
    // 暂时放业务通知
    async busnessInforGet() {
      this.listData3 = await homeAPI.busnessInforReq()
    },
  },
  mounted() {
    this.echartPic2('echartJin1', 100, ['#09b7ff', '#53fd61'])
    this.echartPic2('echartJin2', 30, ['#ba58ff', '#f72f79'])
    this.echartPic2('echartJin3', 30, ['#ff9b30', '#ffcc60'])
    this.dynamicDataGet()
    this.qualitativeAnalyDataGet()
    this.busnessInforGet()
  },
}
</script>

<style lang='scss' scoped type='text/scss'>
::-webkit-scrollbar {
  width: 7px;
  height: 10px;
}
/* 滚动条的滑块 */
::-webkit-scrollbar-thumb {
  background-color: #098487;
  border-radius: 3px;
}
.S124_content {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 1vw;
  .S124_top {
    .S124_tars {
      padding: 0 2vw;
      display: flex;
      justify-content: space-between;
      .S124_tar {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.8vw;
        color: #ffffff;
        cursor: pointer;
      }
      .S124_tar_active {
        background: url('~@/assets/images/24/v_tar_active.png') no-repeat;
        background-size: 100% 100%;
        color: #fcff00;
        cursor: auto;
      }
    }
    .S124_t_datas {
      margin-top: 0.7vh;
      height: 10vh;
      overflow: auto;
      .S124_t_data {
        height: 3vh;
        margin-bottom: 0.3vh;
        display: flex;
        background-color: rgba(12, 62, 99, 0.2);
        border: 1px solid #0f4d62;
      }
      .S124_t_light {
        width: 2vw;
        background: url('~@/assets/images/24/blue_light.png') no-repeat;
        background-size: 54% 68%;
        background-position: center;
      }
      .S124_t_mes {
        display: flex;
        align-items: center;
        color: #ffffff;
        font-size: 0.8vw;
        border-left: 1px solid #27ffcf;
        margin: 0.2vw 0;
        padding-left: 0.5vw;
        flex: 1;
      }
      .S124_t_time {
        display: flex;
        align-items: center;
        color: #ffffff;
        font-size: 0.8vw;
        margin: 0.2vw;
      }
    }
  }
  .S124_middle {
    .S124_ti {
      margin-bottom: 1vh;
      color: #ffffff;
      background: url('~@/assets/images/24/title_back.png') no-repeat;
      padding: 0 20px 10px 20px;
      background-size: 100% 100%;
      width: 70px;
      font-size: 0.8vw;
    }
    .S124_m_datas {
      display: flex;
      justify-content: space-between;
      .S124_data {
        background: url('~@/assets/images/24/data_back.png') no-repeat;
        background-size: 100% 100%;
        height: 5.5vh;
        flex: 1;
        margin-left: 1vw;
        display: flex;
        box-sizing: border-box;
        padding: 0.2vh 0;
        .S124_data_m {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 0.4vh 0.4vw 0.4vh 0.2vw;
          width: 80%;
          box-sizing: border-box;
          .S124_data_t {
            display: flex;
            justify-content: space-between;
            color: #ffffff;
          }
          .S124_data_t > div:first-child {
            font-size: 1.1vw;
          }
          .S124_data_t > div:last-child {
            font-size: 0.7vw;
            align-self: flex-end;
          }
        }
        .S124_data_m > div:last-child {
          height: 1.6vh;
          background-color: rgba(6, 69, 96, 0.9);
        }
      }
      .S124_data:first-child {
        margin-left: 0;
      }
      .S124_data > div:first-child {
        color: #88fbff;
        font-size: 0.8vw;
        width: 20%;
        border-right: 1px solid #0974a4;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 0.2vw;
      }
    }
  }
  .S124_bottom {
    .S124_long_ti {
      margin-top: 0.8vh;
      margin-bottom: 1vh;
      color: #21ddd9;
      background: url('~@/assets/images/24/long_ti.png') no-repeat;
      padding: 0 20px 10px 20px;
      background-size: 100% 100%;
      width: 166px;
      font-size: 0.8vw;
      display: flex;
      justify-content: space-between;
      position: relative;
      z-index: 100;
      .S124_long_t {
        color: #ffffff;
        cursor: pointer;
      }
      .S124_long_t_act {
        color: #fff21f;
        cursor: auto;
      }
    }
    .S124_highChart {
      height: 15vh;
      position: relative;
      bottom: 5.5vh;
      width: 100%;
    }
    .highcharts-text-outline {
      display: none;
    }
  }
}
</style>
