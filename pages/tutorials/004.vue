<template>
  <v-row>
    <v-col md="12" cols="12"
      ><h1>{{ title }}</h1></v-col
    >
    <v-row>
      <v-col v-for="(item, index) in datas" :key="index" class="data" cols="12">
        {{ index }}
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
export default {
  name: 'Tutorials004',
  data() {
    return {
      datas: ['A', 'B', 'C', 'D'],
    }
  },
  computed: {
    title() {
      return this.$route.params.title
    },
  },
}
</script>

<style lang="scss" scoped>
.data {
  padding: 1rem;
}
</style>
