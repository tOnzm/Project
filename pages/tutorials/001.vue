<template>
  <v-row>
    <v-col md="12" cols="12"
      ><h1>{{ $route.params.title }}</h1></v-col
    >
    <v-col md="12" cols="12"
      ><h3>{{ count }}</h3></v-col
    >
    <v-col md="12" cols="12"
      ><v-btn @click="onClickCount">กดสิ</v-btn>
      <v-btn @click="count = 0">รีเซ็ต</v-btn></v-col
    >
    <br />
    <v-col md="6" cols="6">
      <NuxtLink to="/">
        <v-btn block>ย้อนกลับ</v-btn>
      </NuxtLink>
    </v-col>
    <v-col md="6" cols="6">
      <NuxtLink to="/toturials/002">
        <v-btn block @click="onClickNext">หน้าถัดไป</v-btn>
      </NuxtLink>
    </v-col>
    {{ nextPage }}
  </v-row>
</template>

<script>
export default {
  name: 'Tutorials001',
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    onClickCount() {
      this.count = this.count + 1
    },
  },
}
</script>

<style lang="scss" scoped></style>
