<template>
  <header class="header" @open-modal="$emit('open-modal')">
    <h1 class="header__title">
      {{ title }}
    </h1>
    <base-button v-if="button" name="Add post" @click="$emit('open-modal')" />
  </header>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      title: {
        type: String,
        required: true,
        default: 'Header',
      },
      button: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fcfcfc;
    box-shadow: 0px -6px 10px 0px rgba(0, 0, 0, 0.04) inset,
      0px 6px 20px rgba(0, 0, 0, 0.06);
    padding: 20px 55px;
    position: sticky;
    top: 0;
    left: 0;
    &__title {
      font-size: 36px;
      font-weight: 500;
      color: #8f8f8f;
    }
  }
</style>
