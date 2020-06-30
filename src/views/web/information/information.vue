<!--
 * Author: wsp
 * CreatDate: 2020-06-02
 *
 -->
<template>
  <div class="home">
    <topheader :title="'情报研判岗'"></topheader>
    <div class="C106_container">
      <div class="I106_left">
        <div class="I106_top">
          <div class="I106_title">一警一档一研判</div>
        </div>
        <div class="I106_content">
          <!--当日有效警情s-->
          <div class="C106_box I106_dryxjq">
            <div class="C106_boxInner">
              <div class="C106_top">
                <div class="C106_title">当日有效警情</div>
              </div>
              <div class="C106_boxContent">
                <div class="I106_dryxjqTotal">
                  <div class="I106_dryxjqTotalName">有效警情总数</div>
                  <div class="I106_dryxjqTotalValue">
                    <div>2</div>
                    <div>3</div>
                  </div>
                </div>
                <ul class="I106_dryxjqList">
                  <li>
                    <div class="I106_dryxjqNumber">1</div>
                    <div class="I106_dryxjqName">违法警情</div>
                  </li>
                  <li>
                    <div class="I106_dryxjqNumber">0</div>
                    <div class="I106_dryxjqName">流转率(%)</div>
                  </li>
                  <li>
                    <div class="I106_dryxjqNumber">0</div>
                    <div class="I106_dryxjqName">评估率(%)</div>
                  </li>
                  <li>
                    <div class="I106_dryxjqNumber">22</div>
                    <div class="I106_dryxjqName">非违法警情</div>
                  </li>
                  <li>
                    <div class="I106_dryxjqNumber">18.18</div>
                    <div class="I106_dryxjqName">流转率(%)</div>
                  </li>
                  <li>
                    <div class="I106_dryxjqNumber">18.18</div>
                    <div class="I106_dryxjqName">评估率(%)</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!--当日有效警情e-->
          <!--当日部分违法警情s-->
          <div class="C106_box I106_drbfwfjq">
            <div class="C106_boxInner">
              <div class="C106_top">
                <div class="C106_title">当日部分违法警情</div>
              </div>
              <div class="C106_boxContent">
                <div class="I106_drbfwfjqCharts">
                  <div class="I106_drbfwfjqChartOuter" v-for="(item, index) in pieChartData" :key="'pieChartData-' + index">
                    <div class="I106_drbfwfjqChartTitle">
                      <img src="@/assets/images/06/I106_icon5.png" alt="" class="I106_drbfwfjqIcon">
                      <span>{{item.name}}</span>
                    </div>
                    <div class="I106_drbfwfjqChart">
                      <pieChart
                        :index="index + 1"
                        width="100"
                        height="100"
                        :data="item"
                      ></pieChart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--当日部分违法警情e-->
          <!--违法线索s-->
          <div class="C106_box I106_wfxs">
            <div class="C106_boxInner">
              <div class="C106_top">
                <div class="C106_title">违法线索</div>
              </div>
              <div class="C106_boxContent">
                <div class="I106_wfxsContent">
                  <div class="I106_wfxsTotal">
                    <div class="I106_wfxsTotalName">违法线索总数</div>
                    <div class="I106_wfxsTotalValue">
                      <div>1</div>
                      <div>2</div>
                    </div>
                  </div>
                  <div class="I106_wfxsCharts">
                    <div class="I106_wfxsChartOuter" v-for="(item, index) in pie3DChart1Data" :key="'pie3DChart1Data-'+index">
                      <div class="I106_wfxsChartTop">
                        <div class="I106_wfxsChartTotal">总数</div>
                        <div class="I106_wfxsChartNumber">{{item.total}}</div>
                      </div>
                      <div class="I106_wfxsChart">
                        <pie3DChart1
                          :index="index+1"
                          width="100"
                          height="100"
                          :data="item"
                        ></pie3DChart1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--违法线索e-->
          <!--统计各类数量s-->
          <div class="C106_box I106_tjglsl">
            <div class="C106_boxInner">
              <div class="C106_top">
                <div class="C106_title">统计各类数量</div>
              </div>
              <div class="C106_boxContent">
                <div class="I106_tjglslCharts">
                  <div class="I106_chart I106_tjglslChart">
                    <radarChart
                      :index="1"
                      width="100"
                      height="100"
                      :data="radarChartData"
                    ></radarChart>
                  </div>
                  <div class="I106_tjglslRight">
                    <div class="I106_tjglslChartTitle">
                      <img src="@/assets/images/06/I106_icon5.png" alt="" class="I106_drbfwfjqIcon">
                      <span>线索办结情况</span>
                    </div>
                    <div class="I106_tjglslChartOuter">
                      <div class="I106_tjglslChartContainer">
                        <div class="I106_tjglslChartName">办<br/>结<br/>线<br/>索<br/>数</div>
                        <div class="I106_tjglslChart2">
                          <pie3DChart2
                            index="1"
                            width="100"
                            height="100"
                            :data="pie3DChart2Data[0]"
                          ></pie3DChart2>
                        </div>
                        <div class="I106_tjglslChartTips">
                          <div class="I106_tjglslChartTip I106_tjglslChartTip1">
                            <span>已办结</span>
                            <span class="I106_tjglslChartNumber">3</span>
                          </div>
                          <div class="I106_tjglslChartTip I106_tjglslChartTip2">
                            <span>未办结</span>
                            <span class="I106_tjglslChartNumber">9</span>
                          </div>
                        </div>
                      </div>
                      <div class="I106_tjglslChartContainer">
                        <div class="I106_tjglslChartName">抓<br/>获<br/>嫌<br/>疑<br/>人<br/>数</div>
                        <div class="I106_tjglslChart2">
                          <pie3DChart2
                            index="2"
                            width="100"
                            height="100"
                            :data="pie3DChart2Data[1]"
                          ></pie3DChart2>
                        </div>
                        <div class="I106_tjglslChartTips">
                          <div class="I106_tjglslChartTip I106_tjglslChartTip1">
                            <span>已抓获</span>
                            <span class="I106_tjglslChartNumber">4</span>
                          </div>
                          <div class="I106_tjglslChartTip I106_tjglslChartTip3">
                            <span>未抓获</span>
                            <span class="I106_tjglslChartNumber">7</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--统计各类数量e-->
        </div>
      </div>
      <div class="I106_right">
        <div class="I106_top">
          <div class="I106_title I106_title2">一人一档一研判</div>
        </div>
        <div class="I106_content">
          <!--预警指令情况s-->
          <div class="C106_box I106_yjzlqk">
            <div class="C106_boxInner">
              <div class="C106_top">
                <div class="C106_title">预警指令情况</div>
              </div>
              <div class="C106_boxContent">
                <div class="I106_yjzlqkContent">
                  <div class="I106_yjzlqkInfo">
                    <div class="I106_yjzlqkItem">
                      <div class="I106_yjzlqkItemInfo">
                        <img class="I106_yjzlqkItemIcon" src="@/assets/images/06/I106_icon1.png" alt="">
                        <div class="I106_yjzlqkItemName">总数</div>
                      </div>
                      <div class="I106_yjzlqkItemNumber">4</div>
                    </div>
                    <div class="I106_yjzlqkItem">
                      <div class="I106_yjzlqkItemInfo">
                        <img class="I106_yjzlqkItemIcon" src="@/assets/images/06/I106_icon2.png" alt="">
                        <div class="I106_yjzlqkItemName">办结数</div>
                      </div>
                      <div class="I106_yjzlqkItemNumber">2</div>
                    </div>
                    <div class="I106_yjzlqkItem">
                      <div class="I106_yjzlqkItemInfo">
                        <img class="I106_yjzlqkItemIcon" src="@/assets/images/06/I106_icon3.png" alt="">
                        <div class="I106_yjzlqkItemName">待反馈</div>
                      </div>
                      <div class="I106_yjzlqkItemNumber">0</div>
                    </div>
                  </div>
                  <div class="I106_yjzlqkChart">
                    <pictorialBarChart
                      :index="1"
                      width="100"
                      height="100"
                      :data="pictorialBarChartData"
                    ></pictorialBarChart>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--预警指令情况e-->
          <!--预警战果情况s-->
          <div class="C106_box I106_yjzgqk">
            <div class="C106_boxInner">
              <div class="C106_top">
                <div class="C106_title">预警战果情况</div>
              </div>
              <div class="C106_boxContent">
                <div class="I106_chart">
                  <barChart
                    :index="1"
                    width="100"
                    height="100"
                    :data="barChartData"
                  ></barChart>
                </div>
              </div>
            </div>
          </div>
          <!--预警战果情况e-->
          <!--送爱回家情况s-->
          <div class="C106_box I106_sahjqk">
            <div class="C106_boxInner">
              <div class="C106_top">
                <div class="C106_title">送爱回家情况</div>
              </div>
              <div class="C106_boxContent I106_sahjqkContent">
                <div class="I106_sphereOuter">
                  <div class="I106_sphereCircle"></div>
                  <div class="I106_sphereCircle2"></div>
                  <div class="I106_sphere">
                    <div class="I106_sphereHalf">
                      <img src="@/assets/images/06/I106_sphere3.png" alt="">
                    </div>
                    <div class="I106_sphereInfo">
                      <span class="I106_sphereNumber">0</span>
                      <span class="I106_sphereUnit">人</span>
                    </div>
                    <div class="I106_sphereName">总数</div>
                  </div>
                  <div class="I106_sahjqkInfo I106_sahjqkInfo1">
                    <img src="@/assets/images/06/I106_icon4.png" alt="" class="I106_sahjqkInfoIcon">
                    <div class="I106_sahjqkInfoValue">
                      <div class="I106_sahjqkInfoName">本地劝返</div>
                      <div class="I106_sahjqkInfoNumber">0</div>
                      <div class="I106_sahjqkInfoUnit">人</div>
                    </div>
                  </div>
                  <div class="I106_sahjqkInfo I106_sahjqkInfo2">
                    <img src="@/assets/images/06/I106_icon4.png" alt="" class="I106_sahjqkInfoIcon">
                    <div class="I106_sahjqkInfoValue">
                      <div class="I106_sahjqkInfoName">送回原籍</div>
                      <div class="I106_sahjqkInfoNumber">0</div>
                      <div class="I106_sahjqkInfoUnit">人</div>
                    </div>
                  </div>
                  <div class="I106_sahjqkInfo I106_sahjqkInfo3">
                    <img src="@/assets/images/06/I106_icon4.png" alt="" class="I106_sahjqkInfoIcon">
                    <div class="I106_sahjqkInfoValue">
                      <div class="I106_sahjqkInfoName">送救助站</div>
                      <div class="I106_sahjqkInfoNumber">0</div>
                      <div class="I106_sahjqkInfoUnit">人</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--送爱回家情况e-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topheader from '../head/head'
