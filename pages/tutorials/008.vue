<template>
  <div>
    <h1 >Prop and Slot</h1>
    <v-row class="body">
    <v-col
      v-for="(item, index) in fixtures"
      :key="index"
      md="3"
      cols="12"
      sm="6"
    >
      <FixturesBox
        :competition="item.compName"
        :comp-logo="item.compLogo"
        :bg-color="item.compColor"
        :bg-img="item.compBg"
        :kick-date="item.kickoffDate"
      >
        <div
          v-for="(match, matchIndex) in item.matches"
          :key="matchIndex"
          
        >
          <DetailMatch
            :home-name="match.hName"
            :home-logo="match.hLogo"
            :away-name="match.aName"
            :away-logo="match.aLogo"
            :time="match.kickoffTime"
          />
        </div>
      </FixturesBox>
    </v-col>
  </v-row>
  </div>
</template>

<script>
import FixturesBox from '@/components/fixtures/index.vue'
import DetailMatch from '@/components/fixtures/detailMatch.vue'

export default {
  name: 'Tutorials008',
  components: { FixturesBox, DetailMatch },
  data() {
    return {
      fixtures: [
        {
          id: 1,
          compName: 'Matchweek 22',
          compLogo: require('@/static/logo/competition/competition_1_small.png'),
          compColor: '#1DD1FF',
          kickoffDate: '32 December 2024',
          matches: [
            {
              hName: 'CRY',
              fullHomeName: ' Crystal Palace',
              hLogo: require('@/static/logo/t31.png'),
              aName: 'MCC',
              fullAwayName: 'Manchester City',
              aLogo: require('@/static/logo/t43.png'),
              kickoffTime: '18:00',
            },
            {
              hName: 'ARS',
              fullHomeName: ' Arsenal',
              hLogo: require('@/static/logo/t3.png'),
              aName: 'LIV',
              fullAwayName: 'Liverpool',
              aLogo: require('@/static/logo/t14@x2.png'),
              kickoffTime: '20:00',
            },
            {
              hName: 'CRY',
              fullHomeName: ' Crystal Palace',
              hLogo: require('@/static/logo/t31.png'),
              aName: 'MCC',
              fullAwayName: 'Manchester City',
              aLogo: require('@/static/logo/t43.png'),
              kickoffTime: '21:00',
            },
          ],
        },
        {
          id: 2,
          compName: 'Carabao Cup',
          compLogo: require('@/static/logo/competition/competition_5_eflCarabao17_18_small.png'),
          compColor: '#00945E',
          kickoffDate: '5 December 2024',
          compBg: '',
          matches: [
            {
              hName: 'CRY',
              fullHomeName: ' Crystal Palace',
              hLogo: require('@/static/logo/t31.png'),
              aName: 'MCC',
              fullAwayName: 'Manchester City',
              aLogo: require('@/static/logo/t43.png'),
              kickoffTime: '03:00',
            },
            {
              hName: 'LIV',
              fullHomeName: ' Liverpool',
              hLogo: require('@/static/logo/t14@x2.png'),
              aName: 'MAC',
              fullAwayName: 'Manchester City',
              aLogo: require('@/static/logo/t43.png'),
              kickoffTime: '00:30',
            },
            {
              hName: 'CRY',
              fullHomeName: ' Crystal Palace',
              hLogo: require('@/static/logo/t31.png'),
              aName: 'ARS',
              fullAwayName: 'Arsenal',
              aLogo: require('@/static/logo/t3.png'),
              kickoffTime: '17:45',
            },
          ],
        },
        {
          id: 3,
          compName: 'Carabao Cup',
          compLogo: require('@/static/logo/competition/competition_5_eflCarabao17_18_small.png'),
          compColor: '#00945E',
          kickoffDate: '5 December 2024',
          compBg: '',
          matches: [
            {
              hName: 'CRY',
              fullHomeName: ' Crystal Palace',
              hLogo: require('@/static/logo/t31.png'),
              aName: 'MCC',
              fullAwayName: 'Manchester City',
              aLogo: require('@/static/logo/t43.png'),
              kickoffTime: '03:00',
            },
            {
              hName: 'LIV',
              fullHomeName: ' Liverpool',
              hLogo: require('@/static/logo/t14@x2.png'),
              aName: 'MAC',
              fullAwayName: 'Manchester City',
              aLogo: require('@/static/logo/t43.png'),
              kickoffTime: '00:30',
            },
            {
              hName: 'CRY',
              fullHomeName: ' Crystal Palace',
              hLogo: require('@/static/logo/t31.png'),
              aName: 'ARS',
              fullAwayName: 'Arsenal',
              aLogo: require('@/static/logo/t3.png'),
              kickoffTime: '17:45',
            },
            {
              hName: 'CRY',
              fullHomeName: ' Crystal Palace',
              hLogo: require('@/static/logo/t31.png'),
              aName: 'ARS',
              fullAwayName: 'Arsenal',
              aLogo: require('@/static/logo/t3.png'),
              kickoffTime: '17:45',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
