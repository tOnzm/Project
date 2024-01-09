<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="10"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: 'UID',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        { text: 'First Name', value: 'fname', sortable: true },
        { text: 'Last Name', value: 'lname', sortable: true },
        { text: 'Username', value: 'username', sortable: true },
        { text: 'Avatar', value: 'avatar', sortable: true },
      ],
      desserts: [
        {
          id: 1,
          fname: 'Karn',
          lname: 'Yong',
          username: 'karn.yong@melivecode.com',
          avatar: 'https://www.melivecode.com/users/1.png',
        },
        {
          id: 2,
          fname: 'Ivy',
          lname: 'Cal',
          username: 'ivy.cal@melivecode.com',
          avatar: 'https://www.melivecode.com/users/2.png',
        },
        {
          id: 3,
          fname: 'Walter',
          lname: 'Beau',
          username: 'walter.beau@melivecode.com',
          avatar: 'https://www.melivecode.com/users/3.png',
        },
      ],
    }
  },
  
  
}
</script>

<style lang="scss" scoped></style>
