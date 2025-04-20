<template>
  <div class="App">
    <div>
      <button @click="jumpTo('/')">跳转Home页面</button>
      <button @click="jumpTo('/list')">跳转List页面</button>
      <button @click="jumpTo('/detail')">跳转Detail页面</button>
    </div>

    <router-view v-slot="{ Component, route }">
      <keep-alive max="3">
        <component v-if="route.meta.keepAlive" :is="Component" />
      </keep-alive>
      <component v-if="!route.meta.keepAlive" :is="Component" />
    </router-view>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();
const jumpTo = (pagePath: string) => {
  router.push({
    path: pagePath,
  });
};
</script>
<style lang="scss" scoped></style>
