<template>
  <div class="ShallowTest">
    <div>{{ shallowRefValue }}</div>
    <button @click="changeRefValue">changeRefValue</button>
    <button @click="changeRefScores">changeRefScores</button>
    <button @click="changeRefMath">changeRefMath</button>

    <div>{{ shallowReactiveValue }}</div>
    <button @click="changeReactiveScores">changeReactiveScores</button>
    <button @click="changeShallowReactiveMath">changeShallowReactiveMath</button>

    <div>{{ shallowReadonlyValue }}</div>
    <button @click="changeShallowReadonlyValueScoresMath">
      changeShallowReadonlyValueScoresMath
    </button>

    <div>{{ shallowReadonlyReactive }}</div>
    <button @click="changeShallowReadonlyReactive">changeShallowReadonlyReactive</button>
  </div>
</template>
<script lang="ts" setup>
import { reactive, shallowReactive, shallowReadonly, shallowRef } from "vue";

const shallowRefValue = shallowRef({ scores: { math: 100 } });
const changeRefValue = () => {
  shallowRefValue.value = { scores: { math: 66 } }; // ✅页面生效
};
const changeRefScores = () => {
  shallowRefValue.value.scores = { math: 99 }; // ❌页面不生效
};
const changeRefMath = () => {
  shallowRefValue.value.scores.math = 88; // ❌页面不生效
};

const shallowReactiveValue = shallowReactive({ scores: { math: 100 } });
const changeReactiveScores = () => {
  shallowReactiveValue.scores = { math: 99 }; // ✅页面生效
};
const changeShallowReactiveMath = () => {
  shallowReactiveValue.scores.math = 88; // ❌页面不生效
};

const shallowReadonlyValue = shallowReadonly({ scores: { math: 100 } });
// const changeShallowReadonlyValueScores = () => {
//   // shallowReadonlyValue.scores = { math: 99 }; // ❌报错
// };
const changeShallowReadonlyValueScoresMath = () => {
  shallowReadonlyValue.scores.math = 99; // ❌页面不生效
};
console.log(shallowReadonlyValue, "ShallowTest.vue::50行");

const shallowReadonlyReactive = shallowReadonly(
  reactive({
    scores: { math: 100 },
  })
);
console.log(shallowReadonlyReactive, "ShallowTest.vue::56行");
const changeShallowReadonlyReactive = () => {
  shallowReadonlyReactive.scores.math = 99; // ✅页面生效
};
</script>
<style lang="scss" scoped></style>
