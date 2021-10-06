<template>
  <div class="add-post">
    <form class="add-post__form">
      <div class="add-post__inputs">
        <div class="add-post__input">
          <form-input
            type="text"
            id="post-title"
            placeholder="enter title"
            v-model="postTitle"
          />
        </div>
        <div class="add-post__input">
          <form-input
            type="text"
            id="post-description"
            placeholder="enter short description"
            v-model="postDescription"
          />
        </div>
        <div class="add-post__input">
          <text-area
            id="post-content"
            placeholder="enter post"
            v-model="postContent"
          />
        </div>
      </div>
      <div class="add-post__buttons">
        <base-button name="cancel" type="reset" @click="$emit('close')" />
        <base-button name="add" @click="emitForm" />
      </div>
    </form>
  </div>
</template>

<script>
  import BaseButton from '../ui/BaseButton';
  import FormInput from '../ui/FormInput';
  import TextArea from '../ui/TextArea';
  export default {
    name: 'AddPost',
    components: {
      BaseButton,
      FormInput,
      TextArea,
    },
    data() {
      return {
        postTitle: '',
        postDescription: '',
        postContent: '',
      };
    },
    methods: {
      emitForm() {
        this.$emit('add-post', {
          postTitle: this.postTitle,
          postDescription: this.postDescription,
          postContent: this.postContent,
        });
      },
    },
  };
</script>

<style lang="scss" scoped>
  .add-post {
    width: 45%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fcfcfc;
    box-shadow: 0px -6px 10px 5px rgba(0, 0, 0, 0.04) inset,
      0px 6px 10px rgba(0, 0, 0, 0.09);
    padding: 20px;
    border-radius: 5px;
    &__input {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
    }
    &__buttons {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
</style>
