<template>
  <router-link :to="{ path: `/post/${id}` }" class="blog">
    <header class="blog__header">
      <h2 class="blog__title">{{ title !== '' ? title : 'No title' }}</h2>
      <p class="blog__date">{{ date }}</p>
    </header>
    <p class="blog__description">
      {{ description !== '' ? description : 'No description' }}
    </p>
    <p
      :class="[
        comments ? 'blog__comments blog__comments_available' : 'blog__comments',
      ]"
    >
      Comments: <span>{{ comments }}</span>
    </p>
    <base-button
      name="delete"
      @click="$emit('delete', id)"
      class="blog__delete"
    />
  </router-link>
</template>

<script>
  export default {
    name: 'CardPost',
    props: {
      id: {
        type: Number,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: false,
        default: '',
      },
      description: {
        type: String,
        requred: false,
        default: '',
      },
      comments: {
        type: Number,
        required: true,
        default: 0,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .blog {
    width: 40%;
    background: #fcfcfc;
    box-shadow: 0px -6px 10px 0px rgba(0, 0, 0, 0.04) inset,
      0px 6px 20px rgba(0, 0, 0, 0.06);
    padding: 30px;
    transition: all 0.3s;
    text-decoration: none;
    &:hover {
      box-shadow: 0px -6px 12px 0px rgba(0, 0, 0, 0.06) inset,
        0px 6px 15px rgba(0, 0, 0, 0.1);
    }
    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__title {
      font-size: 22px;
      font-weight: 400;
      color: #474747;
      word-break: break-all;
    }
    &__date {
      font-size: 12px;
      font-weight: 400;
      color: #8f8f8f;
    }
    &__description {
      max-width: 100%;
      font-size: 14px;
      font-weight: 400;
      color: #474747;
      word-break: break-all;
    }
    &__comments {
      font-size: 13px;
      font-weight: 400;
      margin-top: 20px;
      color: #8f8f8f;
      span {
        margin-left: 2px;
      }
      &_available {
        color: #474747;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .blog {
      &__header {
        flex-direction: column;
      }
      &__delete {
        width: 100%;
      }
    }
  }
</style>
