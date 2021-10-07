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
      <base-button class="comment__delete" name="delete" />
      <base-button class="comment__edit" name="edit" />
    </footer>
  </div>
</template>

<script>
  import BaseButton from '../ui/BaseButton.vue';
  export default {
    components: { BaseButton },
    name: 'CommentCard',
    props: {
      id: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: false,
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

<style lang="scss" scoped>
  .comment {
    width: 30%;
    background: #fcfcfc;
    box-shadow: 0px -6px 10px 0px rgba(0, 0, 0, 0.04) inset,
      0px 6px 20px rgba(0, 0, 0, 0.06);
    padding: 30px;
    transition: all 0.3s;
    text-decoration: none;
    margin-top: 10px;
    margin-right: 10px;
    &:hover {
      box-shadow: 0px -6px 12px 0px rgba(0, 0, 0, 0.06) inset,
        0px 6px 15px rgba(0, 0, 0, 0.1);
    }
    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__name {
      font-size: 14px;
      font-weight: 400;
      color: #474747;
    }
    &__date {
      font-size: 12px;
      font-weight: 400;
      color: #8f8f8f;
    }
    &__text {
      font-size: 14px;
      font-weight: 400;
      color: #474747;
      line-height: 150%;
      letter-spacing: 0.15px;
    }
    &__footer {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-top: 20px;
    }
    &__delete {
      margin-right: 30px;
    }
  }
</style>
