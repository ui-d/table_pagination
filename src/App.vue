<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Output</router-link> |
      <router-link to="/form">Input</router-link>
    </div>
    <keep-alive>
    <router-view/>
    </keep-alive>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
img {
  width: 10%;
  padding: 20px;
}
</style>