import pieChart from './body/pieChart'
import pictorialBarChart from './body/pictorialBarChart'
import barChart from './body/barChart'
import radarChart from './body/radarChart'
import pie3DChart1 from './body/pie3DChart1'
import pie3DChart2 from './body/pie3DChart2'
export default {
  // 组件名
  name: 'command',
  // 组件构造
  mixins: [],
  // 组件扩展
  extends: {},
  // 组件属性
  props: {},
  // 组件数据
  data() {
    return {
      pieChartData: [
        {
          name: '盗窃警情',
          color: ['#05fbe7', '#1bd3fe'],
          total: 0,
          data: [
            {
              name: '未研判',
              value: '0'
            },
            {
              name: '已研判',
              value: '0'
            }
          ]
        },
        {
          name: '损毁公私财物',
          color: ['#ffd47a', '#ffa14c'],
          total: 0,
          data: [
            {
              name: '未研判',
              value: '0'
            },
            {
              name: '已研判',
              value: '0'
            }
          ]
        },
        {
          name: '电网诈',
          color: ['#85ffb8', '#0bfb8b'],
          total: 0,
          data: [
            {
              name: '未研判',
              value: '0'
            },
            {
              name: '已研判',
              value: '0'
            }
          ]
        },
        {
          name: '涉黑恶',
          color: ['#ae8aff', '#eb8bfc'],
          total: 0,
          data: [
            {
              name: '未研判',
              value: '0'
            },
            {
              name: '已研判',
              value: '0'
            }
          ]
        }
      ],
      pictorialBarChartData: [
        {
          name: '涉稳',
          value: 0
        },
        {
          name: '侵财',
          value: 4
        },
        {
          name: '涉黑恶',
          value: 0
        },
        {
          name: '肇事肇祸精神',
          value: 0
        },
        {
          name: '监所释放',
          value: 0
        },
        {
          name: '其他',
          value: 0
        },
      ],
      barChartData: [
        {
          name: '涉稳',
          total: 0,
          unit: '条',
          name2: '见面核查',
          value: 0,
          unit2: '人'
        },
        {
          name: '侵财关注',
          total: 4,
          unit: '条',
          name2: '见面核查',
          value: 2,
          unit2: '人'
        },
        {
          name: '侵财管控',
          total: 0,
          unit: '条',
          name2: '见面核查',
          value: 0,
          unit2: '人'
        },
        {
          name: '打击处理',
          total: 0,
          unit: '条',
          name2: '见面核查',
          value: 0,
          unit2: '人'
        },
        {
          name: '涉黑恶',
          total: 0,
          unit: '条',
          name2: '见面核查',
          value: 0,
          unit2: '人'
        },
        {
          name: '肇事肇祸精神病',
          total: 0,
          unit: '条',
          name2: '见面核查',
          value: 0,
          unit2: '人'
        },
      ],
      radarChartData: [
        {
          text: '损毁公私财物',
          max: 100,
          value: 19.2
        },
        {
          text: '电话诈骗',
          max: 100,
          value: 15.8
        },
        {
          text: '网络诈骗',
          max: 100,
          value: 15.8
        },
        {
          text: '涉黑恶',
          max: 100,
          value: 0
        },
        {
          text: '其他盗窃',
          max: 100,
          value: 26.9
        },
        {
          text: '盗窃车内财物',
          max: 100,
          value: 0
        },
        {
          text: '盗窃三车',
          max: 100,
          value: 0
        },
        {
          text: '入室盗窃',
          max: 100,
          value: 7.7
        },
      ],
      pie3DChart1Data: [
        {
          name: 'A',
          total: 0,
          data: [
            ['未办结', 0],
            ['已办结', 0],
          ]
        },
        {
          name: 'B',
          total: 0,
          data: [
            ['未办结', 0],
            ['已办结', 0],
          ]
        },
        {
          name: 'C',
          total: 11,
          data: [
            ['未办结', 8],
            ['已办结', 3],
          ]
        }
      ],
      pie3DChart2Data: [
        {
          color: ['#ab84ff', '#00abf5'],
          data: [
            ['未办结', 9],
            ['已办结', 3],
          ]
        },
        {
          color: ['#36e3a8', '#00abf5'],
          data: [
            ['未抓获', 7],
            ['已抓获', 4],
          ]
        },
      ]
    }
  },
  // 组件过滤器
  filters: {},
  // 组件计算属性
  computed: {},
  // 组件挂载
  components: {
    topheader,
    pieChart,
    pictorialBarChart,
    barChart,
    radarChart,
    pie3DChart1,
    pie3DChart2
  },
  // 钩子函数
  beforeCreate() {
  },
  mounted() {
  },
  destroyed() {
  },
  watch: {},
  methods: {
  },
}
</script>

