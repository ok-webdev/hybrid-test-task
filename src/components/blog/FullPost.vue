<template>
  <section class="post">
    <header class="post__header">
      <h1>{{ title }}</h1>
      <p class="post__date">{{ date }}</p>
    </header>
    <p class="post__content">{{ content }}</p>
    <base-button
      name="edit post"
      class="post__edit-edit"
      @click="isPostEditForm = !isPostEditForm"
    />
    <form class="post__edit-form" v-if="isPostEditForm">
      <div class="post__edit-inputs">
        <form-input
          id="edit-post-title"
          class="post__edit-input"
          v-model="editPostTitle"
          placeholder="Enter new title"
        />
        <form-input
          id="edit-post-description"
          class="post__edit-input"
          v-model="editPostDescription"
          placeholder="Enter new description"
        />
        <text-area
          id="edit-post-text"
          class="post__edit-input"
          v-model="editPostText"
          placeholder="Enter new post"
        />
      </div>
      <div class="post__edit-buttons">
        <base-button
          name="cancel"
          @click="cancelEditPost"
          class="post__edit-cancel"
        />
        <base-button name="submit" @click="submitEditPost(id)" />
      </div>
    </form>
    <div class="post__comments">
      <h2 class="post__comments-title">
        Comments:
      </h2>
      <div class="post__comments-content">
        <comment-card
          v-for="comment in comments"
          :postId="id"
          :id="comment.id"
          :key="comment.id"
          :date="comment.date"
          :name="comment.name"
          :text="comment.text"
          @delete="deleteComment(comment.id)"
          @editComment="$emit('editComment')"
          class="post__comments-comment"
        />
      </div>
    </div>
    <form class="post__comments-form">
      <h2 class="post__comments-title">Add comment</h2>
      <div class="post__inputs">
        <div class="post__input">
          <form-input
            id="comment-name"
            placeholder="Enter your name"
            v-model="commentName"
            class="post__input-name"
          />
        </div>
        <div class="post__input">
          <text-area
            id="comment-text"
            placeholder="Enter your comment"
            v-model="commentText"
            class="post__input-text"
          />
        </div>
      </div>
      <div class="post__buttons">
        <base-button
          name="cancel"
          type="reset"
          @click="resetCommentsForm"
          class="post__buttons-cancel"
        />
        <base-button
          name="add comment"
          @click="addComment"
          class="post__buttons-add"
        />
      </div>
    </form>
  </section>
</template>

<script>
  import BaseButton from '../ui/BaseButton';
  import FormInput from '../ui/FormInput';
  import TextArea from '../ui/TextArea';
  import CommentCard from './CommentCard';

  export default {
    components: { CommentCard, FormInput, TextArea, BaseButton },
    name: 'Post',
    props: {
      id: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: false,
        default: 'No title',
      },
      description: {
        type: String,
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
    data() {
      return {
        commentName: '',
        commentText: '',
        editPostTitle: this.title,
        editPostText: this.content,
        editPostDescription: this.description,
        isPostEditForm: false,
      };
    },
    methods: {
      addComment() {
        if (this.commentName.length && this.commentText.length) {
          let posts = JSON.parse(localStorage.getItem('posts'));
          posts.filter((post) => {
            if (post.id.toString() === this.$route.params.postId) {
              post.comments.push({
                id:
                  Math.trunc(Math.random() * 42000000) *
                  Math.trunc(Math.random() * 42),
                date: new Date()
                  .toISOString()
                  .replace(/T/, ' ')
                  .replace(/\..+/, ''),
                name: this.commentName,
                text: this.commentText,
              });
              localStorage.setItem('posts', JSON.stringify(posts));
            }
          });
          this.commentName = '';
          this.commentText = '';
        }
        this.$emit('setComments');
      },
      resetCommentsForm() {
        this.commentName = '';
        this.commentText = '';
      },
      deleteComment(commentId) {
        let posts = JSON.parse(localStorage.getItem('posts'));
        posts.filter((post) => {
          if (post.id.toString() === this.$route.params.postId) {
            post.comments = post.comments.filter(
              (comment) => comment.id !== commentId
            );
            localStorage.setItem('posts', JSON.stringify(posts));
          }
        });
        this.$emit('deleteComment');
      },
      cancelEditPost() {
        this.editPostTitle = this.title;
        this.editPostText = this.content;
        this.isPostEditForm = false;
      },
      submitEditPost(postId) {
        let posts = JSON.parse(localStorage.getItem('posts'));
        posts.filter((post) => {
          if (post.id.toString() === postId) {
            post.title = this.editPostTitle;
            post.content = this.editPostText;
            post.description = this.editPostDescription;
          }
          localStorage.setItem('posts', JSON.stringify(posts));
        });
        this.$emit('updatePost');
        this.isPostEditForm = false;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .post {
    padding: 20px 50px;
    &__date {
      font-size: 12px;
      font-weight: 400;
      color: #8f8f8f;
      text-align: left;
    }
    &__content {
      width: 55%;
      font-size: 14px;
      font-weight: 400;
      color: #474747;
      line-height: 150%;
      letter-spacing: 0.15px;
      text-align: left;
    }
    &__comments {
      width: 55%;
      margin-top: 40px;
      &-comment {
        margin-bottom: 20px;
      }
      &-form {
        width: 60%;
        margin-top: 40px;
      }
      &-title {
        font-size: 18px;
        font-weight: 500;
        color: #474747;
        margin: 0;
        margin-left: 10px;
      }
    }
    &__inputs {
      margin-top: 20px;
    }
    &__input {
      margin-bottom: 15px;
    }
    &__buttons {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 0 20px;
      &-cancel {
        margin-right: 20px;
      }
    }
    &__edit {
      &-edit {
        margin: 20px;
      }
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
        padding: 0 20px;
      }
      &-cancel {
        margin-right: 20px;
      }
    }
  }
</style>
