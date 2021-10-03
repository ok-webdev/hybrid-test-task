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
      posts: [],
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
        title: data.postContent,
        description: data.postDescription,
        content: data.postTitle
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
