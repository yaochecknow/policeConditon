<template>
  <div>
    <button @click="fetch1">请求1</button>
    <button @click="fetch2">请求2</button>
    <button @click="fetch3">请求3</button>
  </div>
</template>

<script>
import Axios, { AxiosConfig } from '@/services/axios'

export default {
  name: 'AxiosTestPage',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {
    async fetch1() {
      const res = await Axios(
        new AxiosConfig({
          method: 'POST',
          url: '/login/setSuccess',
          data: {
            id: 3
          }
        })
      )
      console.log(res)
    },
    async fetch2() {},
    async fetch3() {}
  }
}
</script>

<style lang="scss" scoped>
</style>
