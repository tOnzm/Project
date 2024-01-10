<template>
  <v-row class="fixturesBox">
    <v-col
      cols="12"
      md="12"
      class="header"
      :style="{
        backgroundColor: bgColor,
        backgroundImage: `url(${bgImg})`,
      }"
    >
      <!-- โลโก้รายการแข่งขัน -->
      <img :src="compLogo" alt="" />
      <!-- ชื่อรายการแข่งขัน -->
      <h2>{{ competition }}</h2>
    </v-col>

    <v-col cols="12" class="fixtures-abridged">
      <p>All times shown are your <span>local time</span></p>
      <!-- แสดงผล -->
      <!-- วันที่ -->
      <h3>{{ kickDate }}</h3>
    </v-col>

    <!-- แทรก detailMatch -->
    <slot> </slot>

    <!-- ดูการแข่งขันทั้งหมด -->
    <v-col cols="12" class="btnViewAll">
      <NuxtLink to="/">
        <v-btn elevation="0" block>View All Fixtures</v-btn>
      </NuxtLink>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'FixturesBox',
  props: {
    competition: { type: String, default: 'ชื่อรายการ' },
    compLogo: {
      type: String,
      default: require('@/static/logo/competition/competition_5_eflCarabao17_18_small.png'),
    },
    kickDate: { type: String, default: 'วว/ดด/ปปปป' },
    homeName: { type: String, default: 'ABC' },
    homeLogo: { type: String, default: require('@/static/logo/t3.png') },
    time: { type: String, default: '00:00' },
    awayLogo: { type: String, default: require('@/static/logo/t31.png') },
    awayName: { type: String, default: 'DEF' },
    bgColor: { type: String, default: '#B0BEC5' },
    bgImg: { type: String, default: require('@/static/logo/bgcomp.png') },
  },
}
</script>

<style lang="scss" scoped>
.fixturesBox {
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 0.1rem;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem 0.5rem 0 0;
  padding: 10px;
  gap: 0.5rem;
  background-size: cover;

  img {
    width: 1.5rem;
    justify-items: flex-start;
  }
  h2 {
    color: #fff;
    font-weight: 900;
    padding: 0;
  }
}
.fixtures-abridged {
  text-align: center;
  font-size: 0.8rem;
  line-height: 0.5rem;
  p{
    font-size: 0.7rem;
  }
  span {
    font-weight: 800;
  }
  h3 {
    line-height: 0.5rem;
    font-weight: 400;
    font-size: 1.2rem;
    padding-bottom: 0.75rem;
  }
}
.btnViewAll {
  .v-btn {
    border: solid 0.1rem #ebe5eb;
    background-color: transparent;
  }
}
</style>
