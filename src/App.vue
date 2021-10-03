<template>
  <div id="app">
    <the-header 
      title="Hybrid тестовое задание"
      @open-modal="showModal"
    />
    <div class="content">
      <card-post 
        v-for="post in posts"
        :key="post.date"
        :date="post.date"
        :title="post.title"
        :description="post.description"
        :comments="post.comments.length"
      />
    </div>
    <modal-backdrop v-if="isModal" @close="hideModal">
      <add-post 
        @close="hideModal" 
        @add-post="addPostHandle"
      />
    </modal-backdrop>
  </div>
</template>

<script>
import TheHeader from './components/ui/TheHeader';
import CardPost from './components/blog/CardPost';
import AddPost from './components/modals/AddPost';
import ModalBackdrop from './components/ui/ModalBackdrop';

export default {
  name: 'App',
  components: {
    TheHeader,
    CardPost,
    AddPost,
    ModalBackdrop
  },
  data() {
    return {
      posts: [
        {date: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''), title: 'Test post', description: 'Test description', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', comments: [{name: 'User', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}]}
      ],
      isModal: false,
    }
  },
  methods: {
    showModal() {
      this.isModal = true;
    },
    hideModal () {
      this.isModal = false;
    },
    addPostHandle(data) {
      const newPost = {
        date: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        title: data.postTitle,
        description: data.postDescription,
        content: data.postContent,
        comments: []
      };
      this.posts.push(newPost);
      this.hideModal();
    }
  }
}
</script>

<style lang="scss">
  @import './assets/scss/normalize';
  @import './assets/scss/fonts';
  *,
  *::before,
  *::after {
    font-family: 'Roboto', sans-serif;
  }
  #app {
    height: 100vh;
    background: #fcfcfc;
    position: relative;
  }
  .content{ 
    display: flex;
    align-items: center;
    justify-content: center;
    grid-gap: 20px;
    flex-wrap: wrap;
    margin-top: 20px;
  }
</style>
