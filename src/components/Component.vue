<template>
  <main class="main-container">
    <header class="header">recommendation</header>
    <div class="div-3"></div>
    <div id="recommendation" class="t-shirt">-</div>
  </main>
  <div class="container min-vh-50 d-flex justify-content-center align-items-center">
    <div class="form-group">
      <input id="curTemp" type="number" class="form-control" placeholder="current temperature">
    </div>
  </div>
  <button type="button" v-on:click="findClothing()" class="btn btn-primary" id="saveButton">refresh</button>
</template>

<style scoped>
.main-container {
  justify-content: center;
  align-items: center;
  display: flex;
  max-width: 291px;
  flex-direction: column;
  margin: 0 auto 15px;
}

.header {
  margin: -5px;
  color: #000;
  align-self: start;
  width: 100%;
  font: 500 28px Della Respira, sans-serif;
}

.div-3 {
  background-color: #d9d9d9;
  align-self: center;
  display: flex;
  min-height: 332px;
  width: 100%;
  flex-direction: column;
  margin: 6px 25px 0 2px;
}

#curTemp {
  margin: 0px
}

.t-shirt {
  color: #000;
  text-align: center;
  margin: 21px 0 -3px;
  font: 500 28px Della Respira, sans-serif;
}

.btn {
  margin: 8px
}
</style>

<script>
export default {
  methods: {
    findClothing () {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        Accept: 'application/json'
      }

      console.log(fetch('http://localhost:8090/Clothing', requestOptions)
        .then(function (response) {
          return response.json()
        }).then(function (obj) {
          const curTemp = document.getElementById('curTemp').value
          let tempName = 'nothing fitting found'
          let biggestTempSoFar = -Infinity

          for (let i = 0; i < obj.length; i++) {
            if (obj[i].minTemp <= curTemp && obj[i].minTemp > biggestTempSoFar) {
              biggestTempSoFar = obj[i].minTemp
              tempName = obj[i].name
            }
          }
          document.getElementById('recommendation').innerHTML = tempName
        })
        .catch(error => console.log('error', error)))
    }
  }
}

</script>
