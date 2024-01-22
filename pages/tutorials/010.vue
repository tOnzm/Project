<template>
  <div >
    <div v-for="item in testapi" :key="item.id">
    <li>{{ item.title }}</li>
    </div>

  </div>
</template>

<script>
import testApi from '@/api/apiData/index.js'
export default {
  name: 'Page101',
  data(){
    return{
        testapi: [],
    }
  },
  mounted() {
    this.getdata()
  },
  methods: {
    async getdata() {
      try {
        const data = await testApi.getAll()
        console.log(data)
        this.testapi = data
      } catch (error) {}
    },
  },
}
</script>

<style lang="scss" scoped></style>
