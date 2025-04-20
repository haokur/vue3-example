<template>
  <div class="DefineEmitsComp">
    <div>this is DefineEmitsComp page-{{ count }}</div>
    <button @click="sendUpdateInfo">通知父组件消息</button>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const count = ref(10);
const events = defineEmits(["update"]);

const sendUpdateInfo = () => {
  events("update", count.value);
};
</script>
<style lang="scss" scoped></style>
