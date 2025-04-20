<template>
  <div class="ComputedTest">
    <div>total：{{ total }}</div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";

const count = ref(10);
const total = computed(() => count.value * 10);
console.log(total.value, "ComputedTest.vue::10行");
// total.value = 200 ; // ❌

// 可读写的computed
const firstName = ref("jack");
const lastName = ref("Ma");

const fullName = computed({
  get: () => `${firstName.value} ${lastName.value}`,
  set: (val: string) => {
    const [first, last] = val.split(" ");
    firstName.value = first;
    lastName.value = last;
  },
});
fullName.value = "Tony Stark";
</script>
<style lang="scss" scoped></style>
