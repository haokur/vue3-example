<template>
  <div class="B">
    <div>this is B page</div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";

onMounted(() => {
  console.log("B mounted");
});
</script>
<style lang="scss" scoped></style>
