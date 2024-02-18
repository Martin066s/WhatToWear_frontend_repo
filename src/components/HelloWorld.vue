<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container min-vh-50 d-flex justify-content-center align-items-center">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="username" v-model="username">
      </div>
      </div>
    <div class="container min-vh-50 d-flex justify-content-center align-items-center">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="password" v-model="password">
      </div>
    </div>
    <button type="button" v-on:click="addUser()" class="btn btn-primary" id="registerButton">register</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      username: null,
      password: null,
      longitude: null,
      latitude: null
    }
  },
  methods: {
    addUser () {
      const myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      const raw = JSON.stringify({
        username: this.username,
        password: this.password,
        longitude: this.longitude,
        latitude: this.latitude
      })

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }

      fetch('http://localhost:8080/addUser', requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
    }
  },
  props: {
    msg: String
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
