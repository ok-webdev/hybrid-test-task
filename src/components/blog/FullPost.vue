<template>
  <section class="post">
    <header class="post__header">
      <h1>{{ title }}</h1>
      <p>{{ date }}</p>
    </header>
    <p>{{ content }}</p>

    <div class="post__comments">
      <comment-card
        v-for="comment in comments"
        :key="comment.date"
        :date="comment.date"
        :name="comment.name"
        :text="comment.text"
      />
    </div>
  </section>
</template>

<script>
  import CommentCard from './CommentCard';
  export default {
    components: { CommentCard },
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
