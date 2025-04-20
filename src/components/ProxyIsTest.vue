<template>
  <div class="ProxyIsTest"></div>
</template>
<script lang="ts" setup>
import {
  h,
  isProxy,
  isReactive,
  isReadonly,
  isRef,
  isShallow,
  isVNode,
  reactive,
  readonly,
  ref,
  shallowReactive,
  shallowReadonly,
  shallowRef,
} from "vue";

// isRef, isReactive, isShallow, isReadonly
const refValue = ref({ name: "xxx" });
console.log("isRef of refValue is ", isRef(refValue));
console.log("isReactive of refValue is ", isReactive(refValue));

const reactiveValue = reactive({ name: "xx" });
console.log("isRef Value of reactiveValue is ", isRef(reactiveValue));
console.log("isReactive Value of reactiveValue is ", isReactive(reactiveValue));

const shallowRefValue = shallowRef(111);
const shallowReactiveValue = shallowReactive({ name: "jack" });
console.log("isShallow of shallowRefValue", isShallow(shallowRefValue));
console.log("isShallow of shallowReactiveValue", isShallow(shallowReactiveValue));
console.log("isShallow of reactiveValue", isShallow(reactiveValue));

const proxyValue = new Proxy(
  {
    name: "xxx",
  },
  {
    get(target: any, prop: string) {
      return target[prop];
    },
  }
);
console.log("isProxy of proxy by new Proxy", isProxy(proxyValue));
console.log("isProxy of ref value", isProxy(refValue.value));
console.log("isProxy of reactive", isProxy(reactiveValue));

const vNode = h("div", []);
console.log("isVNode of vNode", isVNode(vNode));

const readonlyValue = readonly({ name: "xxx" });
console.log("isReadonly of readonlyValue is ", isReadonly(readonlyValue));

function isShallowReadonly(data: any) {
  return isShallow(data) && isReadonly(data);
}
const shallowReadonlyValue = shallowReadonly({ name: "xxx" });
console.log(
  "isShallowReadonly of shallowReadonlyValue is ",
  isShallow(shallowReadonlyValue),
  isReadonly(shallowReadonlyValue),
  isShallowReadonly(shallowReadonlyValue)
);
</script>
<style lang="scss" scoped></style>
