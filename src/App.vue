<template>
  <div id="app">
    <the-header 
      title="Hybrid тестовое задание"
    />
  </div>
</template>

<script>
import TheHeader from './components/ui/TheHeader'
export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>

<style lang="scss">
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #app {
    
  }
</style>
