<template>
  <header class="header">
    <h1 class="header__title">
      {{title}}
    </h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true,
      default: 'Header'
    }
  }
}
</script>

<style lang="scss" scoped>
  .header{ 
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
</style>