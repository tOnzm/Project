<template>
  <v-row class="fixturesBox" >
    <v-col cols="12" md="12" class="header">
      <img
        src="@/static/logo/competition/competition_5_eflCarabao17_18_small.png"
        alt=""
      />
      <h2>EFL CUP</h2>
    </v-col>
    <v-col cols="12" class="fixtures-abridged">
      <p>All times shown are your <span>local time</span></p>
      <h3>Wednesday 10 January</h3>
    </v-col>
    <v-col class="team">
      <v-col class="teamData" cols="4" md="4" >
        <h3>ARS</h3>
        <img src="@/static/logo/t3.png" alt="" />
      </v-col>
      <v-col class="time" cols="4" md="4"><h3>03:00</h3></v-col>
      <v-col class="teamData" cols="4" md="4"
        ><img src="@/static/logo/t31.png" alt="" />
        <h3>CRY</h3>
      </v-col>
    </v-col>
    <v-col cols="12" class="btnViewAll">
      <v-btn elevation="0" block>View All Fixtures</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'FixturesBox',
}
</script>

<style lang="scss" scoped>
.fixturesBox {
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 0.1rem;
}
.header {
  background-color: #00945e;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem 0.5rem 0 0;
  padding: 10px;
  gap: 0.5rem;

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
.time {
  border: solid 0.1rem #ebe5eb;
  border-radius: 5px;
  text-align: center;
}
.team {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 50%;
  }
  .teamData {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(100vw / 1rem);

  
  }
}
.fixtures-abridged {
  text-align: center;
  span {
    font-weight: 800;
  }
}
.btnViewAll {
  .v-btn {
    border: solid 0.1rem #ebe5eb;
    background-color: transparent;
  }
}
</style>
