<template>
  <div class="CustomRef">
    <input type="text" v-model="keyword" />
  </div>
</template>
<script lang="ts" setup>
import { customRef, watch } from "vue";

function myRef(value: any) {
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newVal) {
        value = newVal + 1;
        trigger();
      },
    };
  });
}

const count = myRef(0);
count.value = 10;
console.log(count.value, "CustomRef.vue::25行"); // 11,在set的时候处理了再加1

// 场景1：用于防抖
function useDebouncedRef(value: any, delay = 300) {
  let timeout: ReturnType<typeof setTimeout>;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          value = newValue;
          trigger();
        }, delay);
      },
    };
  });
}
const keyword = useDebouncedRef("", 500);
watch(keyword, (oldValue, newValue) => {
  console.log(oldValue, newValue, "CustomRef.vue::49行");
});
</script>
<style lang="scss" scoped></style>
