<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="12">
      <h1>VUE JS</h1>
      <v-row>
        <v-col v-for="item in units" :key="item.id" cols="6" md="3">
          <NuxtLink :to="{ name: item.name, params: { title: item.title } }">
            <div class="unitTitle">
              <h3>เรื่องที่ {{ item.id }}</h3>
              <h4>{{ item.title }}</h4>
            </div>
          </NuxtLink>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      units: [
        {
          title: 'Interpolation and Click Event Listener',
          id: 1,
          to: '/tutorials/001',
          name: 'tutorials-001',
        },
        {
          title: '2 Ways Binding with v-model สำหรับอ่าน Input',
          id: 2,
          to: '/tutorials/002',
          name: 'tutorials-002',
        },
        {
          title: '#3 Interpolation and Click Event Listener',
          id: 3,
          to: '/tutorials/003',
          name: 'tutorials-003',
        },
        {
          title: '#4 Interpolation and Click Event Listener',
          id: 4,
          to: '/tutorials/004',
          name: 'tutorials-004',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.unitTitle {
  color: $black;
  font-weight: 800;
}
.unitTitle:hover {
  color: $gray;
}
</style>
