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
      <base-button
        class="comment__delete"
        name="delete"
        @click="$emit('delete', id)"
      />
      <base-button
        class="comment__edit"
        name="edit"
        @click="isCommentEditForm = !isCommentEditForm"
      />
    </footer>
    <form class="comment__edit-form" v-if="isCommentEditForm">
      <div class="comment__edit-inputs">
        <text-area
          id="edit-comment-text"
          class="comment__edit-input"
          v-model="editCommentText"
          placeholder="Enter new text"
        />
      </div>
      <div class="comment__edit-buttons">
        <base-button
          name="cancel"
          class="comment__edit-cancel"
          @click="isCommentEditForm = false"
        />
        <base-button
          name="submit"
          class="comment__edit-submit"
          @click="editComment"
        />
      </div>
    </form>
  </div>
</template>

<script>
  import TextArea from '../ui/TextArea';
  import BaseButton from '../ui/BaseButton';
  export default {
    components: { BaseButton, TextArea },
    name: 'CommentCard',
    props: {
      postId: {
        required: true,
      },
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
    data() {
      return {
        isCommentEditForm: false,
        editCommentText: this.text,
      };
    },
    methods: {
      editComment() {
        let posts = JSON.parse(localStorage.getItem('posts'));
        posts.filter((post) => {
          if (post.id.toString() === this.postId) {
            post.comments.filter((comment) => {
              if (comment.id === this.id) {
                comment.text = this.editCommentText;
              }
            });
            localStorage.setItem('posts', JSON.stringify(posts));
          }
        });
        this.$emit('editComment');
        this.isCommentEditForm = false;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .comment {
    width: 100%;
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
    &__edit {
      &-form {
        width: 60%;
        margin-top: 40px;
      }
      &-inputs {
        margin-top: 20px;
      }
      &-input {
        margin-bottom: 15px;
      }
      &-buttons {
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
      &-cancel {
        margin-right: 20px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .comment {
      &__header {
        flex-direction: column;
      }
      &__date {
        margin-top: 10px;
      }
      &__text {
        max-width: 100%;
        word-break: break-all;
      }
      &__footer {
        flex-direction: column;
      }
      &__delete {
        order: 2;
        width: 100%;
        margin: 0;
        margin-top: 10px;
      }
      &__edit {
        width: 100%;
        &-form {
          width: 100%;
        }
        &-buttons {
          flex-direction: column;
        }
        &-cancel {
          order: 2;
          width: 100%;
          margin: 0;
          margin-top: 10px;
        }
        &-submit {
          width: 100%;
        }
      }
    }
  }
</style>
