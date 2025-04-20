<template>
  <div class="home">
    <div>
      <div class="type-check" v-for="(item, index) in testTypes" :key="index">
        <label>
          <input type="radio" :value="item.key" v-model="currentTestType" /> {{ item.label }}</label
        >
      </div>
    </div>
    <div class="showcase">
      <template v-if="currentTestType === 'RefVsReactive'"><RefVsReactive /></template>
      <template v-if="currentTestType === 'ProxyIsTest'"><ProxyIsTest /></template>
      <template v-if="currentTestType === 'ProxyToTest'"><ProxyToTest /></template>
      <template v-if="currentTestType === 'ProxyTypeTest'"><ProxyTypeTest /></template>
      <template v-if="currentTestType === 'Readonly'"><Readonly /></template>
      <template v-if="currentTestType === 'CustomRef'"><CustomRef /></template>
      <template v-if="currentTestType === 'ReactiveDoc'"><ReactiveDoc /></template>
      <template v-if="currentTestType === 'ComputedTest'"><ComputedTest /></template>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import RefVsReactive from "@/components/RefVsReactive.vue";
import ProxyIsTest from "@/components/ProxyIsTest.vue";
import ProxyToTest from "@/components/ProxyToTest.vue";
import ProxyTypeTest from "@/components/ProxyTypeTest.vue";
import Readonly from "@/components/Readonly.vue";
import CustomRef from "@/components/CustomRef.vue";
import ReactiveDoc from "@/components/ReactiveDoc.vue";
import ComputedTest from "@/components/ComputedTest.vue";

const currentTestType = ref();
const testTypes = [
  { label: "ref和reactive", key: "RefVsReactive", active: false },
  { label: "is的API", key: "ProxyIsTest", active: false },
  { label: "to的API", key: "ProxyToTest", active: false },
  { label: "类型的测试", key: "ProxyTypeTest", active: false },
  { label: "只读测试", key: "Readonly", active: false },
  { label: "自定义ref", key: "CustomRef", active: false },
  { label: "响应式文档测试", key: "ReactiveDoc", active: false },
  { label: "computed测试", key: "ComputedTest", active: true },
];

onMounted(() => {
  currentTestType.value = testTypes.find((item) => item.active)!.key;
});
</script>
<style lang="scss" scoped>
.type-check {
  display: flex;
  align-items: center;
  label {
    margin-right: 16px;
  }
}
</style>
