<template>
  <div class="post">
    <the-header backlink :title="title" />
    <full-post
      :id="$route.params.postId"
      :title="title"
      :date="date"
      :content="content"
      :description="description"
      :comments="comments"
      @setComments="updateAll"
      @deleteComment="updateAll"
      @updatePost="updateAll"
      @editComment="updateAll"
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
        description: null,
        content: null,
        comments: null,
      };
    },
    methods: {
      updateAll() {
        const posts = JSON.parse(localStorage.getItem('posts'));
        posts.filter((post) => {
          if (post.id.toString() === this.$route.params.postId) {
            this.title = post.title;
            this.content = post.content;
            this.description = post.description;
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
