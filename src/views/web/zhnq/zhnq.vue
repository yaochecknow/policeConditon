/**
*
* Author: nimq
* CreatDate: 2020-05-25 17:08:06
*
*/
<template>
  <div class="zhnq">
    <div class="H016_contetTop">
      <div class="H016_contetLeft">
        <div class="H016_titleImg">
          <img src="~@/assets/images/25/titleimg.png" alt />
          <span>资产情况</span>
        </div>
        <div class="H016_titleTxt">
          <p class="title">资产总数</p>
          <h3>{{assetNum}}</h3>
        </div>
      </div>
      <div class="H016_contetRight">
        <div id="main" class="over" style="width: 100%; height:100%;"></div>
        <div class="H016_echartsBg"></div>
      </div>
    </div>
    <div class="H016_contetTBottom">
      <div class="H016_titleImg">
        <img src="~@/assets/images/25/titleimg.png" alt />
        <span>通知通报</span>
      </div>
      <ul>
        <li v-for="item in infor" :key="item.index">
          <img src="~@/assets/images/25/tzIcon.png" alt />
          <i></i>
          <span class="H016_contetTBotTxt">{{item.title}}</span>
          <span class="H016_contetTBotTime">{{item.addtime}}</span>
        </li>
      </ul>
      <div class="H016_contetTBotCard">
        <div class="H016_contetTBotCardone">
          <!-- <span class="H016_num">4</span> -->
          <img src="~@/assets/images/25/tztbIcon3.png" alt />
          <p>转阅信息</p>
        </div>
        <div class="H016_contetTBotCardone">
          <!-- <span class="H016_num">4</span> -->
          <img src="~@/assets/images/25/tztbIcon4.png" alt />
          <p>信息报送</p>
        </div>
        <div class="H016_contetTBotCardone">
          <!-- <span class="H016_num">4</span> -->
          <img src="~@/assets/images/25/tztbIcon5.png" alt />
          <p>交办指令</p>
        </div>
        <div class="H016_contetTBotCardone">
          <!-- <span class="H016_num">4</span> -->
          <img src="~@/assets/images/25/tztbIcon6.png" alt />
          <p>重点人员</p>
        </div>
        <div class="H016_contetTBotCardone">
          <!-- <span class="H016_num">4</span> -->
          <img src="~@/assets/images/25/tztbIcon7.png" alt />
          <p>质态通报</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import { homeAPI } from '@/apis'
export default {
  name: 'zhnq',
  components: {},
  props: {},
  computed: {},
  data() {
    return {
      assetNum: 0,
      infor: [],
      chartData: [
        // { name: '你好', value: 123 },
        // { name: '你好', value: 123 },
        // { name: '你好', value: 123 },
        // { name: '你好', value: 123 },
      ],
    }
  },
  created() {},
  mounted() {
    this.informnotGet()
    this.assetsGet()
  },
  methods: {
    eChartInit(data) {
      var myChart = echarts.init(document.getElementById('main'))
      var option = {
        backgroundColor: 'transparent',
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} ({d}%)',
        },
        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0.4, 1.2],
          },
        },
        color: ['#50edb8', '#5283d2', '#4da8ad', '#faf591', '#fca890'],
        series: [
          {
            type: 'pie',
            radius: '80%',
            center: ['50%', '60%'],
            data: data.sort((a, b) => {
              return a.num - b.num
            }),

            roseType: 'radius',
            label: {
              normal: {
                show: true,
                position: 'outside',
                formatter: '{value1|{c}}\n{name|{b}}',
                // 防止标签重叠策略
                color: '#00ff90',
                rich: {
                  name: { color: '#ffffff' },
                  value1: { color: '#00ff90', align: 'center', fontSize: 20 },
                },
              },
            },
            labelLine: {
              lineStyle: {
                color: '#00ff90',
              },
              smooth: 0.2,
              length: 10,
              length2: 20,
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: idx => {
              return Math.random() * 200
            },
          },
        ],
      }
      myChart.setOption(option)
      window.onresize = myChart.resize
    },
    // 通知通报数据获取
    async informnotGet() {
      this.infor = await homeAPI.informnotReq()
    },
    // 资产情况
    async assetsGet() {
      let dw = this.$route.query.dw
      let data = await homeAPI.assetCon(dw)
      this.assetNum = data[0].total
      this.eChartInit(data[0].eqdata)
    },
  },
  watch: {},
}
</script>

