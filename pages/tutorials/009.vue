<!-- eslint-disable no-console -->
<template>
  <div>
    <ul>
      <li v-for="(item, index) in pokeData" :key="index">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Tutorials009',

  async asyncData({ $axios }) {
    try {
      const response = await $axios.$get('https://pokeapi.co/api/v2/pokemon')
      const pokeData = response.results
      return { pokeData }
    } catch (error) {
      return { pokeData: [] }
    }
  },

  data() {
    return {
      pokeData: [],
    }
  },
}
</script>

<style lang="scss" scoped></style>
