/*
 * @Author: Cphayim
 * @Date: 2019-05-13 00:52:43
 * @LastEditTime: 2020-05-19 11:11:54
 * @Description: 入口文件
 */

import Vue from 'vue'
// 导入所有全局样式文件（保证所有全局样式在组件样式之前，需要在 App.vue 之前导入）
import '@/assets/scss'
import './assets/font/iconfont.css'
import {
  registerPlugins
} from '@/plugins'
import {
  registerDirectives
} from '@/directives'
import {
  registerFilters
} from '@/filters'
import {
  registerEventBus
} from '@/utils/event-bus'

import router from '@/router'
import store from '@/store'
import App from '@/App.vue'
import highcharts from 'highcharts'

import VueHighCharts from 'vue-highcharts'

import highcharts3d from 'highcharts/highcharts-3d'

Vue.use(VueHighCharts)
highcharts3d(highcharts)

Vue.config.productionTip = false

// 注册所有插件
registerPlugins(Vue)
// 注册全局指令
registerDirectives(Vue)
// 注册全局过滤器
registerFilters(Vue)
// 注册 EventBus
registerEventBus()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
