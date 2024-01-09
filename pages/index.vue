<template>
  <v-row>
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
      <v-row class="body">
        <v-col
          v-for="item in 8"
          :key="item"
          md="4"
          cols="6"
          sm="6"
          lg="3"
          class="fixtures"
        >
          <FixturesBox item />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import FixturesBox from '../components/fixtures/index.vue'
export default {
  name: 'IndexPage',
  components: { FixturesBox },
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
          title: 'Event and Method',
          id: 3,
          to: '/tutorials/003',
          name: 'tutorials-003',
        },
        {
          title: 'Dictionary and Array Data',
          id: 4,
          to: '/tutorials/004',
          name: 'tutorials-004',
        },
        {
          title: 'Binding CSS Class and Style',
          id: 5,
          to: '/tutorials/005',
          name: 'tutorials-005',
        },
        {
          title: 'Premier League Star Card ',
          id: 6,
          to: '/tutorials/006',
          name: 'tutorials-006',
        },
        {
          title: 'CRUID',
          id: 7,
          to: '/tutorials/007',
          name: 'tutorials-007',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.unitTitle {
  font-weight: 800;
  h3 {
    color: $black;
  }
  h4 {
    color: #01579b;
  }
}

.unitTitle:hover {
  color: $gray;
}
</style>
