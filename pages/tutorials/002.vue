<template>
  <div>
    <h1>{{ $route.params.title }}</h1>
    <h2>V-MODEL</h2>
    <v-text-field v-model="message" clearable label="ป้อนข้อมูล"></v-text-field>
    <br />
    <h3>แสดงผล</h3>
    <div class="box">
      <h2>{{ message }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tutorials002',
  data() {
    return {
      message: '',
    }
  },
}
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100px;
  padding: 1rem;
  border-color: $black;
  border: solid 0.5px;
  border-radius: 10px;
}
</style>
