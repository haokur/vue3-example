<template>
  <div class="list">
    <div>this is list page</div>
    <div>count：{{ count }}</div>
    <button @click="increase">increase</button>
  </div>
</template>
<script lang="ts" setup>
defineOptions({
  name: "PageList",
});
import { onMounted, ref } from "vue";

const count = ref(0);
const increase = () => {
  count.value++;
};

onMounted(() => {
  console.log("list page onMounted", "list.vue::13行");
});
</script>
<style lang="scss" scoped></style>
