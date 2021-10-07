<template>
  <div class="post">
    <the-header />
    <full-post
      :title="title"
      :date="date"
      :content="content"
      :comments="comments"
      @setComments="updateComments"
    />
  </div>
</template>

<script>
  import FullPost from '../components/blog/FullPost';
  import TheHeader from '../components/ui/TheHeader';

  export default {
    name: 'PostView',
    components: { TheHeader, FullPost },
    data() {
      return {
        title: null,
        date: null,
        content: null,
        comments: null,
      };
    },
    methods: {
      updateComments() {
        const posts = JSON.parse(localStorage.getItem('posts'));
        posts.filter((post) => {
          if (post.id.toString() === this.$route.params.postId) {
            this.comments = post.comments;
          }
        });
      },
    },
    mounted() {
      const posts = JSON.parse(localStorage.getItem('posts'));
      posts.filter((post) => {
        if (post.id.toString() === this.$route.params.postId) {
          this.title = post.title;
          this.date = post.date;
          this.content = post.content;
          this.comments = post.comments;
        }
      });
    },
  };
</script>

<style lang="scss" scoped></style>
