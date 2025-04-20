<template>
  <div class="list">
    <div>this is list page</div>
    <NormalComponent></NormalComponent>
    <AsyncComp></AsyncComp>
    <DefineExpose ref="DefineExposeRef"></DefineExpose>
    <DefineEmitsComp @update="handleChildUpdate"></DefineEmitsComp>
    <DefinePropsComp :msg="'hello vue3'"></DefinePropsComp>
    <button @click="runExposeIncrease">runExposeIncrease</button>
    <div>count：{{ count }}</div>
    <button @click="increase">increase</button>
  </div>
</template>
<script lang="ts" setup>
import { AsyncComp, NormalComponent } from "@/components/define/DefineCpt";
import DefineEmitsComp from "@/components/define/DefineEmitsComp.vue";
import DefineExpose from "@/components/define/DefineExpose.vue";
import DefinePropsComp from "@/components/define/DefinePropsComp.vue";
import { onMounted, ref, shallowRef } from "vue";

const handleChildUpdate = (ev: number) => {
  console.log(ev, "list.vue::21行");
};

const DefineExposeRef = shallowRef();
const runExposeIncrease = () => {
  DefineExposeRef.value?.increase();
};

defineOptions({
  name: "PageList",
});

const count = ref(0);
const increase = () => {
  count.value++;
};

onMounted(() => {
  console.log("list page onMounted", "list.vue::13行");
});
</script>
<style lang="scss" scoped></style>
