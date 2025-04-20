<template>
  <div class="Readonly">
    <div>obj.age：{{ obj.age }}</div>
    <div>objRefReadOnly.name：{{ objRefReadOnly.name }}</div>
    <div>objReactiveReadOnly.name：{{ objReactiveReadOnly.name }}</div>
    <div>user math score is： {{ shallowReadonlyObj.scores.math }}</div>
    <div>
      <button @click="updateReadonlyRefData">更改readonly里面的ref的数据</button>
      <button @click="updateReadonlyReactiveData">更改readonly里面的reactive的数据</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, readonly, ref, shallowReadonly } from "vue";

// 参数不能是简单类型
// const readonlyValue  = readonly(1);

// 1. readonly 代理简单对象，则返回的代理对象不能更改值，但是源对象可以更改
const obj = { name: "jack", age: 22, scores: { math: 100 } };
const readonlyObj = readonly(obj); // 返回的是一个 Proxy 对象，Proxy对象里的值为 {name:'jack',age:22}
console.log(readonlyObj, readonlyObj.name, "Readonly.vue::11行");
obj.age = 23;

// 2. readonly 代理ref数据，不能直接操作readonly执行的返回值
const objRef = ref(obj);
console.log(objRef, "Readonly.vue::27行");
const objRefReadOnly = readonly(objRef);
console.log(objRefReadOnly, objRefReadOnly.value.name, "Readonly.vue::15行");
// objRefReadOnly.value.name = "mike"; // Cannot assign to 'name' because it is a read-only property.
// objRefReadOnly.value.scores = { math: 98 }; // Cannot assign to 'scores' because it is a read-only property.
const updateReadonlyRefData = () => {
  objRef.value.name = "bob";
};

// 3. readonly 代理reactive数据，不能直接操作readonly执行的返回值
const objReactive = reactive(obj);
const objReactiveReadOnly = readonly(objReactive);
console.log(objReactiveReadOnly, objReactiveReadOnly.name, "Readonly.vue::27行");
// objReactiveReadOnly.name = "xxx";  // Cannot assign to 'name' because it is a read-only property
const updateReadonlyReactiveData = () => {
  objReactive.name = "john";
};

// 4. shallowReadonly，仅限制第一层
const shallowReadonlyObj = shallowReadonly(obj);
shallowReadonlyObj.scores.math = 99;
// shallowReadonlyObj.scores = {}; // Cannot assign to 'scores' because it is a read-only property.
console.log(shallowReadonlyObj, "Readonly.vue::44行");
</script>
<style lang="scss" scoped></style>
