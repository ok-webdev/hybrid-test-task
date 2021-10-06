<template>
  <div class="comment">
    <header class="comment__header">
      <span class="comment__name">{{ name }}</span>
      <span class="comment__date">{{ date }}</span>
    </header>
    <div class="comment__content">
      <p class="comment__text">
        {{ text }}
      </p>
    </div>
    <footer class="comment__footer">
      <a href="#" class="comment__update">update</a>
      <a href="#" class="comment__delete">delete</a>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'CommentCard',
    props: {
      name: {
        type: String,
        required: false,
        default: 'Anonimous',
      },
      date: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
    },
  };
</script>
