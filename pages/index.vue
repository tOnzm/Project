<template>
  <v-row>
    <v-col cols="12" sm="12" md="12">
      <h1>VUE + Nuxt</h1>
      <div class="status">
        <div md="1" class="pass">
          <h4>เสร็จ</h4>
          <div class="circle"></div>
        </div>
        <div md="1" class="fail">
          <h4>ไม่เสร็จ</h4>
          <div class="circle"></div>
        </div>
      </div>
      <br>

      <v-row>
        <v-col v-for="item in units" :key="item.id" cols="6" md="3">
          <NuxtLink :to="{ name: item.name, params: { title: item.title } }">
            <div class="unitTitle">
              <h3>เรื่องที่ {{ item.id }}</h3>
              <h4
                :style="{ color: item.status == true ? '#2E7D32' : '#D50000' }"
              >
                {{ item.title }}
              </h4>
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
          status: true,
        },
        {
          title: '2 Ways Binding with v-model สำหรับอ่าน Input',
          id: 2,
          to: '/tutorials/002',
          name: 'tutorials-002',
          status: true,
        },
        {
          title: 'Event and Method',
          id: 3,
          to: '/tutorials/003',
          name: 'tutorials-003',
          status: true,
        },
        {
          title: 'Dictionary and Array Data',
          id: 4,
          to: '/tutorials/004',
          name: 'tutorials-004',
          status: true,
        },
        {
          title: 'Binding CSS Class and Style',
          id: 5,
          to: '/tutorials/005',
          name: 'tutorials-005',
          status: true,
        },
        {
          title: 'UI ตามตัวอย่าง',
          id: 6,
          to: '/tutorials/006',
          name: 'tutorials-006',
          status: true,
        },
        {
          title: 'CRUID',
          id: 7,
          to: '/tutorials/007',
          name: 'tutorials-007',
          status: false,
        },
        {
          title: 'Prop and slot',
          id: 8,
          to: '/tutorials/008',
          name: 'tutorials-008',
          status: true,
        },
        {
          title: 'Pokemon API',
          id: 9,
          to: '/tutorials/009',
          name: 'tutorials-009',
          status: false,
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

.status {
  display: flex;
  gap: 1rem;
  .pass,
  .fail {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: solid 0.1rem #dbdbdb;
    border-radius: 5px;
    margin-bottom: 1rem;
    background-color: transparent;
    padding: 0.2rem;
    gap: 0.2rem;
    .circle {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #2e7d32;
    }
  }
  .fail {
    .circle {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #d50000;
    }
  }
}
</style>
