<template>
  <div class="KeepAliveTest">
    <button v-for="(item, index) in cptList" :key="index" @click="current = item.key">
      页面 {{ item.key }}
    </button>
    <keep-alive :include="['PageA', 'B']" :exclude="['C']" max="3">
      <component :is="currentCpt.component" />
    </keep-alive>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";
import A from "./A.vue";
import B from "./B.vue";
import C from "./C.vue";

const current = ref("A");
const cptList = [
  { key: "A", component: A },
  { key: "B", component: B },
  { key: "C", component: C },
];
const currentCpt = computed(() => {
  return cptList.find((item) => item.key === current.value)!;
});
</script>
<style lang="scss" scoped></style>
