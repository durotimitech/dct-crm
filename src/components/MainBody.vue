<template>
  <div class="container">
    <div class="row">
      <span class="gray">Date and Time</span>
      <span>04.07.2022 16:00</span>
    </div>
    <div class="row">
      <span class="gray">Comment</span>
      <span>no car</span>
    </div>
    <div class="row">
      <span class="gray">Duration</span>
      <span>30min</span>
    </div>
    <div class="row">
      <span class="gray">Link to the meeting/visit</span>
      <span>https://lcocalhost:4000/ap1/meet</span>
    </div>
    <div class="row">
      <span class="gray">Appointment Confirmation</span>
      <span>Will come</span>
    </div>
    <button class="btn" @click="isModalOpen = true">
      <font-awesome-icon icon="fa-regular fa-plus-square" size="1x" />
      <p>Add</p>
    </button>
  </div>
  <Modal :isModalOpen="isModalOpen" @close="isModalOpen = !isModalOpen" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Modal from "./Modal/Modal.vue";

export default defineComponent({
  name: "MainBody",
  setup() {
    const isModalOpen = ref(false);

    return { isModalOpen };
  },
  methods: {
    handleClick() {
      console.log("hello");
    },
  },
  components: { Modal },
});
</script>

<style scoped>
.container {
  padding: 10px;
  width: 40%;
}
.gray {
  color: gray;
}
.row {
  display: flex;
  justify-content: space-between;
}
.btn {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  color: gray;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}
</style>