<style lang='scss' scoped type='text/scss'>
@function val($val) {
  @return ($val / 16) + rem;
}
::-webkit-scrollbar {
  width: 7px;
  height: 10px;
}
/* 滚动条的滑块 */
::-webkit-scrollbar-thumb {
  background-color: #098487;
  border-radius: 3px;
}
.zhnq {
  width: 100%;
  height: 100%;
  margin: 1.5vw 0 0 1vw;
  /* title */
  .H016_titleImg {
    width: 8vw;
    height: 2vw;
    position: relative;

    img {
      width: 100%;
      height: 100%;
    }

    span {
      position: absolute;
      left: 15%;
      top: 8%;
      font-size: 1vw;
      letter-spacing: 3px;
      color: #fff;
    }
  }
  .H016_contetTop {
    display: flex;
    width: 90%;
    height: 35%;
    .H016_contetLeft {
      width: val(250);
      .H016_titleTxt {
        padding: val(25) val(40);
        width: 100%;
        height: calc(100% - val(50));
        .title {
          font-size: 0.6vw;
          color: #fff;
          margin: 0;
        }
        h3 {
          color: #00ff90;
          font-size: 1.7vw;
          margin: 0;
          font-family: led;
        }
      }
    }

    .H016_contetRight {
      flex: 1;
      position: relative;
      .H016_echartsBg {
        position: absolute;
        left: 50%;
        top: 60%;
        transform: translate(-50%, -50%);
        width: 10vw;
        height: 10vw;
        border-radius: 50%;
        border: 2px solid #06909d;
        background: rgba(18, 80, 107, 0.2);
        z-index: -1;
      }
      .over {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
      }
    }
  }
  .H016_contetTBottom {
    width: 100%;
    height: 50%;
    ul {
      margin: 8px 0;
      height: 12vh;
      overflow-y: auto;
      padding: 0;
      width: 94%;
      li {
        width: 99%;
        height: 3vh;
        line-height: 3vh;
        border: 1px solid #0f4d62;
        background: rgba(12, 62, 99, 0.2);
        margin-bottom: val(4);
        display: flex;
        color: #fff;
        font-size: 0.8vw;
        margin-right: 0;
        img {
          width: val(14);
          height: val(14);
          margin-top: val(8.5);
          padding-left: 6px;
        }
        i {
          width: 2px;
          height: val(20);
          background: #3390d4;
          margin: val(4) val(8);
        }
        .H016_contetTBotTxt {
          flex: 1;
        }
        .H016_contetTBotTime {
          text-align: right;
        }
      }
    }
    .H016_contetTBotCard {
      width: 100%;
      display: flex;
      height: 20%;
      .H016_contetTBotCardone {
        cursor: pointer;
        width: 18%;
        height: val(60);
        margin-right: 1%;
        background: url(~@/assets/images/25/tztbIcon2.png) no-repeat;
        background-size: 100% 100%;
        position: relative;
        color: #fff;
        text-align: center;
        .H016_num {
          border: 1px solid #ffffff;
          width: val(25);
          height: val(25);
          line-height: val(25);
          text-align: center;
          border-radius: 50%;
          background: #ff4369;
          position: absolute;
          right: val(-5);
          top: val(-5);
        }
        img {
          width: val(30);
          height: val(30);
          margin-top: val(6);
        }
        p {
          text-align: center;
          margin: 0;
          margin-top: val(-5);
          letter-spacing: 3px;
          font-size: 0.6vw;
        }
      }
      .H016_contetTBotCardone:hover {
        background: url(~@/assets/images/24/jump_active.png) no-repeat;
        background-size: 100% 100%;
      }
    }
  }
}
</style>
