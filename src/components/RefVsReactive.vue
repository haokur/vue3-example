<template>
  <div>
    <div>ref-name：{{ refValue.name }}</div>
    <div>reactive-name：{{ reactiveValue.name }}</div>
    <button @click="changeRefValue">changeRefValue</button>
    <button @click="changeReactiveValue">changeReactiveValue</button>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";

const refValue = ref({ name: "jack" });
const reactiveValue = reactive({
  name: "jack",
});

function changeRefValue() {
  refValue.value.name = "bob";
}

function changeReactiveValue() {
  reactiveValue.name = "bob";
}

onMounted(() => {
  console.log(refValue.value.name, "RefVsReactive.vue::12行");
  console.log(reactiveValue.name, "RefVsReactive.vue::13行");

  console.log(refValue, "RefVsReactive.vue::29行");
  console.log(reactiveValue, "RefVsReactive.vue::30行");
});
</script>
