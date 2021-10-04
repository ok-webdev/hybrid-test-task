<template>
  <transition name="modal-fade">
    <div>
      <div class="modal__overlay"/>

      <div
        @click.self="$emit('close')"
        class="modal__box"
      >
        <div
          @click.self="$emit('close')"
          class="modal__wrap"
        >
          <div
            @click.self="$emit('close')"
            class="modal__content"
          >
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'ModalLayout',
    mounted () {
      document.body.style.overflow = 'hidden'
    },
    beforeDestroy () {
      document.body.style.overflow = ''
    }
  }
</script>

<style lang="scss" scoped>
  .modal {
    &__overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, .1);
      backdrop-filter: blur(3px);
      z-index: 9;
    }

    &__box {
      position: fixed;
      overflow-y: auto;
      overflow-x: hidden;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      text-align: center;
      white-space: nowrap;
      z-index: 2001;
    }

    &__wrap {
      position: relative;
      height: 100%;
      &:after {
        display: inline-block;
        vertical-align: middle;
        width: 0;
        height: 100%;
        content: '';
      }
    }

    &__content {
      width: 100%;
      display: inline-block;
      vertical-align: middle;
      position: relative;
      white-space: normal;
      text-align: left;
      margin: 50px auto;
    }
  }
</style>

<style lang="scss">
  .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s;
  }
</style>
