<template>
  <div class="home">
    <div>
      <div class="type-check" v-for="(item, index) in testTypes" :key="index">
        <label>
          <input type="radio" :value="item.key" v-model="currentTestType" />
          {{ item.label }}</label
        >
      </div>
    </div>
    <div class="showcase">
      <component :is="currentTestComponent"></component>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { customRef, onMounted } from "vue";
import RefVsReactive from "@/components/RefVsReactive.vue";
import ProxyIsTest from "@/components/ProxyIsTest.vue";
import ProxyToTest from "@/components/ProxyToTest.vue";
import ProxyTypeTest from "@/components/ProxyTypeTest.vue";
import Readonly from "@/components/Readonly.vue";
import CustomRef from "@/components/CustomRef.vue";
import ReactiveDoc from "@/components/ReactiveDoc.vue";
import ComputedTest from "@/components/ComputedTest.vue";
import ShallowTest from "@/components/ShallowTest.vue";
import ShallowRefUse from "@/components/ShallowRefUse.vue";
import LifeCycle from "@/components/LifeCycle.vue";
import KeepAliveTest from "@/components/KeepAliveTest.vue";

let currentTestComponent = RefVsReactive;
const myRef = (value: any) => {
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(val: string) {
        currentTestComponent = testTypes.find((item) => item.key === val)!.component;
        value = val;
        trigger();
      },
    };
  });
};
const currentTestType = myRef("");

const testTypes = [
  { label: "ref和reactive", key: "RefVsReactive", component: RefVsReactive, active: false },
  { label: "is的API", key: "ProxyIsTest", component: ProxyIsTest, active: false },
  { label: "to的API", key: "ProxyToTest", component: ProxyToTest, active: false },
  { label: "类型的测试", key: "ProxyTypeTest", component: ProxyTypeTest, active: false },
  { label: "只读测试", key: "Readonly", component: Readonly, active: false },
  { label: "自定义ref", key: "CustomRef", component: CustomRef, active: false },
  { label: "响应式文档测试", key: "ReactiveDoc", component: ReactiveDoc, active: false },
  { label: "computed测试", key: "ComputedTest", component: ComputedTest, active: false },
  { label: "computed测试", key: "ShallowTest", component: ShallowTest, active: false },
  { label: "shallowRef使用场景", key: "ShallowRefUse", component: ShallowRefUse, active: false },
  { label: "lifeCycle生命周期", key: "LifeCycle", component: LifeCycle, active: false },
  { label: "keepAlive测试", key: "KeepAliveTest", component: KeepAliveTest, active: true },
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
