<template>
  <div class="V124_content">
    <div class="V124_c_on">
      <div class="V124_c_on_l">
        <div class="V124_circle">
          <div>605</div>
          <div>公安监控</div>
        </div>
        <div class="V124_circle">
          <div>481</div>
          <div>社会面监控</div>
        </div>
        <div class="V124_circle">
          <div>1086</div>
          <div>监控总量</div>
        </div>
        <div class="V124_circle">
          <div>181</div>
          <div>道路卡口</div>
        </div>
        <div class="V124_circle">
          <div>88</div>
          <div>人像卡口</div>
        </div>
      </div>
      <div class="V124_c_on_r">
        <div class="V124_probaly">
          <div class="V124_probaly_b">
            <div class="V124_probaly_data">
              <span>94</span>
              <span>%</span>
            </div>
            <div class="V124_probaly_tpc">在线率</div>
          </div>
          <div class="V124_probaly_b">
            <div class="V124_probaly_data">
              <span>92</span>
              <span>%</span>
            </div>
            <div class="V124_probaly_tpc">修复率</div>
          </div>
          <div class="V124_probaly_b">
            <div class="V124_probaly_data">
              <span>95</span>
              <span>%</span>
            </div>
            <div class="V124_probaly_tpc">响应率</div>
          </div>
          <div class="V124_probaly_b">
            <div class="V124_probaly_data">
              <span>5</span>
              <span>%</span>
            </div>
            <div class="V124_probaly_tpc">故障率</div>
          </div>
        </div>
      </div>
    </div>
    <div class="V124_c_bottom" id="chartArea"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'videoPatrol',
  data() {
    return {
      chartData: {
        names: ['车辆抓拍', '人像抓拍', '道闸抓拍'],
        xAxis: ['05-01', '05-02', '05-03', '05-04', '05-05', '05-06', '05-07'],
        dataOne: [1434, 8444, 1674, 3242, 9237, 4234, 2999],
        dataTwo: [3234, 7444, 5674, 3242, 1237, 3234, 9999],
        dataThree: [6234, 2344, 5674, 4242, 6237, 7234, 4999],
      },
    }
  },
  methods: {
    chartPic(areaId, data = {}) {
      let myChart = echarts.init(document.getElementById(areaId))
      var option = {
        color: ['#50edb8', '#f9c23f', '#5283d2'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          top: '30px',
          left: '50px',
          right: '15px',
          bottom: '20px',
        },
        legend: {
          data: data.names,
          textStyle: {
            color: '#ffffff',
            fontSize: 14,
          },
          itemHeight: 10,
          itemWidth: 10,
          right: 10,
        },
        xAxis: [
          {
            type: 'category',
            axisTick: { show: false },
            data: data.xAxis,
            axisLabel: {
              formatter: '{value}',
              textStyle: {
                color: '#88fbff',
              },
            },
            axisLine: {
              lineStyle: {
                color: '#88fbff',
                width: 2,
                show: false,
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              formatter: '{value}',
              textStyle: {
                color: '#88fbff',
              },
            },
            axisLine: {
              lineStyle: {
                color: '#88fbff',
                width: 2,
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(255,255,255,0.1)',
              },
            },
          },
        ],
        series: [
          {
            name: data.names[0],
            type: 'bar',
            barGap: 0,
            data: data.dataOne,
          },
          {
            name: data.names[1],
            type: 'bar',
            data: data.dataTwo,
          },
          {
            name: data.names[2],
            type: 'bar',
            data: data.dataThree,
          },
        ],
      }
      myChart.setOption(option)
      window.onresize = myChart.resize
    },
  },
  mounted() {
    this.chartPic('chartArea', this.chartData)
  },
}
</script>

<style lang='scss' scoped type='text/scss' >
.V124_content {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .V124_c_on {
    height: 50%;
    display: flex;
    .V124_c_on_l {
      flex: 1;
      position: relative;
      .V124_circle {
        position: absolute;
        width: 4.8vw;
        height: 4.8vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        background: url('~@/assets/images/24/v_cir_back.png') no-repeat;
        background-size: 100% 100%;
      }
      .V124_circle > div:first-child {
        font-size: 1.2vw;
        font-family: led;
      }
      .V124_circle > div:last-child {
        font-size: 0.7vw;
      }
      .V124_circle:first-child {
        top: 2vh;
        left: 2vw;
      }
      .V124_circle:nth-child(2) {
        top: 1.8vh;
        right: 2vw;
      }
      .V124_circle:nth-child(3) {
        width: 5.6vw;
        height: 5.6vw;
        background: url('~@/assets/images/24/v_cir_back_active.png') no-repeat;
        background-size: 100% 100%;
        top: 7.6vh;
        right: 6vw;
        color: #fffc00;
      }
      .V124_circle:nth-child(4) {
        bottom: -3.2vh;
        left: 1.5vw;
      }
      .V124_circle:nth-child(5) {
        bottom: -2vh;
        right: 1vw;
      }
    }
    .V124_c_on_r {
      flex: 0.8;
      position: relative;
      .V124_probaly {
        background: url('~@/assets/images/24/v_probaly.png') no-repeat;
        background-size: 100% 100%;
        position: absolute;
        height: 90%;
        width: 90%;
        top: 14%;
        display: flex;
        flex-wrap: wrap;
        .V124_probaly_b {
          height: 50%;
          width: 50%;
          display: flex;
          flex-direction: column;
          padding-left: 20%;
          box-sizing: border-box;
          justify-content: center;
          align-items: center;
          padding-right: 6%;
          .V124_probaly_data {
            color: #ffffff;
          }
          .V124_probaly_data span:first-child {
            font-size: 1.4vw;
            font-family: led;
          }
          .V124_probaly_data span:last-child {
            font-size: 0.8vw;
          }
          .V124_probaly_tpc {
            color: #ffffff;
            font-size: 0.8vw;
          }
        }
        .V124_probaly_b:first-child {
          background: url('~@/assets/images/24/v_online.png') no-repeat;
          background-size: 23% 30%;
          background-position: 16% center;
        }
        .V124_probaly_b:nth-child(2) {
          background: url('~@/assets/images/24/v_rep.png') no-repeat;
          background-size: 22% 30%;
          background-position: 16% center;
        }
        .V124_probaly_b:nth-child(3) {
          background: url('~@/assets/images/24/v_calb.png') no-repeat;
          background-size: 25% 34%;
          background-position: 16% center;
        }
        .V124_probaly_b:nth-child(4) {
          background: url('~@/assets/images/24/v_mal.png') no-repeat;
          background-size: 22% 30%;
          background-position: 16% center;
        }
      }
    }
  }
  .V124_c_bottom {
    height: 40%;
    bottom: 0;
  }
}
</style>
