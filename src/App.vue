<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
  };
</script>

<style lang="scss">
  @import './assets/scss/normalize';
  @import './assets/scss/fonts';
  *,
  *::before,
  *::after {
    font-family: 'Roboto', sans-serif;
  }
  #app {
    height: 100vh;
    background: #fcfcfc;
    position: relative;
  }
</style>
