<template>
  <transition name="fade">
    <div class="modal" v-show="isModalOpen">
      <transition name="slide-in">
        <div class="modal-inner">
          <div class="modal-content">
            <button type="button" @click="close">Close</button>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: "ModalComponent",
  props: {
    isModalOpen: {
      type: Boolean,
      required: true,
    },
  },
  setup(_, { emit }) {
    const close = () => {
      emit("close");
    };

    // const handleKeyUp = (event) => {
    //   if (event.keyCode === 27) {
    //     close();
    //   }
    // };

    // onMounted(()=> document.addEventListener("keyup", handleKeyUp))
    // onUnmounted(()=> document.removeEventListener("keyup", handleKeyUp))

    return { close };
  },
});
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.modal-inner {
  max-width: 500px;
  margin: 2rem auto;
}

.modal-content {
  position: relative;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 1rem;
  background-clip: padding-box;
  padding: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-in-enter-active,
.slide-in-leave-active {
  transition: all 0.3s ease-out;
}

.slide-in-enter-from,
.slide-in-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}
</style>
