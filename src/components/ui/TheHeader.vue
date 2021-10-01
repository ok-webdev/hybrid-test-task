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
    background: #FFFFFF;
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
    padding: 20px;
    &__title{
      font-size: 36px;
      font-weight: 500;
    }
  }
</style>