<template>
  <div class="detail">
    <div>this is detail page</div>
  </div>
</template>
<script lang="ts" setup>
defineOptions({
  name: "PageDetail",
});
import { onMounted } from "vue";

onMounted(() => {
  console.log("detail page onMounted", "list.vue::13行");
});
</script>
<style lang="scss" scoped></style>
