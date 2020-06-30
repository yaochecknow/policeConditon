<!--
 * Author: wsp
 * CreatDate: 2020-06-02
 *
 -->
<template>
  <div class="home">
    <topheader :title="'指挥调度岗'"></topheader>
    <div class="C106_container">
      <div class="C106_box">
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
      </div>
      <div class="C106_box">
        <div class="C106_boxInner">
          <div class="C106_top">
            <div class="C106_title">当日警情</div>
          </div>
          <div class="C106_boxContent">
            <ul class="C106_list">
              <li class="C106_listInfo1">
                <div class="C106_listInfo">J3205836620060800027 其他群众求助</div>
                <div class="C106_listDate">2020-06-08 16:17:18</div>
              </li>
              <li class="C106_listInfo2">
                <div class="C106_listInfo">J3205836620060800025 其他纠纷</div>
                <div class="C106_listDate">2020-06-08 15:04:07</div>
              </li>
              <li class="C106_listInfo3">
                <div class="C106_listInfo">J3205836620060800024 其他纠纷</div>
                <div class="C106_listDate">2020-06-08 13:49:17</div>
              </li>
              <li class="C106_listInfo4">
                <div class="C106_listInfo">J3205836620060800023 其他群众求助</div>
                <div class="C106_listDate">2020-06-08 13:48:52</div>
              </li>
              <li class="C106_listInfo4">
                <div class="C106_listInfo">J3205836620060800022 中介纠纷</div>
                <div class="C106_listDate">2020-06-08 13:01:52</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="C106_box">
        <div class="C106_boxInner">
          <div class="C106_top">
            <div class="C106_title2">
              <div
                @click="changeItem(0)"
                :class="['C106_title2Item', itemCur === 0 ?'C106_title2Cur':'']"
              >重大警情</div>
              <div
                @click="changeItem(1)"
                :class="['C106_title2Item', itemCur === 1 ?'C106_title2Cur':'']"
              >关注警情</div>
            </div>
          </div>
          <div class="C106_boxContent">
            <ul v-if="itemCur===0" class="C106_list">
              <li class="C106_listInfo5">
                <div class="C106_listInfo">市政府门口上访市政府门口市政府门口上访市政府门口上访上访</div>
                <div class="C106_listDate">2020-05-11</div>
              </li>
              <li class="C106_listInfo5">
                <div class="C106_listInfo">市政府门口上访市政府门口市政府门口上访市政府门口上访上访</div>
                <div class="C106_listDate">2020-05-11</div>
              </li>
              <li class="C106_listInfo5">
                <div class="C106_listInfo">市政府门口上访市政府门口市政府门口上访市政府门口上访上访</div>
                <div class="C106_listDate">2020-05-11</div>
              </li>
              <li class="C106_listInfo6">
                <div class="C106_listInfo">市政府门口上访市政府门口市政府门口上访市政府门口上访上访</div>
                <div class="C106_listDate">2020-05-11</div>
              </li>
              <li class="C106_listInfo6">
                <div class="C106_listInfo">市政府门口上访市政府门口市政府门口上访市政府门口上访上访</div>
                <div class="C106_listDate">2020-05-11</div>
              </li>
            </ul>
            <ul v-else class="C106_list">
              <li class="C106_listInfo5" v-for="item in gzjqMes" :key="item.index">
                <div class="C106_listInfo">{{item.jqbh+item.bjlx}}</div>
                <div class="C106_listDate">{{item.jjrqsj}}</div>
              </li>
              <!-- <li class="C106_listInfo5">
                <div class="C106_listInfo">阳光水世界有大火发生</div>
                <div class="C106_listDate">2020-05-11</div>
              </li>
              <li class="C106_listInfo5">
                <div class="C106_listInfo">侵财人员待维护 8 条</div>
                <div class="C106_listDate">2020-05-11</div>
              </li>
              <li class="C106_listInfo6">
                <div class="C106_listInfo">侵财人员待维护 8 条</div>
                <div class="C106_listDate">2020-05-11</div>
              </li>
              <li class="C106_listInfo6">
                <div class="C106_listInfo">阳光水世界有大火发生</div>
                <div class="C106_listDate">2020-05-11</div>
              </li>-->
            </ul>
          </div>
        </div>
      </div>
      <div class="C106_box">
        <div class="C106_boxInner">
          <div class="C106_top">
            <div class="C106_title">业务通知</div>
          </div>
          <div class="C106_boxContent">
            <div class="C106_ywtz">
              <div class="C106_ywtzCharts">
                <div class="C106_chartOuter C106_ywtzChart">
                  <pieChart
                    index="1"
                    width="100"
                    height="100"
                    :data="pieChartData[0]"
                    ref="piechart1"
                  ></pieChart>
                </div>
                <div class="C106_chartOuter C106_ywtzChart">
                  <pieChart
                    index="2"
                    width="100"
                    height="100"
                    :data="pieChartData[1]"
                    ref="piechart2"
                  ></pieChart>
                </div>
                <div class="C106_chartOuter C106_ywtzChart">
                  <pieChart
                    index="3"
                    width="100"
                    height="100"
                    :data="pieChartData[2]"
                    ref="piechart3"
                  ></pieChart>
                </div>
              </div>
              <ul class="C106_ywtzList">
                <li v-for="item in ywtzMes" :key="item.index">
                  <img src="@/assets/images/06/C106_icon7.png" class="C106_ywtzIcon" />
                  <img src="@/assets/images/06/C106_line2.png" class="C106_ywtzLine" />
                  <div class="C106_ywtzInfo">{{item.title}}</div>
                  <div class="C106_ywtzDate">{{item.addtime}}</div>
                </li>
                <!-- <li>
                  <img src="@/assets/images/06/C106_icon7.png" class="C106_ywtzIcon" />
                  <img src="@/assets/images/06/C106_line2.png" class="C106_ywtzLine" />
                  <div class="C106_ywtzInfo">关于《5.22 美吉特维稳处置审查办案组》上报办案民警名单的通知</div>
                  <div class="C106_ywtzDate">2020-05-22</div>
                </li>
                <li>
                  <img src="@/assets/images/06/C106_icon7.png" class="C106_ywtzIcon" />
                  <img src="@/assets/images/06/C106_line2.png" class="C106_ywtzLine" />
                  <div class="C106_ywtzInfo">美吉利特“2020.05.22”警力初步调动方案</div>
                  <div class="C106_ywtzDate">2020-05-21</div>
                </li>-->
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="C106_box">
        <div class="C106_boxInner">
          <div class="C106_top">
            <div class="C106_title">警情七日走势</div>
            <div class="C106_tips">
              <div class="C106_tip C106_tip1">非违法警情</div>
              <div class="C106_tip C106_tip2">违法警情</div>
            </div>
          </div>
          <div class="C106_boxContent">
            <div class="C106_chartOuter">
              <lineChart1 index="1" width="100" height="100" :data="lineChartData"></lineChart1>
            </div>
          </div>
        </div>
      </div>
      <div class="C106_box">
        <div class="C106_boxInner">
          <div class="C106_top">
            <div class="C106_title">处警七日走势</div>
          </div>
          <div class="C106_boxContent">
            <div class="C106_chartOuter">
              <lineChart2 index="1" width="100" height="100" :data="lineChartData2"></lineChart2>
            </div>
          </div>
        </div>
      </div>
      <div class="C106_box">
        <div class="C106_boxInner">
          <div class="C106_top">
            <div class="C106_title">协作备勤</div>
          </div>
          <div class="C106_boxContent">
            <div class="C106_xzbq">
              <div class="C106_xzbqLeft">
                <div class="C106_xzbqTotal">
                  <div class="C106_xzbqTotalName">事件总数</div>
                  <div class="C106_xzbqTotalValue">
                    <div>{{xzbqData}}</div>
                  </div>
                </div>
                <div class="C106_xzbqCharts">
                  <div class="C106_xzbqChart">
                    <div class="C106_chartOuter C106_chartOuter1">
                      <liquidFillChart index="1" width="100" height="100" :data="liquidFillChart1"></liquidFillChart>
                    </div>
                    <div class="C106_xzbqChartName">签收率(%)</div>
                  </div>
                  <div class="C106_xzbqChart">
                    <div class="C106_chartOuter C106_chartOuter2">
                      <liquidFillChart index="2" width="100" height="100" :data="liquidFillChart2"></liquidFillChart>
                    </div>
                    <div class="C106_xzbqChartName">反馈率(%)</div>
                  </div>
                </div>
              </div>
              <img class="C106_line" src="@/assets/images/06/C106_line.png" alt />
              <div class="C106_xzbqRight">
                <ul class="C106_xzbqList">
                  <li v-for="(item,index) in xzbqMes" :key="item.index">
                    <div class="C106_xzbqNumber">{{index+1}}</div>
                    <div class="C106_xzbqInfo">{{item.sjbh+item.bjlx}}</div>
                    <div class="C106_xzbqDate">{{item.sjtime}}</div>
                  </li>
                  <!-- <li>
                    <div class="C106_xzbqNumber">2</div>
                    <div class="C106_xzbqInfo">文字列表文字列表文字列表文字列表</div>
                    <div class="C106_xzbqDate">05-11</div>
                  </li>
                  <li>
                    <div class="C106_xzbqNumber">3</div>
                    <div class="C106_xzbqInfo">文字列表文字列表文字列表文字列表</div>
                    <div class="C106_xzbqDate">05-11</div>
                  </li>
                  <li>
                    <div class="C106_xzbqNumber">4</div>
                    <div class="C106_xzbqInfo">文字列表文字列表文字列表文字列表</div>
                    <div class="C106_xzbqDate">05-11</div>
                  </li>
                  <li>
                    <div class="C106_xzbqNumber">5</div>
                    <div class="C106_xzbqInfo">文字列表文字列表文字列表文字列表</div>
                    <div class="C106_xzbqDate">05-11</div>
                  </li>-->
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="C106_box">
        <div class="C106_boxInner">
          <div class="C106_top">
            <div class="C106_title">竞赛组警情</div>
            <div class="C106_tips">
              <div class="C106_tip C106_tip3">电网诈</div>
              <div class="C106_tip C106_tip4">损毁公私财物</div>
              <div class="C106_tip C106_tip5">违法警情</div>
            </div>
          </div>
          <div class="C106_boxContent">
            <div class="C106_jszjq">
              <div class="C106_chartOuter C106_jszjqChart">
                <div class="C106_jszjqName">{{pie3DData[0].name}}</div>
                <pie3D index="1" width="100%" height="100" :data="pie3DData[0]"></pie3D>
              </div>
              <div class="C106_chartOuter C106_jszjqChart C106_jszjqChart2">
                <div class="C106_jszjqName">{{pie3DData[1].name}}</div>
                <pie3D index="2" width="100%" height="100" :data="pie3DData[1]"></pie3D>
              </div>
              <div class="C106_chartOuter C106_jszjqChart">
                <div class="C106_jszjqName">{{pie3DData[2].name}}</div>
                <pie3D index="3" width="100%" height="100" :data="pie3DData[2]"></pie3D>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="C106_box">
        <div class="C106_boxInner">
          <div class="C106_top">
            <div class="C106_title">周边派出所警情</div>
          </div>
          <div class="C106_boxContent">
            <div class="C106_zbpcs">
              <div class="C106_zbpcsInfo C106_zbpcsInfo1">
                <div class="C106_zbpcsInfoNumber">{{zbpcs[0].num}}</div>
                <div class="C106_zbpcsInfoName">{{zbpcs[0].dw}}</div>
              </div>
              <div class="C106_zbpcsInfo C106_zbpcsInfo2">
                <div class="C106_zbpcsInfoNumber">{{zbpcs[1].num}}</div>
                <div class="C106_zbpcsInfoName">{{zbpcs[1].dw}}</div>
              </div>
              <div class="C106_zbpcsInfo C106_zbpcsInfo3">
                <div class="C106_zbpcsInfoNumber">{{zbpcs[2].num}}</div>
                <div class="C106_zbpcsInfoName">{{zbpcs[2].dw}}</div>
              </div>
              <div class="C106_zbpcsInfo C106_zbpcsInfo4">
                <div class="C106_zbpcsInfoNumber">{{zbpcs[3].num}}</div>
                <div class="C106_zbpcsInfoName">{{zbpcs[3].dw}}</div>
              </div>
              <div class="C106_zbpcsCenter">
                <div class="C106_zbpcsCenterInner">
                  <div class="C106_zbpcsInfoNumber">{{zbpcs[4].num}}</div>
                  <div class="C106_zbpcsInfoName">{{zbpcs[4].dw}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { homeAPI, commandAPI } from '@/apis'
import topheader from '../head/head'
import lineChart1 from './body/lineChart1'
import lineChart2 from './body/lineChart2'
import liquidFillChart from './body/liquidFillChart'
import pie3D from './body/pie3D'
import pieChart from './body/pieChart'
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
      xzbqData: 1, // 协作备勤总数
      xzbqMes: [], // 协作备勤右侧数据
      ywtzMes: [], // 业务通知数组
      gzjqMes: [],
      policeData: [], // 派出所数据
      leaderData: [], // 市局领导
      zbpcs: [], // 周边派出所警情
      itemCur: 0,
      lineChartData: [
        // {
        //   date: '05-30',
        //   value: 38,
        //   value2: 3,
        // },
        // {
        //   date: '05-31',
        //   value: 42,
        //   value2: 2,
        // },
        // {
        //   date: '06-01',
        //   value: 40,
        //   value2: 2,
        // },
        // {
        //   date: '06-02',
        //   value: 57,
        //   value2: 3,
        // },
        // {
        //   date: '06-03',
        //   value: 47,
        //   value2: 4,
        // },
        // {
        //   date: '06-04',
        //   value: 45,
        //   value2: 6,
        // },
        // {
        //   date: '06-05',
        //   value: 64,
        //   value2: 7,
        // },
      ],
      lineChartData2: [
        // {
        //   date: '05-30',
        //   value: 41,
        // },
        // {
        //   date: '05-31',
        //   value: 44,
        // },
        // {
        //   date: '06-01',
        //   value: 42,
        // },
        // {
        //   date: '06-02',
        //   value: 60,
        // },
        // {
        //   date: '06-03',
        //   value: 51,
        // },
        // {
        //   date: '06-04',
        //   value: 51,
        // },
        // {
        //   date: '06-05',
        //   value: 71,
        // },
      ],
      liquidFillChart1: {
        color: '#e8395c',
        value: 1,
      }, // 协作备勤签收率
      liquidFillChart2: {
        color: '#28d083',
        value: 1,
      }, // 协作备勤反馈率
      pie3DData: [
        {
          name: '中华园所',
          top: '25%',
          data: [
            ['电网诈', 4],
            ['损毁公私财物', 0],
            ['违法警情', 12],
          ],
        },
        {
          name: '同心所',
          top: '0',
          data: [
            ['电网诈', 3],
            ['损毁公私财物', 2],
            ['违法警情', 8],
          ],
        },
        {
          name: '科技园所',
          top: '25%',
          data: [
            ['电网诈', 1],
            ['损毁公私财物', 3],
            ['违法警情', 11],
          ],
        },
      ],
      pieChartData: [
        {
          name: '通知总数',
          value: 4,
          color: ['#00fec8', '#00fec8'],
          percent: 34,
          icon:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAfCAYAAAAWRbZDAAACfUlEQVRIibXWT8hVRRjH8c+9x0qNIlCUNi5cNMFLm4J3ETgqFIJhmlGUtEqlRYGhERIE2saNVEgEpbbUINSK/pCLyBNFmW7ERYcIN7lKwT9RghxtMXN5b3K895z3vf02M/PMmec755yZ53l6/V9P6KhV2IpTeKcOsfXCeR1Bj+N47m/CFLa0XdzvCDuQ29dwEpuLqgyThj2Bb7Asj/diOvdPFlW5rY2TXot/tt/Mp/oZX+IcFmElnspzFdbVIf42W9gPeBRfYyfONDxzL17F7jyerkP8pcnZqM/4RQbtwdrbgNQhXqlDfAurs+nHoioXdYGtl/7T53hjxIaGod9hjXTCj3aBfTgEba06xOP4CrGoyulb55tgEUvwURfQkF7J7ettYKty+/5sSHWI53AeG9vAHsvt6dnAsk6hV1Tl3eNgS+YAGehybsfC6gnAek3GJljXeDkKdnOc48ZdzVI3xsEmoQVQh3hxFOxJBFyaI+xPKKry3dvBXsZnuIAVc4S9KQXvbUVVHrsV9izeky7jFM7OhVSHeKEOca2UbDcUVfkpKcXMxz/4C0vxd0fHI+eLqjyIF7Gpj5ey/YWuoJab2Zy72/tS4IWfJg0a0nUs60vZGB7+H2F34HwfH2TDYZOJi/9RUZWDVLV3UIM8j0PZeAQXzUSSPq5Jh2gh7pIiQ08KR5el7HyPmfB0M69bj8U4Voe4cVCkHpbu1z48PcEXu4rddYi7aK6u7sR9ZqL/dTwj3Zm3sWPo2Uek3PWtlCyLbC9wrQ7x6rDjNnXjQL9jOZ7DCdyPj/EAHqpDHBsIutT6K/F9BgxrSxtQV9gfeFCqjqekQ/RJHWJjPdmkfwFTyZ5ECeNITAAAAABJRU5ErkJggg==',
        },
        {
          name: '签收率(%)',
          value: 0,
          color: ['#ffb50a', '#ffb50a'],
          percent: 0,
          icon:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAYCAYAAADkgu3FAAACDklEQVRIibXWO2gUURTG8d8+QOIjCGqjgtg4oKiFFoIwraKVBAuLFIIYBAk+WgsbC1EIGASjjYiIWFhYaaerlRYipHCxEXzgI0qCDxJ0shZz1x3XndlNjB9c7p05Z+7/njl35txS+fkDBXqEa7ic55BEsUq9tgunsTuJ4qlOfuUiCnZicxcfWIsdaOQ5lEJEZ7EngBuhlbERn/C2YFGzWIHVeIEZlEKDhzhexS3sx7vwUCkDgj6s7BLRktAvx88wbkY3hK3VALmNgQ4TNKQ5OpJHCDkawiVsSKJ4Mmuv1GvncbK56omcea7iblEoQU9xHd872D5DNVz05UxwsAeIJIofYzDH3EcrDx235AJpgjSiaezFMt23+1+q1GtF5llsw3RVuh3Xh/a/NFVGP26G/l9aNYniEpa23T+H/qr0u/mKL/NZahLFv8eVem1VEsUfs/ZKvTaJUjMni+YDaZvwBj5U6rX2FCxmHsnPgYziAMbwvpNPtdPNOULGcBhnkig+ledXFNEmPAt9nq4EyMUiSDfQN2zBONZ1sI/gEEaTKD5aBOkGeimtM7NhvL0Nckz6uoa7QbqB4I1WNE8Q40KAjKDwdWXVy2Z4La2y99Gs+2M40SskC8otwUHjWCOtXa8ywF7UyIJ6+SvMSGvOXPVHPRrAHfwwx4+44O/dPA4MNkH7pOeGe1pnhoVQ9twx/AvGu4DRwfLPPQAAAABJRU5ErkJggg==',
        },
        {
          name: '反馈率(%)',
          value: 0,
          color: ['#4e90ff', '#12dbff'],
          percent: 0,
          icon:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAACKElEQVRIibXWy2sVVxgA8N/NZOMDHwv7D6jMqnRnC+pJmiCYqrSlj0Rtoe7diejWnSC0C9GdC8WSRMRCHypCjRlFWiquMyB0IaVEfGQreoyLOWOGgLkv/eByv/Nd5vvNnXPPObc1MDe7CtPYp/fYFPPwuB5kZXEen+NEzMNPMIhrGMI9PEq1TqOFJ3jZQKYwnoY/ZmUxGPNwqjUwN7uIf7Ctl68S8/Amz8piGt/iBM7hJrbgeH33//WCNCMri8v4Kg1Xxzw8xNasLOZxsoZW94n8gi9wJvU6mpXFK1zAOrqbj7chVxIyFfNwONUijqUXjAz06VzCl5iOedjfqJ9t5CMxDzP9QL/hm4RM1MWsLLbjfhqOxjzM0Puj+xV7cXkZMoRbafhpzMOtrCy+xmgv0B/4DJM40ECGMdNEUn4En3QLXcUYppYhoYEMxzzMNq55Ct3MUY1cxJuJz8piBHXjsAyB2A1UIz/j+0Z9B/5M+VDMw+23NegEOp2QSXzXqH+MuvFozEOxUpNOoEPpPbe0g2zDXykfi3m42a5JO2gMa1Rz8CHuqtbO3+nzfTEP1zu42bbQBBaxS7Ujf6TaDWA3fu8EYeUFu1F19y0sWHps/+MH3OgUaQd9gFUpX1CdLzdUC3axG6QdVGInXliak56j3c5wp1+gjn6Pia6h5+/ReN6ENrxHaD20BuZmH2Cz6r/dM+/geE8RsRYHMT+IYdXPdnyFi/qJf7HnNZaBl89Vazt1AAAAAElFTkSuQmCC',
        },
      ],
    }
  },
  // 组件过滤器
  filters: {},
  // 组件计算属性
  computed: {},
  // 组件挂载
  components: {
    topheader,
    lineChart1,
    lineChart2,
    liquidFillChart,
    pie3D,
    pieChart,
  },
  // 钩子函数
  beforeCreate() {},
  mounted() {
    let dw = this.$route.query.dw
    this.leaderMesGet()
    this.policeMesGet(dw)
    this.xzbqGet(dw)
    this.gzjqGet(dw)
    this.jq7rGet(dw)
    this.ywtzGet(dw)
    this.cj7rGet(dw)
    this.jszjqGet(dw)
    this.zbjqGet(dw)
  },
  destroyed() {},
  watch: {},
  methods: {
    // 获取领导数据
    async leaderMesGet() {
      this.leaderData = await homeAPI.leaderReq()
    },
    // 获取派出所
    async policeMesGet(dw) {
      this.policeData = await homeAPI.PoliceReq(dw)
    },
    // 获取协作备勤
    async xzbqGet(dw) {
      let data = await commandAPI.xzbqReq(dw)
      this.xzbqData = data[0].total
      this.liquidFillChart1.value = parseInt(data[0].qsper) / 100
      this.liquidFillChart2.value = parseInt(data[0].fkper) / 100
      this.xzbqMes = data[0].bq
    },
    // 业务通知
    async ywtzGet(dw) {
      let data = await commandAPI.ywtzReq(dw)
      this.ywtzMes = data[0].tztb
      this.pieChartData[0].value = data[0].total
      this.pieChartData[1].percent = data[0].qsper
      this.pieChartData[1].value = data[0].qsper
      this.pieChartData[2].percent = data[0].fkper
      this.pieChartData[2].value = data[0].fkper
    },
    // 关注警情
    async gzjqGet(dw) {
      let data = await commandAPI.gzjqReq(dw)
      this.gzjqMes = data
    },
    // 警情七日
    async jq7rGet(dw) {
      let data = await commandAPI.jq7rReq(dw)
      this.lineChartData = data
    },
    // 处警七日
    async cj7rGet(dw) {
      let data = await commandAPI.cj7rReq(dw)
      this.lineChartData2 = data[0].cjlist
    },
    // 竞赛组警情
    async jszjqGet(dw) {
      let data = await commandAPI.jszjqReq(dw)
      data.forEach((element, index) => {
        this.pie3DData[index].name = element.dw
        this.pie3DData[index].data[0][1] = parseInt(element.dwz)
        this.pie3DData[index].data[1][1] = parseInt(element.gscw)
        this.pie3DData[index].data[2][1] = parseInt(element.num)
      })
      console.log(this.pie3DData)
    },
    // 周边警情
    async zbjqGet(dw) {
      let data = await commandAPI.zbjqReq(dw)
      this.zbpcs = data
      console.log(this.zbpcs)
    },
    changeItem(num) {
      this.itemCur = num
    },
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
.C106_container {
  display: flex;
  flex-flow: wrap;
  height: calc(100% - 11vh);
  width: 100vw;
  overflow: hidden;
}
.C106_box {
  width: 32.7%;
  margin: 0.3%;
  height: 32.7%;
  position: relative;
  background: url('~@/assets/images/25/bac_img.png') no-repeat;
  background-size: 100% auto;
}
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
.C106_boxInner {
  width: 100%;
  height: 100%;
  padding: 3% 5%;
}
.C106_top {
  height: 1.9rem;
  display: flex;
}
.C106_title {
  background: url(~@/assets/images/25/titleimg.png) no-repeat left bottom;
  background-size: auto 90%;
  display: flex;
  padding: 0 1.2rem;
  min-width: 8rem;
  height: 100%;
  color: #ffffff;
  font-size: 1.1rem;
}
.C106_boxContent {
  height: calc(100% - 1.9rem);
}
.C106_list {
  height: 100%;
  margin-left: 2%;
  background: rgba(12, 67, 101, 0.2);
  padding: 1% 2%;
  & > li {
    height: 20%;
    border-bottom: 1px dashed #277283;
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    &:before {
      content: '';
      display: block;
      width: 1.15rem;
      height: 1.15rem;
      margin-right: 0.8rem;
    }
  }
}
.C106_listInfo {
  color: #ffffff;
  font-size: 0.8rem;
  text-decoration: none;
  cursor: pointer;
  max-width: 60%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  &:hover {
    color: #15bd99;
  }
}
.C106_listInfo1:before {
  background: url(~@/assets/images/06/C106_icon1.png) no-repeat;
  background-size: 100% 100%;
}
.C106_listInfo2:before {
  background: url(~@/assets/images/06/C106_icon2.png) no-repeat;
  background-size: 100% 100%;
}
.C106_listInfo3:before {
  background: url(~@/assets/images/06/C106_icon3.png) no-repeat;
  background-size: 100% 100%;
}
.C106_listInfo4:before {
  background: url(~@/assets/images/06/C106_icon4.png) no-repeat;
  background-size: 100% 100%;
}
.C106_listInfo5:before {
  background: url(~@/assets/images/06/C106_icon5.png) no-repeat;
  background-size: 100% 100%;
}
.C106_listInfo6:before {
  background: url(~@/assets/images/06/C106_icon6.png) no-repeat;
  background-size: 100% 100%;
}
.C106_listDate {
  color: #ffffff;
  margin-left: auto;
}
.C106_title2 {
  background: url(~@/assets/images/24/long_ti.png) no-repeat;
  background-size: 100% 100%;
  width: 13.3rem;
  height: 100%;
  font-size: 1.1rem;
  display: flex;
  & > .C106_title2Item:first-child:before {
    border-left: none;
  }
}
.C106_title2Item {
  width: 50%;
  display: flex;
  height: 100%;
  justify-content: center;
  color: #a5b1ba;
  cursor: pointer;
  position: relative;
  &:before {
    content: '';
    display: inline-block;
    width: 0;
    height: 0.9rem;
    border-left: 1px solid #2595bf;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-0.6rem);
  }
}
.C106_title2Cur {
  color: #ffffff;
  &:after {
    content: '';
    display: block;
    height: 3px;
    width: 60%;
    background-color: #21ddd9;
    bottom: 2px;
    left: 1.1rem;
    position: absolute;
  }
}
.C106_tips {
  margin-left: auto;
  height: 1.9rem;
  display: flex;
  align-items: center;
}
.C106_tip {
  color: #ffffff;
  font-size: 0.8rem;
  margin-left: 1rem;
}
.C106_tip:before {
  display: inline-block;
  width: 1.1rem;
  height: 0.3rem;
  border-radius: 0.15rem;
  margin-right: 0.5rem;
  content: '';
}
.C106_tip1:before {
  background-color: #06e6e8;
}
.C106_tip2:before {
  background-color: #ff6068;
}
.C106_tip3:before {
  background-color: #0fffbb;
}
.C106_tip4:before {
  background-color: #5192ff;
}
.C106_tip5:before {
  background-color: #fc9274;
}
.C106_chartOuter {
  width: 100%;
  height: 100%;
  padding-top: 5%;
}
.C106_chartOuter1 {
  background: url(~@/assets/images/06/C106_bg1.png) no-repeat center center;
  background-size: auto 100%;
  padding: 10% 0;
  height: 70%;
  margin-top: 10%;
}
.C106_chartOuter2 {
  background: url(~@/assets/images/06/C106_bg2.png) no-repeat center center;
  background-size: auto 100%;
  padding: 10% 0;
  height: 70%;
  margin-top: 10%;
}
.C106_xzbq {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
}
.C106_xzbqLeft {
  width: 45%;
  padding-right: 5%;
  height: 100%;
}
.C106_xzbqTotal {
  height: 40%;
}
.C106_xzbqTotalName {
  font-size: 0.9rem;
  color: #ffffff;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.C106_xzbqTotalValue {
  display: flex;
  justify-content: center;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #144663;
    border: 2px solid #42f4ba;
    font-size: 0.25rem;
    padding: 0 0.6rem;
    height: 60%;
    font-size: 2.1rem;
    color: #ffffff;
    font-family: 'DS-DIGI';
    margin: 0 3%;
  }
  &:hover > div {
    color: #15bd99;
  }
}
.C106_xzbqCharts {
  display: flex;
  height: 60%;
}
.C106_xzbqChart {
  height: 100%;
  width: 50%;
}
.C106_xzbqChartName {
  font-size: 0.9rem;
  display: flex;
  height: 20%;
  align-items: center;
  justify-content: center;
  color: #ffffff;
}
.C106_line {
  height: 80%;
}
.C106_xzbqRight {
  width: 55%;
  height: 100%;
}
.C106_xzbqList {
  height: 100%;
  padding: 0 5%;
  & > li {
    height: 20%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #17566d;
  }
}
.C106_xzbqNumber {
  color: #ffffff;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.2rem;
  height: 1.6rem;
  background: url(~@/assets/images/06/C106_bg3.png) no-repeat;
  background-size: 100% 100%;
  margin-right: 1rem;
}
.C106_xzbqInfo {
  color: #ffffff;
  max-width: 60%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.8rem;
  cursor: pointer;
  &:hover {
    color: #15bd99;
  }
}
.C106_xzbqDate {
  color: #ffffff;
  font-size: 0.8rem;
  margin-left: auto;
}
.C106_jszjq {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.C106_jszjqChart {
  width: 33%;
  background-image: url(~@/assets/images/06/C106_bg4.png);
  background-size: 80% 60%;
  position: relative;
  background-repeat: no-repeat;
  background-position: center 80%;
}
.C106_jszjqChart2 {
  background-position: center 45%;
}
.C106_jszjqName {
  position: absolute;
  left: 0;
  right: 0;
  top: 55%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #ffffff;
}
.C106_jszjqChart2 > .C106_jszjqName {
  top: 40%;
}
.C106_zbpcs {
  width: 100%;
  height: 100%;
  background: url(~@/assets/images/06/C106_bg5.png) no-repeat center center;
  background-size: contain;
  position: relative;
}
.C106_zbpcsCenter {
  position: absolute;
  width: 8vw;
  height: 8vw;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  background: url(~@/assets/images/06/C106_bg6.png) no-repeat;
  background-size: 100% 100%;
  transform: rotate(0);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: wrap;
}
@keyframes float {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
.C106_zbpcsInfo {
  height: 30%;
  width: 30%;
  display: flex;
  flex-flow: wrap;
  align-items: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
}
.C106_zbpcsInfo1 {
  background-image: url(~@/assets/images/06/C106_bg7.png);
  left: 0;
  top: 10%;
}
.C106_zbpcsInfo2 {
  background-image: url(~@/assets/images/06/C106_bg8.png);
  left: 70%;
  top: 10%;
}
.C106_zbpcsInfo3 {
  background-image: url(~@/assets/images/06/C106_bg9.png);
  left: 0;
  top: 60%;
}
.C106_zbpcsInfo4 {
  background-image: url(~@/assets/images/06/C106_bg10.png);
  left: 70%;
  top: 60%;
}
.C106_zbpcsCenterInner {
  height: 2.5rem;
}
.C106_zbpcsInfoNumber {
  color: #ffe42d;
  font-family: 'DS-DIGI';
  font-size: 1.3rem;
  width: 100%;
  display: flex;
  justify-content: center;
}
.C106_zbpcsInfoName {
  color: #ffffff;
  font-size: 0.7rem;
  width: 100%;
  display: flex;
  justify-content: center;
}
.C106_ywtz {
  width: 100%;
  height: 100%;
}
.C106_ywtzCharts {
  height: 60%;
  display: flex;
  justify-content: center;
}
.C106_ywtzChart {
  width: 30%;
  margin: 0 2%;
  height: 100%;
  padding-top: 0;
}
.C106_ywtzList {
  height: 40%;
  & > li {
    display: flex;
    height: 32%;
    align-items: center;
    margin-bottom: 1%;
    background-color: rgba(12, 62, 99, 0.29);
    border: 1px solid #0f4d64;
    border-radius: 0.1rem;
  }
}
.C106_ywtzIcon {
  width: 1.05rem;
  margin: 0 3%;
}
.C106_ywtzLine {
  height: 80%;
  width: 1px;
  margin-right: 3%;
}
.C106_ywtzInfo {
  color: #ffffff;
  max-width: 50%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.8rem;
  cursor: pointer;
  &:hover {
    color: #15bd99;
  }
}
.C106_ywtzDate {
  color: #ffffff;
  font-size: 0.8rem;
  margin-left: auto;
  margin-right: 3%;
}
</style>
