<template>
  <section class="post">
    <header class="post__header">
      <h1>{{ title }}</h1>
      <p class="post__date">{{ date }}</p>
    </header>
    <p class="post__content">{{ content }}</p>
    <div class="post__comments">
      <h2 class="post__comments-title">
        Comments:
      </h2>
      <div class="post__comments-content">
        <comment-card
          v-for="comment in comments"
          :key="comment.date"
          :date="comment.date"
          :name="comment.name"
          :text="comment.text"
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
        <base-button name="cancel" type="reset" @click="resetCommentsForm" />
        <base-button name="add comment" type="submit" @click="addComment" />
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
    data() {
      return {
        commentName: '',
        commentText: '',
      };
    },
    methods: {
      addComment() {
        if (this.commentName.length && this.commentText.length) {
          let posts = JSON.parse(localStorage.getItem('posts'));
          posts.filter((post) => {
            if (post.id.toString() === this.$route.params.postId) {
              post.comments.push({
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
        }
        this.$emit('setComments');
        this.commentName = '';
        this.commentText = '';
      },
      resetCommentsForm() {
        this.commentName = '';
        this.commentText = '';
      },
    },
    // watch: {
    //   comments: () => {
    //     let posts = JSON.parse(localStorage.getItem('posts'));
    //     return (this.comments = posts.filter((post) => {
    //       if (post.id.toString() === this.$route.params.postId) {
    //         return post.comments;
    //       }
    //     }));
    //   },
    // },
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
      margin-top: 40px;
      &-content {
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
      }
      &-form {
        width: 55%;
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
      justify-content: space-between;
    }
  }
</style>
