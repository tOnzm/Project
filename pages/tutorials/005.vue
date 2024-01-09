<template>
  <div>
    <h1>Binding CSS Class and Style</h1>
    <h2>Binding :Style</h2>
    <h4>:style="isActive ? styleObj : ' '"</h4>

    <div class="box" :style="isActive ? styleObj : ' '">ทดสอบ</div>
    <v-btn @click="isActive = !isActive">Active</v-btn>
  </div>
</template>

<script>
export default {
  name: 'Tutorials005',
  data() {
    return {
      styleObj: {
        color: '#754',
        fontWeight: '900',
      },
      isActive: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.box {
  font-size: 2rem;
  color: $black;
}
</style>
