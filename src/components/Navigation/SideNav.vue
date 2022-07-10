<template>
  <nav class="nav">
    <ul class="nav-links">
      <li v-for="item in sideNavItems" :key="item.id" class="nav-item">
        <div>
          <font-awesome-icon :icon="item.icon" size="2x" />
        </div>
        <span>
          {{ item.name }}
        </span>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ISideNavItem } from "@/utilities/types";
import { sideNavList } from "@/utilities/data";

export default defineComponent({
  name: "SideNavigation",
  components: {},
  setup() {
    const sideNavItems = ref<ISideNavItem[]>(sideNavList);

    return { sideNavItems };
  },
});
</script>

<style scoped>
.nav {
  background-color: var(--primary-color);
  height: 100vh;
  width: 90px;
  position: fixed;
}
.nav-links {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.nav-item {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  opacity: 1;
  transition: 0.3s;
}
.nav-item:hover {
  opacity: .6;
}
</style>
