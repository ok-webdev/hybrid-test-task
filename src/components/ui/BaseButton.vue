<template>
  <button 
    class="button"
    :type="type"
  >
    {{name}}
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    name: {
      type: String,
      required: true,
      default: 'Button'
    },
    type: {
      type: String,
      required: false,
      default: 'submit'
    }
  }  
}
</script>

<style lang="scss" scoped>
  .button{
    background: #fcfcfc;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    color: #5c5c5c;
    border: none;
    border-radius: 5px;
    box-shadow: 0px -6px 10px 0px rgba(0, 0, 0, 0.04) inset, 
                0px 6px 10px rgba(0, 0, 0, 0.09);
    padding: 20px 30px;
    outline: transparent;
    cursor: pointer;
    &:hover{
      box-shadow: 0px -6px 12px 0px rgba(0, 0, 0, 0.06) inset, 
                0px 6px 15px rgba(0, 0, 0, 0.12);
    }
  }
</style>