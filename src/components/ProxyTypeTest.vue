<template>
  <div class="ProxyTest">
    <div>this is ProxyTest page</div>
  </div>
</template>
<script lang="ts" setup>
import {
  computed,
  onMounted,
  reactive,
  readonly,
  ref,
  shallowReactive,
  shallowReadonly,
  shallowRef,
} from "vue";

const obj = { name: "xxx" };
console.log("obj is ", obj);
console.log("ref callback result is ", ref(obj));
console.log("ref(obj).value callback result is ", ref(obj).value);
console.log("reactive callback result is ", reactive(obj));
console.log("shallowRef callback result is ", shallowRef(obj));
console.log("shallowRef(obj).value callback result is ", shallowRef(obj).value);
console.log("shallowReactive callback result is ", shallowReactive(obj));
console.log("readonly callback result is ", readonly(obj));
console.log("shallowReadonly callback result is ", shallowReadonly(obj));

const computedValue = computed(() => {
  return obj.name + " hello";
});
console.log("computed callback return basic type, computed result is ", computedValue);

const computedReturnObjValue = computed(() => {
  return { ...obj, scores: 100 };
});
console.log("computed callback return obj, computed result is ", computedReturnObjValue);
console.log("computed callback .value is ", computedReturnObjValue.value);

onMounted(() => {});
</script>
<style lang="scss" scoped></style>
