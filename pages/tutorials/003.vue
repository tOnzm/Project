<template>
  <v-row>
    <v-col md="12" cols="12"
      ><h1>{{ $route.params.title }}</h1></v-col
    >
    <v-col cols="12">
      <h2>Alert()</h2>
    </v-col>
    <v-col cols="2">
      <!-- วิธีที่ 1 -->
      <v-btn block @click="clickMe">Alert 1</v-btn>
    </v-col>
    <v-col cols="2">
      <!-- วิธีที่ 2 -->
      <v-btn block @click="clickMe2('วิธีที่ 2')">Alert 2</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Tutorials003',

  data() {
    return {}
  },

  methods: {
    clickMe() {
      alert('วิธีที่ 1')
    },
    clickMe2(message) {
      alert(message)
    },
  },
}
</script>

<style lang="scss" scoped>
.code {
  background-color: $gray;
  width: 500px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}
</style>
