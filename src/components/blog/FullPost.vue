<template>
  <section class="post">
    <header class="post__header">
      <h1>{{ title }}</h1>
      <p>{{ date }}</p>
    </header>
    <p>{{ content }}</p>
    <p>{{ comments }}</p>
  </section>
</template>

<script>
  export default {
    name: 'Post',
    props: {
      title: {
        type: String,
        required: false,
        default: 'No title',
      },
      date: {
        type: String,
        requred: true,
      },
      content: {
        type: String,
        requred: false,
        default: 'No content',
      },
      comments: {
        type: Array,
      },
    },
  };
</script>

<style lang="scss" scoped></style>
