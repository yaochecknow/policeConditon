<template>
  <div class="home">
    <topheader></topheader>
    <div class="H125_count">
      <div class="H125_box">
        <div class="H125_Name">
          <span @click="jumpPage('command',{},{ dw: $route.query.dw })">指挥调度</span>
        </div>
        <div class="H125_title11">
          <div class="H125_tit">
            <span>市局领导</span>
          </div>
          <div class="H125_tit" style="
         position: relative;
        left: 6vw; ">
            <span>指挥中心</span>
          </div>
        </div>
        <div class="H125_cont11">
          <div class="H125_icon11" v-for="item in leaderData" :key="item.index">
            <img src="~@/assets/images/25/people.png" alt />
            <div class="H125_tel11">
              <div>{{item.policename}}</div>
              <div>{{item.phone}}</div>
            </div>
          </div>
        </div>
        <div class="H125_title12">
          <div class="H125_tit">
            <span>派出所</span>
          </div>
        </div>
        <el-carousel height="100px" indicator-position="none">
          <el-carousel-item v-for="item in 4" :key="item" :interval="5000">
            <div class="H125_list13">
              <div class="H125_cont12">
                <div class="H125_icon11" v-for="item in policeData" :key="item.index">
                  <img src="~@/assets/images/25/people.png" alt />
                  <div class="H125_tel11">
                    <div>{{item.policename}}</div>
                    <div>{{item.phone}}</div>
                  </div>
                </div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
        <div class="H125_title13">
          <div class="H125_ti13" :class="this.xzbqType ===1  ? 'S025_tab' : ''">
            <span @click="tarTran(1)" class="a25_pointer">今日警情</span>
          </div>
          <div class="H125_ti13" :class="this.xzbqType ===2  ? 'S025_tab' : ''">
            <span @click="tarTran(2)" class="a25_pointer">协作备勤</span>
          </div>
          <div class="H125_ti13" :class="this.xzbqType ===3 ? 'S025_tab' : ''">
            <span @click="tarTran(3)" class="a25_pointer">业务通知</span>
          </div>
        </div>
        <div class="H125_list14">
          <div class="H125_box11" v-show="xzbqType===1">
            <div class="H125_rema" v-for="item in dayData" :key="item.index">
              <img src="~@/assets/images/25/tanhao (1).png" alt />
              <div class="H125_one">
                <div>{{item.jqbh+' '+item.bjlx}}</div>
                <div>{{item.jjrqsj}}</div>
              </div>
            </div>
          </div>
          <div class="H125_box11" v-show="xzbqType===2">
            <div class="H125_rema" v-for="item in comData" :key="item.index">
              <img src="~@/assets/images/25/tanhao (1).png" alt />
              <div class="H125_one">
                <div>{{item.sjbh+' '+item.bjlx}}</div>
                <div>{{item.sjtime}}</div>
              </div>
            </div>
          </div>
          <div class="H125_box11" v-show="xzbqType===3">
            <div class="H125_rema" v-for="item in buniessData" :key="item.index">
              <img src="~@/assets/images/25/tanhao (1).png" alt />
              <div class="H125_one">
                <div>{{item.title}}</div>
                <div>{{item.addtime}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="H125_box">
        <div class="H125_Name">
          <span @click="jumpPage('information')">情报研判</span>
        </div>
        <div class="H125_title">
          <span>一警一档一研判</span>
        </div>
        <div class="H125_list2">
          <div class="H124_l_line1"></div>
          <div class="H124_l_line2"></div>
          <div class="H124_l_line3"></div>
          <div id="mychars1"></div>
          <div class="H125_ball">
            <div class="H125_round H125_total H125_upline">
              <span>总数</span>
              <span>{{parseFloat(finshed)+parseFloat(enfinshed)}}</span>
            </div>
          </div>
          <div id="mychars2"></div>

          <div class="H125_ball">
            <div class="H125_round">
              <span>完成数</span>
              <span>{{finshed}}</span>
            </div>
          </div>
          <div id="mychars3"></div>
          <div class="H125_ball">
            <div class="H125_round H125_unfin">
              <span>待完成</span>
              <span>{{enfinshed}}</span>
            </div>
          </div>
          <div id="mychars4"></div>
          <div class="H125_ball">
            <div class="H125_round">
              <span>完成率</span>
              <span>{{GetPercent(parseFloat(finshed),parseFloat(finshed)+parseFloat(enfinshed))}}</span>
            </div>
          </div>
        </div>
        <div class="H125_title">
          <span>一人一档一研判</span>
        </div>
        <div class="H225_title">
          <img src="~@/assets/images/25/yjzl_img.png" alt />
        </div>
        <div class="H225_list2">
          <div class="H225_box22">
            <img src="~@/assets/images/25/zongshu22.png" alt />
            <span class="H125_Llone"></span>
            <div class="H325_Num">
              <span>总数</span>
              <span>156</span>
            </div>
          </div>
          <div class="H225_box22">
            <img src="~@/assets/images/25/banjie22.png" alt />
            <span class="H125_Llone"></span>
            <div class="H325_Num">
              <span>办结数</span>
              <span>140</span>
            </div>
          </div>
          <div class="H225_box22">
            <img src="~@/assets/images/25/yijian22.png" alt />
            <span class="H125_Llone"></span>
            <div class="H325_Num">
              <span>待反馈</span>
              <span>16</span>
            </div>
          </div>
        </div>
      </div>
      <div class="H125_box">
        <div class="H125_Name">
          <span>勤务检测</span>
        </div>
        <qwjc />
      </div>
      <div class="H125_box">
        <div class="H125_Name">
          <span>综合内勤</span>
        </div>
        <div class="H016_contet">
          <zhnq></zhnq>
        </div>
      </div>
      <div class="H125_box">
        <div class="H125_Name">
          <span>执法监督</span>
        </div>
        <zfjd />
      </div>
      <div class="H125_box">
        <div class="H125_Name">
          <span>视频巡查</span>
        </div>
        <spxc />
      </div>
    </div>
  </div>
</template>

<script>
import topheader from '../head/head'
import zfjd from '../lawEnfor/lawEnfor'
import qwjc from '../serDuty/serDuty'
import spxc from '../videoPatrol/videoPatrol'
import echarts from 'echarts'
import zhnq from '../zhnq/zhnq'
import { homeAPI } from '@/apis'
export default {
  name: 'Home',
  components: {
    topheader,
    zfjd,
    qwjc,
    spxc,
    zhnq,
  },
  props: {},
  data() {
    return {
      xzbqType: 1, // 三个栏位切换
      myChart1: null,
      finshed: 0, // 完成数
      enfinshed: 0, // 待完成数
      policeData: [], // 派出所数据
      leaderData: [], // 市局领导
      dayData: [], // 今日警情
      comData: [], // 协作筹备
      buniessData: [], // 业务通知
      option1: {
        title: {
          show: false,
          text: '80%',
          x: 'center',
          y: 'center',
          textStyle: {
            fontWeight: 'normal',
            color: '#0580f2',
            fontSize: '90',
          },
        },
        color: ['#025a6b'],
        legend: {
          show: false,
          itemGap: 12,
          data: ['01', '02'],
        },

        series: [
          {
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['90%', '100%'],
            itemStyle: {
              normal: {
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
              },
            },
            hoverAnimation: false,
            data: [
              {
                value: 100,
                name: '01',
                itemStyle: {
                  normal: {
                    color: {
                      // 完成的圆环的颜色
                      colorStops: [
                        {
                          offset: 0,
                          color: '#946ef7', // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: '#6ba6fa', // 100% 处的颜色
                        },
                      ],
                    },
                    label: {
                      show: false,
                    },
                    labelLine: {
                      show: false,
                    },
                  },
                },
              },
            ],
          },
        ],
      }, // 总数环状百分比
      option2: {
        title: {
          show: false,
          text: '80%',
          x: 'center',
          y: 'center',
          textStyle: {
            fontWeight: 'normal',
            color: '#0580f2',
            fontSize: '90',
          },
        },
        color: ['#025a6b'],
        legend: {
          show: false,
          itemGap: 12,
          data: ['01', '02'],
        },

        series: [
          {
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['90%', '100%'],
            itemStyle: {
              normal: {
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
              },
            },
            hoverAnimation: false,
            data: [
              {
                value: 80,
                name: '01',
                itemStyle: {
                  normal: {
                    color: {
                      // 完成的圆环的颜色
                      colorStops: [
                        {
                          offset: 0,
                          color: '#14fc90', // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: '#8effbc', // 100% 处的颜色
                        },
                      ],
                    },
                    label: {
                      show: false,
                    },
                    labelLine: {
                      show: false,
                    },
                  },
                },
              },
              {
                name: '02',
                value: 20,
              },
            ],
          },
        ],
      }, // 总数环状百分比
      option3: {
        title: {
          show: false,
          text: '80%',
          x: 'center',
          y: 'center',
          textStyle: {
            fontWeight: 'normal',
            color: '#0580f2',
            fontSize: '90',
          },
        },
        color: ['#025a6b'],
        legend: {
          show: false,
          itemGap: 12,
          data: ['01', '02'],
        },

        series: [
          {
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['90%', '100%'],
            itemStyle: {
              normal: {
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
              },
            },
            hoverAnimation: false,
            data: [
              {
                value: 80,
                name: '01',
                itemStyle: {
                  normal: {
                    color: {
                      // 完成的圆环的颜色
                      colorStops: [
                        {
                          offset: 0,
                          color: '#fc8a34', // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: '#ffdd94', // 100% 处的颜色
                        },
                      ],
                    },
                    label: {
                      show: false,
                    },
                    labelLine: {
                      show: false,
                    },
                  },
                },
              },
              {
                name: '02',
                value: 20,
              },
            ],
          },
        ],
      }, // 总数环状百分比
      option4: {
        title: {
          show: false,
          text: '80%',
          x: 'center',
          y: 'center',
          textStyle: {
            fontWeight: 'normal',
            color: '#0580f2',
            fontSize: '90',
          },
        },
        color: ['#025a6b'],

        series: [
          {
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['90%', '100%'],
            itemStyle: {
              normal: {
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
              },
            },
            hoverAnimation: false,
            data: [
              {
                value: 80,
                name: '01',
                itemStyle: {
                  normal: {
                    color: {
                      // 完成的圆环的颜色
                      colorStops: [
                        {
                          offset: 0,
                          color: '#00cefc', // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: '#367bec', // 100% 处的颜色
                        },
                      ],
                    },
                    label: {
                      show: false,
                    },
                    labelLine: {
                      show: false,
                    },
                  },
                },
              },
              {
                name: '02',
                value: 20,
              },
            ],
          },
        ],
      }, // 总数环状百分比
    }
  },
  created() {
    let dw = this.$route.query.dw

    this.informationGet(dw)
    this.leaderMesGet()
    this.policeMesGet(dw)
    this.todayAlaGet(dw)
    this.businsessInforGet()
    this.cooperaGet(dw)
    console.log(this.$route)
  },
  mounted() {
    setTimeout(() => {}, 1000)
  },
  methods: {
    jumpPage(name, params, query) {
      this.$router.push({
        name: name,
        params: params || {},
        query: query || {},
      })
    },
    // 获取领导数据
    async leaderMesGet() {
      this.leaderData = await homeAPI.leaderReq()
    },
    // 获取派出所
    async policeMesGet(dw) {
      this.policeData = await homeAPI.PoliceReq(dw)
    },
    // 获取今日警情数据
    async todayAlaGet(dw) {
      this.dayData = await homeAPI.todayAlaReq(dw)
    },
    // 获取业务通知数据
    async businsessInforGet() {
      this.buniessData = await homeAPI.busnessInforReq()
    },
    // 获取协作备勤数据
    async cooperaGet(dw) {
      this.comData = await homeAPI.cooperaReq(dw)
    },
    // 情报研判数据
    async informationGet(dw) {
      let data = await homeAPI.informationReq(dw)
      this.finshed = data[0].finished
      this.enfinshed = data[0].unfinished
      this.finshed = parseFloat(this.finshed)
      this.enfinshed = parseFloat(this.enfinshed)
      this.total()
      this.finNum(this.finshed, this.enfinshed + this.finshed)
      this.unfinish(this.enfinshed, this.enfinshed + this.finshed)
      this.finSer(this.GetPercent(this.finshed, this.enfinshed + this.finshed))
    },
    // 总数百分比 初始化外圈
    total() {
      var myChart = echarts.init(document.getElementById('mychars1'))
      myChart.setOption(this.option1)
    },
    // 完成数量百分比，前面完成，后面总数
    finNum(num1, num2) {
      var myChart = echarts.init(document.getElementById('mychars2'))
      this.option2.series[0].data[0].value = (num1 / num2) * 100
      this.option2.series[0].data[1].value = 100 - (num1 / num2) * 100
      myChart.setOption(this.option2)
    },
    // 待完成百分比，前面代完成，后面总数
    unfinish(num1, num2) {
      var myChart = echarts.init(document.getElementById('mychars3'))
      this.option3.series[0].data[0].value = (num1 / num2) * 100
      this.option3.series[0].data[1].value = 100 - (num1 / num2) * 100
      myChart.setOption(this.option3)
    },
    // 完成百分比，传入百分比
    finSer(num) {
      var myChart = echarts.init(document.getElementById('mychars4'))
      this.option4.series[0].data[0].value = num
      this.option4.series[0].data[1].value = 100 - num
      myChart.setOption(this.option4)
    },
    tarTran(num) {
      this.xzbqType = num
    },
    // 百分比计算
    GetPercent(num, total) {
      num = parseFloat(num)
      total = parseFloat(total)
      if (isNaN(num) || isNaN(total)) {
        return '-'
      }
      return total <= 0 ? '0%' : Math.round((num / total) * 10000) / 100.0
    },
  },
  watch: {},
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
.home {
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  #canvas {
    display: block;
    margin: 0 auto;
  }
  div,
  span {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  #mychars1 {
    width: 6vw;
    height: 6vw;
    position: absolute;
    margin-left: 1.25%;
    margin-top: 10.6%;
  }
  #mychars2 {
    width: 6vw;
    height: 6vw;
    position: absolute;
    margin-left: 25.2%;
    margin-top: 0.4%;
  }
  #mychars3 {
    width: 6vw;
    height: 6vw;
    position: absolute;
    // margin-left: calc(26.5% - 7px);
    // margin-top: 2px;
    margin-top: 9.4%;
    margin-left: 50.4%;
  }
  #mychars4 {
    width: 6vw;
    height: 6vw;
    position: absolute;
    // margin-left: calc(26.5% - 7px);
    margin-top: 0.4%;
    margin-left: 75.1%;
  }
  // background: url('~@/assets/images/25/title.png') no-repeat;
  // background-size: 100% 100%;
  .H125_count {
    width: 100%;
    height: calc(90vh - 10px);
    display: flex;
    flex-wrap: wrap;
    padding-top: 10px;

    .H125_box {
      width: 32.6%;
      height: 46%;
      margin: 4px;
      // background: #fff;
      position: relative;
      background: url('~@/assets/images/25/bac_img.png') no-repeat;
      background-size: 100% auto;
      .H125_title11 {
        height: 2vh;
        display: flex;
        margin-top: 2vh;
        margin-left: 2vw;
        .H125_tit {
          position: relative;
          span {
            font-size: 0.8vw;
            position: absolute;
            color: #fff;
            left: 1.5vw;
          }
        }
        div {
          width: 50%;
          height: 2vw;
          background: url('~@/assets/images/25/shld_title.png') no-repeat;
          background-size: 33% auto;
        }
      }
      .H125_title12 {
        height: 2vh;
        display: flex;
        margin-top: 0.5vh;
        margin-left: 2vw;
        .H125_tit {
          position: relative;
          span {
            font-size: 0.8vw;
            position: absolute;
            color: #fff;
            left: 1.5vw;
          }
        }
        div {
          width: 50%;
          height: 2vw;
          background: url('~@/assets/images/25/shld_title.png') no-repeat;
          background-size: 33% auto;
        }
      }

      .H125_cont11 {
        display: flex;
        width: 100%;
        height: 2.5vw;
        margin-top: 1vw;
        justify-content: space-between;
        .H125_icon11 {
          display: flex;
          color: #fff;
          justify-content: space-between;
          width: 31%;
          height: 100%;
          background: url('~@/assets/images/24/left_top_back.png') no-repeat center 50%;
          background-size: 82% auto;
          font-size: 0.7vw;
          align-items: center;

          img {
            width: 1vw;
            height: (26/24) * 1vw;
            margin-left: 1.8vw;
          }
        }
        .H125_tel11 {
          width: 4vw;
          margin-right: 1.8vw;
        }
      }
      .H125_list13 {
        margin-top: 0.5vw;
        .H125_cont12 {
          display: flex;
          width: 100%;
          height: 3vw;
          // margin-top: 1vw;
          justify-content: space-between;
          flex-wrap: wrap;
          .H125_icon11 {
            display: flex;
            color: #fff;
            justify-content: space-between;
            width: 31%;
            height: 75%;
            background: url('~@/assets/images/24/left_top_back.png') no-repeat center 50%;
            background-size: 82% auto;
            font-size: 0.7vw;
            align-items: center;
            .H124_p_name {
              color: #11ff97;
              font-size: 0.6vw;
              margin-left: 1.3vw;
            }
            img {
              width: 1vw;
              height: (26/24) * 1vw;
              margin-left: 1.8vw;
            }
          }
          .H125_tel11 {
            margin-right: 1.8vw;
          }
        }
      }
      .H125_title13 {
        display: flex;
        width: 100%;
        height: 3vh;
        justify-content: center;
        div {
          color: #fff;
          flex: 0.3;
          text-align: center;
        }
        span {
          line-height: 1.8;
        }
        .S025_tab {
          background: url('~@/assets/images/25/xzbq_before.png') no-repeat;
          background-size: 100% auto;
          color: #fcff00;
        }
      }
      .H125_list14 {
        width: 90%;
        height: 32%;
        overflow-y: auto;
        display: flex;
        margin-left: 5%;
        background: rgba(12, 62, 99, 0.2);
        flex-direction: column;
        flex: 1;
        .H125_box11 {
          width: 95%;
          height: 100%;
          margin-left: 5%;
          .H125_rema {
            height: 23%;
            display: flex;
            align-items: center;
            border-bottom: 1px dashed #2a6d84;
            img {
              width: 1vw;
              height: 1vw;
              margin-right: 1vw;
            }
            .H125_one {
              flex: 1;
              display: flex;
              color: #fff;
              justify-content: space-between;
              align-items: center;
              font-size: 0.75vw;
            }
          }
        }
      }
      &:nth-of-type(2) {
        background: none;
      }
      &:nth-of-type(3) .H125_Name {
        background: url('~@/assets/images/25/litle_title1.png') no-repeat;
        background-size: contain;
        span {
          right: 3.8rem;
          cursor: pointer;
        }
      }
      &:nth-of-type(1) .H125_Name span {
        margin-left: 3.8rem;
      }
      &:nth-of-type(2) .H125_Name span {
        margin-left: 3.8rem;
      }
      &:nth-of-type(4) .H125_Name span {
        margin-left: 3.8rem;
      }
      &:nth-of-type(5) .H125_Name span {
        margin-left: 3.8rem;
      }
      &:nth-of-type(5) .H125_Name {
        background: url('~@/assets/images/24/main_title_back.png') no-repeat;
        background-size: 25% 68%;
        background-position: 0% 6%;
      }
      &:nth-of-type(2) .H125_Name {
        background: url('~@/assets/images/24/main_title_back.png') no-repeat;
        background-size: 25% 68%;
        background-position: 0% 6%;
      }
      &:nth-of-type(6) .H125_Name {
        background: url('~@/assets/images/25/litle_title1.png') no-repeat;
        background-size: contain;
        span {
          right: 3.8rem;
        }
      }
      .H125_Name {
        background: url('~@/assets/images/25/litle_title.png') no-repeat;
        background-size: 100% auto;
        width: 100%;
        margin: -37px 0 0;
        height: 4rem;
        position: absolute;
        span {
          font-size: 1vw;
          position: absolute;
          top: 0.5rem;
          color: #fff;
        }
      }
      .H125_title {
        text-align: center;
        color: #fff;
        background: url('~@/assets/images/25/yijingyidang.png') no-repeat;
        background-size: 100% 100%;
        padding: 5px 0;
        font-size: 19px;
        margin: 8px 0 0;
      }
      .H225_title {
        text-align: center;
        margin: 5px 0;
        height: 3vh;
        line-height: 3;
      }
      .H225_list2 {
        display: flex;
        width: 100%;
        height: 100px;
        justify-content: space-between;
        .H125_Llone {
          // width: 2px;
          height: 50%;
          border: 1px solid #2399b0;
        }
        .H225_box22 {
          width: 30%;
          height: 4.5vw;
          // background: url('~@/assets/images/25/content22.png');
          background: rgba($color: #036676, $alpha: 0.79);
          background-size: 100% 100%;
          margin: 3px 5px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          img {
            width: 2vw;
            height: (35/40) * 2vw;
            margin-left: 18px;
          }
          .H325_Num {
            margin-right: 18px;
            color: #fff;
            font-size: 0.9vw;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: center;
            flex: 0.7;
          }
          .H325_Num :nth-of-type(2) {
            font-size: 1.9vw;
            font-weight: 700;
          }
        }
      }
      .H125_list2 {
        width: 100%;
        height: 43%;
        display: flex;
        position: relative;

        .H125_ball {
          width: 25%;
          height: 100%;
          margin: 10px;

          .H125_round {
            width: 5vw;
            height: 5vw;
            box-shadow: inset 0px 0px 18px 21px #0a8595;
            border-radius: 50%;
            border: 1.5px solid #11b1ad;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #fff;

            span:nth-child(2) {
              font-family: 'Impact';
              font-weight: 400;
              font-size: 1.5vw;
            }
          }
          .H125_total {
            margin-top: 47%;
            margin-left: 4.5%;
          }
          .H125_total::before {
            // position: absolute;
            // left: 105%;
            // bottom: 44px;
            width: 133px;
            height: 222px;
            border-top: 3px solid #1799e4;
            border-right: 3px solid #1799e4;
            color: #1799e4;
            background: #000;
            z-index: 11;
          }

          .H125_unfin {
            margin-top: 3vw;
          }
        }
        .H124_l_line1 {
          height: 3.5vh;
          width: 2vw;
          background: url('~@/assets/images/24/one_line2.png') no-repeat;
          background-size: 100% 100%;
          position: absolute;
          right: 24%;
          top: 44%;
        }
        .H124_l_line2 {
          height: 3.5vh;
          width: 2vw;
          background: url('~@/assets/images/24/one_line.png') no-repeat;
          background-size: 100% 100%;
          position: absolute;
          left: 44%;
          top: 44%;
        }
        .H124_l_line3 {
          height: 3.5vh;
          width: 2vw;
          background: url('~@/assets/images/24/one_line2.png') no-repeat;
          background-size: 100% 100%;
          position: absolute;
          left: 19.4%;
          top: 43%;
        }
      }
      .H016_contet {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
