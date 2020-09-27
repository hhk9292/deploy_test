<template>
  <div>
    <h1> This is Users </h1>
    <ul>
      <li v-for="user in users" :key="user.id"> {{ user.id }} </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Users",
  data() {
    return {
      users: []
    }
  },
  methods: {
    fetchUsers() {
      axios.get('/api'+ '/users')
      .then(res => {
        console.log(res)
        this.users = res.data
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  created() {
    this.fetchUsers()
  }
}
</script>

<style scoped>

</style>