<template>
  <v-row>
    <v-col class="team">
      <!-- Home -->
      <v-col class="teamData" cols="4" md="4">
        <!-- ชื่อทีมเจ้าบ้าน -->
        <h3>{{ homeName }}</h3>
        <!-- โลโก้ทีมเจ้าบ้าน -->
        <img :src="homeLogo" alt="" />
      </v-col>
      <!-- เวลาแข่งขัน -->
      <v-col class="time" cols="4" md="4">
        <h3>{{ time }}</h3>
      </v-col>
      <!-- Away -->
      <v-col class="teamData" cols="4" md="4">
        <!-- โลโก้ทีมเยือน -->
        <img :src="awayLogo" alt="" />
        <!-- ชื่อทีมเยือน -->
        <h3>{{ awayName }}</h3>
      </v-col>
    </v-col>
     <!-- ช่องถ่าย -->
     <v-col class="broadcast" cols="12" md="12">
      <img src="@/static/logo/truevisi@x2.png" alt="">
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'DetailMatch',
  props: {
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
.time {
  text-align: center;
 
  h3 {
    border: solid 0.1rem #ebe5eb;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 400;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
  }
}
.team {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 0;
  padding-top: 0;
  img {
    width: 50%;
  }
  .teamData {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    gap: 0.2rem;
  }
  h3{
    font-size: clamp(0.5rem , 8vw, 1rem);
  }
}
.broadcast{
  object-fit: contain;
  display: flex;
  justify-content: center;
  padding-top: 0;
  img{
    width: 25%;

  }
}
</style>
