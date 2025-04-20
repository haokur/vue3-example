<template>
  <div class="DefineExpose">
    <div>DefineExpose page count is {{ count }}</div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const count = ref(0);
const increase = () => {
  count.value++;
};

defineExpose({
  increase,
});
</script>
<style lang="scss" scoped></style>
