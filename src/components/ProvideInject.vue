<template>
  <div class="ProvideInject">
    <div>this is ProvideInject page</div>
  </div>
</template>
<script lang="ts" setup>
import { inject, ref } from "vue";

const appConfig = inject("appConfig");
const appConfigRef = inject("appConfigRef");
const appConfigReactive = inject("appConfigReactive");
const unProvideValue = inject("no_exist_key");
console.log(appConfig, "ProvideInject.vue::12行");
console.log(appConfigRef, "ProvideInject.vue::13行");
console.log(appConfigReactive, "ProvideInject.vue::14行");
console.log(unProvideValue, "ProvideInject.vue::16行");

const user = inject("user", ref({ name: "default name" }));
const user2 = inject("user", () => ref({ name: "default name2" }));
console.log(user, "ProvideInject.vue::20行");
console.log(user2, user2(), "ProvideInject.vue::21行");
</script>
<style lang="scss" scoped></style>
