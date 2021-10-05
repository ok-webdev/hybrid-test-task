<template>
  <button class="button" :type="type" @click="onClick">
    {{ name }}
  </button>
</template>

<script>
  export default {
    name: 'BaseButton',
    props: {
      name: {
        type: String,
        required: true,
        default: 'Button',
      },
      type: {
        type: String,
        required: false,
        default: 'submit',
      },
    },
    methods: {
      onClick(event) {
        event.preventDefault();
        this.$emit('click');
      },
    },
  };
</script>

<style lang="scss" scoped>
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fcfcfc;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    color: #5c5c5c;
    border: none;
    border-radius: 5px;
    box-shadow: 0px -6px 10px 0px rgba(0, 0, 0, 0.04) inset,
      0px 6px 10px rgba(0, 0, 0, 0.09);
    padding: 10px 35px;
    outline: transparent;
    cursor: pointer;
    transition: all 0.3s;
    &:hover,
    &:focus {
      box-shadow: 0px -6px 12px 3px rgba(0, 0, 0, 0.06) inset,
        0px 6px 15px rgba(0, 0, 0, 0.12);
    }
    &:active {
      background: #f7f7f7;
      box-shadow: -2px -2px 8px 8px rgba(0, 0, 0, 0.12) inset;
    }
  }
</style>
