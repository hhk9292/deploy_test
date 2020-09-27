<template>
  <div>
    <h1> This is Home </h1>
    <h2> {{ greeting }} </h2>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  data() {
    return {
      greeting: ''
    }
  },
  methods: {
    fetchGreeting() {
      axios.get('/api')
      .then(res => {
        console.log(res)
        this.greeting = res.data
      })
      .catch(err => {
        console.error(err)
      })
    }
  },
  created() {
    this.fetchGreeting()
  }
}
</script>
