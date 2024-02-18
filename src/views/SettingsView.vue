<template>
  <div class="about">
    <div class="container min-vh-50 d-flex justify-content-center align-items-center">
    <table class="table table-sm" id="clothing-table">
      <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">minTemp</th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody id="clothes-table">
      </tbody>
    </table>
  </div>
  </div>
  <div class="hello">
    <div class="container min-vh-50 d-flex justify-content-center align-items-center">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="name" v-model="name">
      </div>
    </div>
    <div class="container min-vh-50 d-flex justify-content-center align-items-center">
      <div class="form-group">
        <input type="number" class="form-control" placeholder="min Temperature" v-model="minTemp">
      </div>
    </div>
    <button type="button" v-on:click="addClothing()" class="btn btn-success" id="saveButton">create</button>
  </div>
</template>

<style>
.form-group {
  margin: 5px
}
</style>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  draw()
})
</script>

<script>
export default {
  clothName: 'Settings',
  data () {
    return {
      name: null,
      userId: null,
      category: null,
      minTemp: null,
      pathPic: null
    }
  },
  methods: {
    addClothing () {
      const myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      const raw = JSON.stringify({
        name: this.name,
        userId: this.userId,
        category: this.category,
        minTemp: this.minTemp,
        pathPic: this.pathPic
      })

      console.log(raw)

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }

      fetch('http://localhost:8090/Clothing', requestOptions).then(function (response) {
        return response.json()
      }).then(function (obj) {
        const id = obj.id
        const name = obj.name
        const minTemp = obj.minTemp

        const tbodyRef = document.getElementById('clothes-table')
        tbodyRef.innerHTML += `
        <tr id="TR${id}">
        <th scope="row">${name}</th>
        <td>${minTemp}</td>
          <td><button id="${id}" type="button" class="btn btn-danger btn-sm deleteButton">delete</button></td>
        </tr>
        `
      })
        .catch(error => console.log('error', error))
    }
  }
}

document.addEventListener('click', function (e) {
  const target = e.target.closest('.deleteButton') // Or any other selector.

  if (target) {
    const requestOptions = {
      method: 'DELETE',
      redirect: 'follow'
    }

    fetch('http://localhost:8090/Clothing/' + target.id, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error))

    console.log('TR' + target.id)
    document.getElementById('TR' + target.id).textContent = ''
  }
})

function draw () {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    Accept: 'application/json'
  }

  console.log(fetch('http://localhost:8090/Clothing', requestOptions)
    .then(function (response) {
      return response.json()
    }).then(function (obj) {
      const tbodyRef = document.getElementById('clothes-table')
      tbodyRef.innerHTML = ''
      // console.log(obj[0].name)
      for (let i = 0; i < obj.length; i++) {
        // var tbodyRef = document.getElementById('clothes-table').insertRow);
        tbodyRef.innerHTML += `
        <tr id="TR${obj[i].id}">
        <th scope="row">${obj[i].name}</th>
        <td>${obj[i].minTemp}</td>
          <td><button id="${obj[i].id}" type="button" class="btn btn-danger btn-sm deleteButton">delete</button></td>
        </tr>
        `
      }
    })
    .catch(error => console.log('error', error)))
}

</script>
