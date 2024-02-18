<template>
  <header class="main-container">
    <h1 class="title">WhatToWear</h1>
  </header>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/settings">Settings</router-link>
  </nav>
  <router-view/>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  position: relative;
  height: auto;
  padding-bottom: 17px;
  background-color: rgba(34, 187, 112, 1);
  margin: 2px 0 -4px;
}

.title {
  position: relative;
  align-self: center;
  font-size: 40px;
  font-weight: 600;
  margin: 20px 0 -3px;
}
</style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
