<template>
  <div class="add-post">
    <form class="add-post__form">
      <div class="add-post__inputs">
        <div class="add-post__input">
          <input type="text" id="post-title" placeholder="enter title">
        </div>
        <div class="add-post__input">
          <input type="text" id="post-description" placeholder="enter short description">
        </div>
        <div class="add-post__input">
          <textarea id="post-content" cols="30" rows="10" placeholder="enter post"></textarea>
        </div>
      </div>
      <div class="add-post__buttons">
        <base-button 
          name="cancel"
          type="reset"
          @click="$emit('close')"
        />
        <base-button 
          name="add"
        />
      </div>
    </form>
  </div>
</template>

<script>
import BaseButton from '../ui/BaseButton'
export default {
  name: 'AddPost',
  components: {
    BaseButton
  }
}
</script>

<style lang="scss" scoped>
.add-post{
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
  &__input{
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    input,
    textarea{
      font-size: 12px;
      font-weight: 400;
      color: #5c5c5c;
      border: 1px solid rgba(0, 0, 0, 0.03);
      border-radius: 5px;
      box-shadow: 3px 3px 6px 2px rgba(0, 0, 0, 0.03) inset;
      outline: transparent;
      padding: 10px;
      &:focus{
        border: 1px solid rgba(0, 0, 0, 0.06);
        box-shadow: 3px 3px 8px 2px rgba(0, 0, 0, 0.04) inset;
      }
    }
    textarea{
      resize: none;
    }
  }
  &__buttons{
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}
</style>