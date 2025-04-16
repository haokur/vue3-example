<template>
  <div class="App">
    <router-view></router-view>
  </div>
</template>
<script lang="ts" setup>
import { onBeforeUnmount, onMounted } from "vue";

onBeforeUnmount(() => {
  console.log(111, "App.vue::11行");
});

onMounted(() => {});
</script>
<style lang="scss" scoped></style>
