<template>
  <div class="A">
    <div>this is A page</div>
  </div>
</template>
<script lang="ts" setup>
defineOptions({
  name: "PageA",
});
import { onActivated, onDeactivated, onMounted } from "vue";

onDeactivated(() => {
  console.log("A onDeactivated");
});

onActivated(() => {
  console.log("A onActivated");
});

onMounted(() => {
  console.log("A mounted");
});
</script>
<style lang="scss" scoped></style>
