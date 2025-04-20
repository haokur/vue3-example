<template>
  <div class="ShallowRefUse">
    <div ref="elRef">111</div>
    <div ref="elShallowRef">222</div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, shallowRef } from "vue";

const elRef = ref<HTMLElement | null>(null);

// 语义更清晰
const elShallowRef = shallowRef<HTMLElement | null>(null);
onMounted(() => {
  console.log(elShallowRef.value, "ShallowRefUse.vue::11行");
  console.log(elRef.value, "ShallowRefUse.vue::15行");
  console.log(elRef.value === elShallowRef.value, "ShallowRefUse.vue::16行");
});
</script>
<style lang="scss" scoped></style>
