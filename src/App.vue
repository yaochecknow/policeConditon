<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import './App.scss'

export default {
  name: 'App',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>
<style lang='scss' scoped type='text/scss'>
::-webkit-scrollbar {
  width: 7px;
  height: 10px;
}
/* 滚动条的滑块 */
::-webkit-scrollbar-thumb {
  background-color: #a1a3a9;
  border-radius: 3px;
}
</style>
