<template>
  <div>
    <div>obj：{{ obj }}</div>
    <div>refValue：{{ refValue }}</div>
    <div>reactiveValue：{{ reactiveValue }}</div>

    <div style="margin-top: 20px">
      <button @click="changeOriginObj">changeOriginObj</button>
      <button @click="changeRefValue">changeRefValue</button>
      <button @click="changeReactiveValue">changeReactiveValue</button>
      <button @click="alertOriginObj">alertOriginObj</button>
      <button @click="changeValueByRef">changeValueByRef</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  h,
  isProxy,
  isReactive,
  isReadonly,
  isRef,
  isShallow,
  isVNode,
  onMounted,
  reactive,
  readonly,
  ref,
  shallowReactive,
  shallowRef,
  toRaw,
  toRef,
  toRefs,
  markRaw,
  unref,
} from "vue";

const obj = { name: "jack", age: 18 };

const refValue = ref<{ name: string; age: number }>(obj);

const rawValue = toRaw(refValue.value);
console.log(refValue, "rawValue is ", rawValue, obj === rawValue);

const reactiveValue = reactive(obj);
console.log(reactiveValue, obj === toRaw(reactiveValue), "RefVsReactive.vue::44行");
console.log(unref(refValue), unref(refValue) === reactiveValue, "RefVsReactive.vue::43行");

console.log(refValue.value === reactiveValue, "RefVsReactive.vue::46行");

const changeOriginObj = () => {
  obj.age++;
};

const changeRefValue = () => {
  refValue.value.age++;
};

const changeReactiveValue = () => {
  reactiveValue.age++;
};

const alertOriginObj = () => {
  alert(JSON.stringify(obj));
};

const changeValueByRef = () => {
  const { age } = toRefs(reactiveValue);
  age.value++;

  const name = toRef(reactiveValue, "name");
  name.value = "bob";
};

const shallowRefValue = shallowRef(11);
console.log(isShallow(shallowRefValue), "RefVsReactive.vue::49行");

const shallowReactiveValue = shallowReactive({ name: "jack" });
console.log(isShallow(shallowReactiveValue), "RefVsReactive.vue::64行");

const originObj = { name: "jack" };
const readOnlyObj = readonly(originObj);
console.log(isReadonly(readOnlyObj), "RefVsReactive.vue::69行");
originObj.name = "nike";
// readOnlyObj.name = "xxx"; // 报错，不能更改

const vnode = h("div", { class: "foo" }, "Hello");
console.log(isVNode(vnode), "RefVsReactive.vue::76行");

const userInfo = { name: "bob", age: 22 };
markRaw(userInfo);
const userInfoReactive = reactive(userInfo);
console.log(userInfo, userInfoReactive, "RefVsReactive.vue::88行");

const refSimple = ref(1);
console.log(unref(refSimple), "RefVsReactive.vue::96行");

onMounted(() => {
  console.log(isRef(refValue), isRef(reactiveValue), "RefVsReactive.vue::51行");
  console.log(
    isReactive(refValue),
    isReactive(reactiveValue),
    isProxy(refValue),
    isProxy(reactiveValue),
    "RefVsReactive.vue::50行"
  );
  let _proxy = new Proxy({}, {});
  console.log(isProxy(_proxy), "RefVsReactive.vue::57行");
});
</script>
