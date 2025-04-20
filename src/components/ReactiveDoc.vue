<template>
  <div class="ReactiveDoc">
    <div>refValue：{{ refValue }}；isRef：{{ isValueRef }}</div>

    <div>shallowRefValue：{{ shallowRefValue }}；isShallow：{{ isValueShallowRef }}</div>
    <button @click="changeShallowRefValue">changeShallowRefValue</button>
    <button @click="alertCurrentValue(shallowRefValue)">alertCurrentValue</button>

    <div>
      reactiveValue：{{ reactiveValue }}；isReactive：{{ isValueReactive }}；isValueProxy：{{
        isValueProxy
      }}
    </div>
    <div>shallowReactiveValue：{{ shallowReactiveValue }}</div>
    <button @click="changeShallowReactiveValue">changeShallowReactiveValue</button>
    <button @click="alertCurrentValue(shallowReactiveValue)">alertCurrentValue</button>

    <div>reactiveObjOfMark：{{ reactiveObjOfMark.name }}</div>
    <button @click="changeReactiveObjOfMark">changeReactiveObjOfMark</button>
    <button @click="alertCurrentValue(reactiveObjOfMark)">alertCurrentValue</button>
  </div>
</template>
<script lang="ts" setup>
import {
  isProxy,
  isReactive,
  isReadonly,
  isRef,
  isShallow,
  markRaw,
  reactive,
  readonly,
  ref,
  shallowReactive,
  shallowReadonly,
  shallowRef,
  toRaw,
  toRef,
  toRefs,
  unref,
} from "vue";

const alertCurrentValue = (value: any) => {
  let _value = unref(value);
  alert(JSON.stringify(_value));
};

interface IPerson {
  name: String;
  age: Number;
  scores?: any;
}

/**ref */
const refValue = ref<String>("hello world");
// ref类型判定
const isValueRef = isRef(refValue); // true

// shallowRef 浅层代理ref
const shallowRefValue = shallowRef<IPerson>({
  name: "bob",
  age: 22,
});
// shallow 判定 + ref 判断 = shallowRef判定（官方未提供 isShallowRef 方法）
const isValueShallowRef = isShallow(shallowRefValue) && isRef(shallowRefValue);
const changeShallowRefValue = () => {
  shallowRefValue.value = { name: "john", age: 25 }; // 修改响应式更新
  setTimeout(() => {
    shallowRefValue.value.age = 30; // 修改无响应式更新
  }, 100);
};

// 兼容获取ref的数据（自动解包拿出.value的内容）
const valueOfRef = unref(ref("hello world")); // hello world
const valueOfNormal = unref(100); // 100
// const valueOfObjectHasValue = unref({value:"xxx"}); // 报错
const valueOfReactive = unref(reactive({ name: "xxx" })); // Proxy...
console.log(
  "valueOfRef is ",
  valueOfRef,
  ", valueOfNormal is ",
  valueOfNormal,
  ",valueOfReactive is ",
  valueOfReactive
);

/**reactive */
const reactiveValue = reactive<IPerson>({
  name: "jack",
  age: 20,
});
// reactive 类型判定
const isValueReactive = isReactive(reactiveValue); // true
const isValueProxy = isProxy(reactiveValue); // true

// shallowReactive 浅层代理object
const shallowReactiveValue = shallowReactive<IPerson>({
  name: "bob",
  age: 23,
  scores: {
    math: 100,
  },
});
const changeShallowReactiveValue = () => {
  shallowReactiveValue.name = "good boy"; // 响应式更新
  setTimeout(() => {
    shallowReactiveValue.scores.math = 60; // 不响应式更新
  }, 100);
};

// 转ref
const { name, scores } = toRefs(reactiveValue);
const age = toRef(reactiveValue, "age");
console.log(name, age, scores, "ReactiveDoc.vue::105行");

/**readonly */

// 源数据
const obj = { name: "xx", scores: { math: 100 } };
const refObj = ref({ name: "xx", scores: { math: 100 } });
const reactiveObj = reactive({ name: "xx", scores: { math: 100 } });

// readonly => 包装返回的数据全部锁定不能修改
const readonly4Obj = readonly(obj);
const readonly4Ref = readonly(refObj);
const readonly4Reactive = readonly(reactiveObj);

// 判定
const isValueReadonly = isReadonly(readonly4Obj);

console.log(
  { isValueReadonly, readonly4Obj, readonly4Ref, readonly4Reactive },
  "ReactiveDoc.vue::121行"
);

// 支持的操作，源数据并未被锁定为只读
obj.scores.math = 88;
refObj.value.scores.math = 88;
reactiveObj.scores.math = 88;

// 不支持的操作
// readonly4Obj.name = "jack"; // ❌
// readonly4Ref.value.name = "jack"; // ❌
// readonly4Reactive.name = "jack"; // ❌
// readonly4Obj.scores.math = 88; // ❌
// readonly4Ref.value.scores.math = 88; // ❌
// readonly4Reactive.scores.math = 88; // ❌

// shallowReadonly => 包装返回的数据只有第一层被锁定不能修改
const shallowReadonly4Obj = shallowReadonly(obj);
const shallowReadonly4Ref = shallowReadonly(refObj);
const shallowReadonly4Reactive = shallowReadonly(reactiveObj);

// 判定
const isValueShallowReadonly = isShallow(shallowReadonly4Obj) && isReadonly(shallowReadonly4Obj);
console.log({ isValueShallowReadonly }, "ReactiveDoc.vue::150行");

// shallowReadonly 支持的修改
shallowReadonly4Obj.scores.math = 88;
shallowReadonly4Ref.value.scores.math = 88;
shallowReadonly4Reactive.scores.math = 88;

// shallowReadonly 不支持的修改
// shallowReadonly4Obj.name = "jack"; // ❌
// shallowReadonly4Ref.value = { name: "jack", scores: { math: 88 } }; // ❌
// shallowReadonly4Reactive.name = "jack"; // ❌

/**raw */

// toRaw => 获取Proxy代理的原值（不适用自定义的new Proxy的值）
const refData = ref({ name: "xxx" });
const reactiveData = reactive({ name: "xxx" });
const refRawData = toRaw(refData.value);
const reactiveRawData = toRaw(reactiveData);
console.log({ refRawData, reactiveRawData }, "ReactiveDoc.vue::168行");

// markRaw => 添加标记__v_skip，在执行ref或reactive或跳过代理，即不会用Proxy来代理 rawObj
const rawObj = markRaw({ name: "xxx" });
const refObjOfMark = ref(rawObj);
const reactiveObjOfMark = reactive(rawObj);
console.log({ rawObj, refObjOfMark, reactiveObjOfMark }, "ReactiveDoc.vue::178行");
const changeReactiveObjOfMark = () => {
  reactiveObjOfMark.name = "jack";
};
</script>
<style lang="scss" scoped></style>
