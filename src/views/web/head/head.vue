/**
*
* Author: louhx
* CreatDate: 2020-01-06
*
*/
<template>
  <div class="H125_headBD">
    <div class="H125_headBox">
      <div class="a25_pointer H125_meno">
        <i class="iconfont lou_icontoggle"></i>
        <span>菜单</span>
        <div class="H124_menu">
          <ul>
            <li v-for="item in menuData" :key="item.index">
              <div class="H124_menu_par">{{item.name}}</div>
              <div class="H124_menu_child">
                <div class="H124_menu_guide">{{item.name}}</div>
                <div class="H124_menu_c_list">
                  <ul>
                    <li
                      v-for="childItem in item.childmenu"
                      :key="childItem.index"
                      :url="childItem.linkurl"
                    >
                      <a :href="'http://50.78.138.3/Jump.aspx?uid='+childItem.linkurl">{{childItem.name}}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="H125_title">{{title}}</div>
      <div class="H125_peo">
        <i class="iconfont lou_iconrenyuan"></i>
        <span>欢迎你！</span>
        <span>{{ time }}</span>
        <i class="iconfont lou_iconguanji"></i>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { homeAPI } from '@/apis'
export default {
  name: '',
  components: {},
  props: {
    title: {
      type: String,
      default: () => {
        return '全要素警情链多维赋能系统'
      }
    }
  },
  data() {
    return {
      time: '',
      menuData: [],
    }
  },
  created() {},
  beforeCreate() {
    setInterval(() => {
      this.time = moment()
        .locale('zh-cn')
        .format('YYYY-MM-DD HH:mm:ss')
    }, 1000)
  },
  mounted() {
    this.menuDataGet()
  },
  methods: {
    async menuDataGet() {
      let loginname = this.$route.query.loginname
      this.menuData = await homeAPI.menuReq(loginname)
    },
  },
  watch: {},
}
</script>

<style lang='scss' scoped type='text/scss'>
/* 头组件css start */

.H125_headBD {
  width: 100%;
  height: 10vh;
  // background: #000;
  background: url('~@/assets/images/25/title.png') no-repeat;
  background-size: 100% auto;
  .H125_headBox {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 65%;
    align-items: center;
    color: #01c7d9;
    /* 设置文字不可选中 start */
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    /* 设置文字不可选中 end */
    .H125_meno {
      margin-left: 40px;
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      .H124_menu {
        position: absolute;
        z-index: 10;
        background-color: rgba(6, 48, 79, 0.7);
        box-sizing: border-box;
        width: 14vw;
        left: -40px;
        top: 100%;
        display: none;
        ul {
          margin: 0;
          padding: 0;
          li:hover {
            .H124_menu_child {
              display: block;
            }
          }
          a{
            color: #ffffff;
            text-decoration: none;
          }
          a:hover{
            color: #03ddf0;
          }
        }
        .H124_menu_par {
          width: 100%;
          display: flex;
          color: #ffffff;
          background: url('~@/assets/images/24/left.png') no-repeat;
          background-position: 90% center;
          background-size: 0.6vw 1.8vh;
          font-size: 0.9vw;
          height: 6vh;
          align-items: center;
          padding-left: 40px;
          box-sizing: border-box;
        }
        .H124_menu_par:hover {
          color: #03ddf0;
        }
        .H124_menu_child {
          position: absolute;
          height: 100%;
          left: 14vw;
          border-left: none;
          width: 14vw;
          top: -1px;
          box-sizing: border-box;
          display: none;
          .H124_menu_guide {
            height: 6vh;
            width: 100%;
            box-sizing: border-box;
            padding-left: 40px;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #2b6177;
            color: #ffffff;
            background-color: rgba(6, 48, 79, 0.7);
            border-right: 1px solid #0e638c;
            border-top: 1px solid #0e638c;
            cursor: auto;
          }
          .H124_menu_c_list {
            border-bottom: 1px solid #0e638c;
            border-right: 1px solid #0e638c;
            background-color: rgba(6, 48, 79, 0.7);
          }
          .H124_menu_c_list li {
            height: 5vh;
            display: flex;
            align-items: center;
            box-sizing: border-box;
            padding-left: 40px;
            color: #ffffff;
          }
          .H124_menu_c_list li:hover {
            color: #03ddf0;
          }
        }
        li {
          list-style: none;
        }
      }
    }
    .H125_meno:hover {
      .H124_menu {
        display: block;
        border: 1px solid #148fbd;
      }
    }
    .H125_title {
      position: absolute;
      left: 0;
      right: 0;
      max-width: 50%;
      margin: 0 auto;
      text-align: center;
      color: #fff;
      font-size: 2.2vw;
      font-family: 'zihun35hao';
    }
    .H125_peo {
      i {
        margin: 0 10px;
        font-size: 1.2vw;
        cursor: pointer;
      }
    }
  }
}
</style>
