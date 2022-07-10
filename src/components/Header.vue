<template>
  <header class="container">
    <div class="order-details">
      <span class="order-number">#18003833</span>
      <span class="social">Telegram </span>
    </div>
    <div class="status">
      Transferring the order to the courier
      <span class="order-number"> (11 days) </span>
    </div>

    <TopNav />
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TopNav from "./Navigation/TopNav.vue";

export default defineComponent({
  name: "HeaderComponent",
  components: { TopNav },
});
</script>

<style scoped>
.container {
  background-color: var(--secondary-color);
  padding: 10px;
}
.order-details {
  margin-bottom: 1rem;
}
.order-number {
  color: gray;
  font-weight: normal;
  margin-right: 0.5rem;
}
.social {
  color: white;
  background-color: gray;
  border-radius: 5px;
  padding: 0.3rem;
}
.status {
  color: white;
  font-weight: bold;
}
</style>
