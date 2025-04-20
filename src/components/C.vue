<template>
    <div class="C">
      <div>this is C page</div>
    </div>
  </template>
  <script lang="ts" setup>
  import { onMounted } from "vue";
  
  onMounted(() => {
    console.log("C mounted");
  });
  </script>
  <style lang="scss" scoped></style>
  