<style lang="scss" type="text/scss" scoped>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
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
  .home {
    width: 100%;
    height: 100%;
    overflow-y: hidden;
  }
  .C106_container {display: flex; flex-flow: wrap; height: calc( 100% - 11vh); width: 100%; padding: 0 1rem; overflow: hidden;}
  .I106_left, .I106_right {width: 50%; height: 100%; display: flex; flex-flow: wrap;}
  .I106_left {width: 49%; margin-right: 1%;}
  .I106_top {height: 3rem; width: 100%; display: flex;}
  .I106_title {height: 100%; display: flex; align-items: center; justify-content: center; width: 15rem; background: url(~@/assets/images/06/I106_bg1.png) no-repeat center bottom; background-size: 100% auto; font-size: 1.3rem; color: #ffffff;}
  .I106_title2 {margin-left: auto;}
  .I106_content {width: 100%; height: calc(100% - 3rem); display: flex; flex-flow: wrap;}
  .C106_box {position: relative;background: url('~@/assets/images/25/bac_img.png') no-repeat; background-size: 100% 100%;}
  .C106_boxInner {width: 100%; height: 100%; padding: 2% 5%;}
  .C106_top {height: 1.9rem; display: flex;}
  .C106_title {background: url(~@/assets/images/25/titleimg.png) no-repeat left bottom; background-size: auto 90%; display: flex; padding: 0 1.2rem; min-width: 8rem; height: 100%; color: #ffffff; font-size: 1rem;}
  .C106_boxContent {height: calc(100% - 1.9rem);}
  .I106_dryxjq {width: 46%; height: 38%;}
  .I106_dryxjqTotal {display: flex; height: 25%; justify-content: center; align-items: center;}
  .I106_dryxjqTotalName {font-size: 0.9rem; color: #ffffff; margin-right: 1rem;}
  .I106_dryxjqTotalValue {display: flex;
    &>div {display: flex; align-items: center; justify-content: center; background-color: #0e496b; border: 2px solid #2adadb; padding: 0 0.3rem; height: 80%; font-size: 2.1rem;color: #ffffff; font-family: 'DS-DIGI'; margin: 0 3%; border-radius: 0.25rem;}
    &:hover>div {color: #15bd99;}
  }
  .I106_dryxjqList {height: 75%; display: flex; align-items: center; flex-flow: wrap; justify-content: space-between;
    &>li {height: 47%; width: 30%;
      &:hover>div {color: #15bd99;}
    }
  }
  .I106_dryxjqNumber {background: url(~@/assets/images/06/I106_bg2.png) no-repeat center center; background-size: auto 100%; height: 70.5%; display: flex; align-items: center; justify-content: center; color: #ffffff; font-family: 'DS-DIGI'; font-size: 1.5rem;}
  .I106_dryxjqName {background: url(~@/assets/images/06/I106_bg3.png) no-repeat; background-size: 100% 100%; height: 29.5%; display: flex; align-items: center; justify-content: center; color: #ffffff; font-size: 0.8rem;}
  .I106_drbfwfjq {width: 53%; margin-left: 1%; height: 38%;}
  .I106_wfxs {width: 100%; height: 22%; margin-top: 1%;}
  .I106_wfxsContent {display: flex; height: 100%;}
  .I106_wfxsTotal {width: 22%; height: 100%;}
  .I106_wfxsTotalName {font-size: 0.9rem; color: #ffffff; display: flex; height: 50%; align-items: center; justify-content: center;}
  .I106_wfxsTotalValue {display: flex; justify-content: center;
    &>div {display: flex; align-items: center; justify-content: center; background-color: #0e496b; border: 2px solid #2adadb; padding: 0 0.3rem; height: 40%; font-size: 2.1rem;color: #ffffff; font-family: 'DS-DIGI'; margin: 0 3%; border-radius: 0.25rem;}
    &:hover>div {color: #15bd99;}
  }
  .I106_wfxsCharts {width: 78%; height: 100%; display: flex; justify-content: center;}
  .I106_wfxsChartOuter {width: 33.3%; height: 100%;}
  .I106_wfxsChartTop {height: 30%; display: flex; align-items: center;}
  .I106_wfxsChartTotal {color: #ffffff; font-size: 0.8rem;}
  .I106_wfxsChartNumber {color: #ffffff; font-size: 1.5rem; font-family: 'DS-DIGI';}
  .I106_wfxsChart {width: 100%; height: 70%;}
  .I106_tjglsl {width: 100%; height: 38%; margin-top: 1%;}
  .I106_yjzlqk {width: 100%; height: 50%;}
  .I106_yjzlqkContent {display: flex; height: 100%; align-items: center;}
  .I106_yjzlqkInfo {width: 42%; height: 90%; display: flex; align-items: center; flex-flow: wrap; justify-content: center;}
  .I106_yjzlqkItem {height: 28%; width: 80%; display: flex; align-items: center; justify-content: center;background: url(~@/assets/images/06/I106_bg4.png) no-repeat center center; background-size: 100% 100%;}
  .I106_yjzlqkItemInfo {text-align: center; width: 20%; margin-right: 10%;}
  .I106_yjzlqkItemIcon {width: 1.5rem;}
  .I106_yjzlqkItemName {color: #ffffff; font-size: 0.8rem;}
  .I106_yjzlqkItemNumber {font-family: 'DS-DIGI'; color: #ffffff; font-size: 2.5rem;}
  .I106_yjzlqkChart {width: 58%; height: 100%;}
  .I106_yjzgqk {width: 50%; height: 49%; margin-top: 1%;}
  .I106_sahjqk {width: 49%; height: 49%; margin-top: 1%; margin-left: 1%;}
  .I106_sahjqkContent {display: flex; align-items: center;}
  .I106_sphereOuter {width: 100%; height: 26vh; background: url(~@/assets/images/06/I106_sphere2.png) no-repeat center bottom; background-size: 100% auto; position: relative;}
  .I106_sphere {height: 16vh; background: url(~@/assets/images/06/I106_sphere1.png) no-repeat center bottom; background-size: auto 50%; position: absolute; left: 0; right: 0; top: 0; display: flex; justify-content: center; align-items: center; flex-flow: column;}
  .I106_sphereInfo {width: 100%; display: flex; align-items: center; justify-content: center; height: 3rem; z-index: 101;}
  .I106_sphereNumber {font-family: 'DS-DIGI'; font-size: 2.5rem; color: #ffffff;}
  .I106_sphereUnit {font-size: 0.8rem; color: #ffffff;}
  .I106_sphereName {font-size: 0.8rem; color: #ffffff; height: 1rem; width: 100%; display: flex; justify-content: center; align-items: center; z-index: 101;}
  .I106_sphereCircle {width: 24vh; height: 24vh; position: absolute; left: 0; right: 0; top: -4vh; margin: 0 auto; background: url(~@/assets/images/06/I106_circle2.png) no-repeat; background-size: 100% 100%; border-radius: 50%; transform: rotateX(80deg) rotateY(-8deg); z-index: 99;}
  .I106_sphereCircle2 {width: 24vh; height: 24vh; position: absolute; left: 0; right: 0; top: -4vh; margin: 0 auto; border-radius: 50%; background: url(~@/assets/images/06/I106_circle.png) no-repeat; background-size: 100% 100%; transform: rotateX(80deg) rotateY(-8deg); animation: sphereCircle 4s linear infinite; z-index: 99;}
  .I106_sphereHalf {height: 50%; position: absolute; left: 0; right: 0; top: 0; margin: 0 auto; z-index: 100; text-align: center;
    &>img {height: 100%;}
  }
  @keyframes sphereCircle {
    from {
      transform: rotateX(80deg) rotateY(-8deg) rotateZ(0);
    }
    to {
      transform: rotateX(80deg) rotateY(-8deg) rotateZ(-360deg);
    }
  }
  .I106_sahjqkInfo {position: absolute; width: 6rem; height: 4rem; background: url(~@/assets/images/06/I106_bg5.png) no-repeat center center; background-size: 100% 100%;}
  .I106_sahjqkInfo1 {right: 0; top: 35%;}
  .I106_sahjqkInfo2 {left: 0; top: 40%;}
  .I106_sahjqkInfo3 {left: 40%; top: 75%;}
  .I106_sahjqkInfoIcon {position: absolute; width: 0.6rem; height: 0.6rem; left: 28%; top: 30%;}
  .I106_sahjqkInfoValue {position: absolute; min-width: 100%; bottom: 30%; left: 25%; display: flex; align-items: center;}
  .I106_sahjqkInfoName {color: #ffffff; font-size: 0.8rem; margin-top: auto; background-image: linear-gradient(to bottom, #ffffff, #4aafb8);-webkit-background-clip:text;-webkit-text-fill-color:transparent; font-weight: bold;}
  .I106_sahjqkInfoNumber {font-size: 1.5rem; color: #00ff90; font-family: 'DS-DIGI'; margin: 0 0.2rem;}
  .I106_sahjqkInfoUnit {font-size: 0.8rem; color: #ffffff; margin-top: auto;}
  .I106_drbfwfjqCharts {display: flex; flex-flow: wrap; width: 100%; height: 100%;}
  .I106_drbfwfjqChartOuter {width: 50%; height: 50%;}
  .I106_drbfwfjqChartTitle {height: 1.5rem; display: flex; align-items: center;
    &>img {width: 0.5rem; height: 0.5rem; margin-right: 0.5rem;}
    &>span {color: #ffffff; font-size: 0.8rem;}
  }
  .I106_tjglslChartTitle {height: 1.5rem; display: flex; align-items: center;
    &>img {width: 0.5rem; height: 0.5rem; margin-right: 0.5rem;}
    &>span {color: #ffffff; font-size: 0.8rem;}
  }
  .I106_drbfwfjqChart {width: 100%; height: calc(100% - 1.5rem);}
  .I106_chart {width: 100%; height: 100%;}
  .I106_tjglslCharts {display: flex; width: 100%; height: 100%;}
  .I106_tjglslChart {width: 50%;}
  .I106_tjglslRight {width: 50%;}
  .I106_tjglslChartOuter {height: calc(100% - 1.5rem); display: flex; align-items: center; flex-flow: column;}
  .I106_tjglslChartContainer {height: 48%; width: 100%; background-color: rgba(3, 28, 72, .09); display: flex; align-items: center;}
  .I106_tjglslChartName {width: 13.7%; height: 57%; border-right: 1px solid #025274; display: flex; justify-content: center; align-items: center; font-size: 0.6rem; color: #ffffff;}
  .I106_tjglslChart2 {width: 32%; height: 100%;}
  .I106_tjglslChartTips {width: 50%; height: 100%; display: flex; flex-flow: column; align-items: center; justify-content: center;}
  .I106_tjglslChartTip {font-size: 0.8rem; color: #ffffff;}
  .I106_tjglslChartTip:before {content: ''; width: 1rem; height: 0.5rem; display: inline-block; margin-right: 0.5rem;border-radius: 0.5rem;}
  .I106_tjglslChartTip1:before {background-color: #00abf5;}
  .I106_tjglslChartTip2:before {background-color: #ba88ff;}
  .I106_tjglslChartTip3:before {background-color: #36e3a8;}
  .I106_tjglslChartNumber {font-size: 1.4rem; color: #00ff90; font-family: 'DS-DIGI'; margin-left: 1rem;}
</style>
