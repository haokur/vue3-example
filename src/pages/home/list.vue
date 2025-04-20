<template>
  <div class="list">
    <div>this is list page</div>
    <NormalComponent></NormalComponent>
    <AsyncComp></AsyncComp>
    <DefineExpose ref="DefineExposeRef"></DefineExpose>
    <DefineEmitsComp @update="handleChildUpdate"></DefineEmitsComp>
    <DefinePropsComp :msg="'hello vue3'"></DefinePropsComp>
    <MyList :items="data">
      <template #item="{ item }">
        <span>{{ item.name }}</span>
      </template>
    </MyList>
    <MyTable :rows="userList">
      <template #row="{ row }">
        <strong>{{ row.name }}</strong> ({{ row.age }} 岁)
      </template>
    </MyTable>
    <DefineModelComp v-model="counter" v-model:title="str"> </DefineModelComp>
    <button @click="runExposeIncrease">runExposeIncrease</button>
    <div>count：{{ count }}</div>
    <button @click="increase">increase</button>
  </div>
</template>
<script lang="ts" setup>
import { AsyncComp, NormalComponent } from "@/components/define/DefineCpt";
import DefineEmitsComp from "@/components/define/DefineEmitsComp.vue";
import DefineExpose from "@/components/define/DefineExpose.vue";
import DefineModelComp from "@/components/define/DefineModelComp.vue";
import DefinePropsComp from "@/components/define/DefinePropsComp.vue";
import MyList from "@/components/define/MyList.vue";
import MyTable from "@/components/define/MyTable.vue";
import { onMounted, ref, shallowRef } from "vue";

const counter = ref(10);
const str = ref("vue3");

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

const data = [
  {
    id: 1,
    name: "xx",
  },
];

const userList = [
  { id: 1, name: "张三", age: 18 },
  { id: 2, name: "李四", age: 22 },
];
onMounted(() => {
  console.log("list page onMounted", "list.vue::13行");
});
</script>
<style lang="scss" scoped></style>
