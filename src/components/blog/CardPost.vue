<template>
  <article class="blog">
    <header class="blog__header">
      <h2 class="blog__title">{{title}}</h2>
      <p class="blog__date">{{date}}</p>  
    </header>
    <p class="blog__description">{{description}}</p>

  </article>
</template>

<script>
export default {
  name: 'CardPost',
  props: {
    title: {
      type: String,
      required: false,
      default: 'Title'
    },
    date: {
      type: String,
      required: true
    },
    description: {
      type: String,
      requred: false,
      default: 'Description',
    }
  }
}
</script>

<style lang="scss" scoped>
  .blog{
    width: 40%;
    background: #fcfcfc;
    box-shadow: 0px -6px 10px 0px rgba(0, 0, 0, 0.04) inset, 
                0px 6px 20px rgba(0, 0, 0, 0.06);
    padding: 30px;
    transition: all .3s;
    &:hover {
      box-shadow: 0px -6px 12px 0px rgba(0, 0, 0, 0.06) inset, 
                  0px 6px 15px rgba(0, 0, 0, 0.1);
      }
    &__header{
      display: flex;
      align-items: center;
      justify-content: space-between;
      }
    &__title {
      font-size: 22px;
      font-weight: 400;
      color: #474747;
      }
    &__date{
      font-size: 12px;
      font-weight: 400;
      color: #8f8f8f;
      }
    }
</style>