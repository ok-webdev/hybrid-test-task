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
      />
    </div>
    <modal-backdrop v-if="isModal" @close="hideModal">
      <add-post @close="hideModal"/>
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
        {date: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')},
        {date: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')},
        {date: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')},
        {date: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')},
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
