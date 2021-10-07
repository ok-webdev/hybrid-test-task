<template>
  <div class="input">
    <label :for="id">{{ labelText }}</label>
    <input
      :type="type"
      :id="id"
      :placeholder="placeholder"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
  export default {
    name: 'FormInput',
    props: {
      type: {
        type: String,
        required: false,
        default: 'text',
      },
      id: {
        type: String,
        required: true,
      },
      placeholder: {
        type: String,
        required: false,
      },
      labelText: {
        type: String,
        required: false,
      },
      value: {
        required: true,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .input {
    display: flex;
    flex-direction: column;
    input {
      font-size: 12px;
      font-weight: 400;
      color: #5c5c5c;
      border: 1px solid rgba(0, 0, 0, 0.03);
      border-radius: 5px;
      box-shadow: 3px 3px 6px 2px rgba(0, 0, 0, 0.03) inset;
      outline: transparent;
      padding: 10px;
      &:focus {
        border: 1px solid rgba(0, 0, 0, 0.06);
        box-shadow: 3px 3px 8px 2px rgba(0, 0, 0, 0.04) inset;
      }
    }
  }
</style>
