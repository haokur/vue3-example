<template>
  <div class="ProxyToTest">
    <div>markRaw reactive value：{{ reactiveObj2Mark }}</div>
    <div>
      <button @click="changeReactiveObj2MarkValue">改变reactiveObj2Mark的值</button>
      <button @click="alertCurrentReactiveObj2MarkValue">alert当前reactiveObj2Mark的值</button>
    </div>
    <div>
      <div>toRef get origin obj name is {{ name4 }}</div>
      <div><button @click="changeToRefGetNameValue">changeToRefGetNameValue</button></div>
    </div>
    <div>
      <div>toRef get reactive obj name is {{ name5 }}</div>
      <div><button @click="changeToRefGetNameValue2">changeToRefGetNameValue2</button></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {
  computed,
  markRaw,
  reactive,
  readonly,
  ref,
  shallowReactive,
  shallowRef,
  toRaw,
  toRef,
  toRefs,
  unref,
} from "vue";

const obj = { name: "xxx" };
console.log("toRaw of normal Object result is ", toRaw(obj));

const refObj = ref(obj);
console.log("toRaw of refObj result is ", toRaw(refObj));
console.log("toRaw of refObj.value result is ", toRaw(refObj.value));

const reactiveObj = reactive(obj);
console.log("toRaw of reactiveObj result is ", toRaw(reactiveObj));

const shallowRefObj = shallowRef(obj);
console.log("toRaw of shallowRefObj result is ", toRaw(shallowRefObj));
console.log("toRaw of shallowRefObj.value result is ", toRaw(shallowRefObj.value));

const shallowReactiveObj = shallowReactive(obj);
console.log("toRaw of shallowReactiveObj result is ", toRaw(shallowReactiveObj));

const readonlyValue = readonly(obj);
console.log("toRaw of readonlyValue result is ", toRaw(readonlyValue));

const computedValue = computed(() => {
  return obj.name;
});
console.log("toRaw of computedValue result is ", toRaw(computedValue));
console.log("toRaw of computedValue.value result is ", toRaw(computedValue.value));

const normalProxy = new Proxy(obj, {});
console.log("toRaw of new Proxy result is ", toRaw(normalProxy));

const obj2 = { name: "bob" };
const obj2Mark = markRaw(obj2);
console.log("markRaw of obj2 result is", obj2Mark, "origin obj2 is ", obj2);

const refOfObj2 = ref(obj2);
console.log("ref of obj2 is ", refOfObj2);
const refOfObj2Mark = ref(obj2Mark);
console.log("ref of obj2Mark result is ", refOfObj2Mark);
console.log("refOfObj2Mark.value is ", refOfObj2Mark.value);

const reactiveObj2Mark = reactive(obj2Mark);
console.log("reactive of obj2Mark result is ", reactiveObj2Mark);

const changeReactiveObj2MarkValue = () => {
  reactiveObj2Mark.name = "jack";
};

const alertCurrentReactiveObj2MarkValue = () => {
  alert(JSON.stringify(reactiveObj2Mark));
};

const obj3 = { name: "jack", age: 22 };
const { name: name3, age: age3 } = toRefs(obj3);
console.log("toRefs of normal object name3 is ", name3, "\nage3 is ", age3);

const obj3Reactive = reactive(obj3);
const { name, age } = toRefs(obj3Reactive);
console.log("toRefs of reactive obj ,name is ", name, "\nage is ", age);

const obj4 = { name: "bob" };
const name4 = toRef(obj4, "name");
console.log("toRef get name4 is ", name4);
const changeToRefGetNameValue = () => {
  name4.value = "john";
  console.log(name4, "ProxyToTest.vue::91行");
};

const obj5 = reactive({ name: "bob" });
const name5 = toRef(obj5, "name");
console.log("toRef get name5 is ", name5);
const changeToRefGetNameValue2 = () => {
  name5.value = "john";
};

const score = 60;
console.log("unref a noraml value result is ", unref(score));
console.log("unref a ref package value result is ", unref(ref(50)));
console.log("unref a reactive package value result is ", unref(reactive({ score: 100 })));
// const testUnRefObj = { value: "test" };
// console.log("unref a noraml object with .value result is ", unref(testUnRefObj)); // 报错
</script>
<style lang="scss" scoped></style>
