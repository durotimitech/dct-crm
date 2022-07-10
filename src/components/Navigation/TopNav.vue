<template>
  <nav class="nav">
    <ul class="nav-links">
      <li>Main</li>
      <li>Meeting/Visit</li>
      <li>Statistics</li>
      <li>Products</li>
      <li>Triggers</li>
      <li>Tune</li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TopNavigation",
});
</script>

<style scoped>
.nav {
  margin-top: 2rem;
}
.nav-links {
  display: flex;
  list-style: none;
  color: white;
  justify-content: space-around;
  width: 30%;
}
</style>
