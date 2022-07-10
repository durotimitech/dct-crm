<template>
  <div>
    <SideNav />
    <div class="content">
      <Header />
      <MainBody />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideNav from "@/components/Navigation/SideNav.vue";
import Header from "@/components/Header.vue";
import MainBody from "@/components/MainBody.vue";

export default defineComponent({
  name: "App",
  components: { SideNav, Header, MainBody },
});
</script>

<style>
.content {
  padding: 0 0 0 90px;
}
</style>
