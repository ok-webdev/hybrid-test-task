<template>
  <div>
    <the-header button @open-modal="showModal" />
    <div class="content">
      <card-post
        v-for="post in posts"
        :key="post.id"
        :id="post.id"
        :date="post.date"
        :title="post.title"
        :description="post.description"
        :comments="post.comments.length"
        @delete="deletePost(post.id)"
      />
    </div>
    <modal-backdrop v-if="isModal" @close="hideModal">
      <add-post @close="hideModal" @add-post="addPostHandle" />
    </modal-backdrop>
  </div>
</template>

<script>
  import TheHeader from '../components/ui/TheHeader';
  import CardPost from '../components/blog/CardPost';
  import AddPost from '../components/modals/AddPost';
  import ModalBackdrop from '../components/ui/ModalBackdrop';

  export default {
    name: 'App',
    components: {
      TheHeader,
      CardPost,
      AddPost,
      ModalBackdrop,
    },
    data() {
      return {
        count: null,
        posts: [
          {
            id: 1,
            date: new Date()
              .toISOString()
              .replace(/T/, ' ')
              .replace(/\..+/, ''),
            title: 'Test post',
            description: 'Add your first post by "Add Post" button',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            comments: [
              {
                id:
                  Math.trunc(Math.random() * 42000000) *
                  Math.trunc(Math.random() * 42),
                name: 'User',
                date: new Date()
                  .toISOString()
                  .replace(/T/, ' ')
                  .replace(/\..+/, ''),
                text:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              },
            ],
          },
        ],
        isModal: false,
      };
    },
    methods: {
      showModal() {
        this.isModal = true;
      },
      hideModal() {
        this.isModal = false;
      },
      addPostHandle(data) {
        this.count++;
        const newPost = {
          id: this.count,
          date: new Date()
            .toISOString()
            .replace(/T/, ' ')
            .replace(/\..+/, ''),
          title: data.postTitle,
          description: data.postDescription,
          content: data.postContent,
          comments: [],
        };
        this.posts.push(newPost);
        localStorage.setItem('posts', JSON.stringify(this.posts));
        this.posts = JSON.parse(localStorage.getItem('posts'));
        this.hideModal();
      },
      deletePost(postId) {
        let posts = JSON.parse(localStorage.getItem('posts'));
        posts.filter((post) => {
          if (post.id === postId) {
            posts.splice(posts.indexOf(post), 1);
            localStorage.setItem('posts', JSON.stringify(posts));
            this.posts = JSON.parse(localStorage.getItem('posts'));
          }
        });
      },
    },
    mounted() {
      if (localStorage.posts) {
        this.posts = JSON.parse(localStorage.getItem('posts'));
      } else {
        localStorage.setItem('posts', JSON.stringify(this.posts));
      }
      if (this.count !== 1) {
        this.count = this.posts.length * Math.trunc(Math.random() * 10000000);
      }
    },
  };
</script>

<style lang="scss" scoped>
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-gap: 20px;
    flex-wrap: wrap;
    margin-top: 20px;
  }
</style>
