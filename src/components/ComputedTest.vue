<template>
  <div class="ComputedTest">
    <div>total：{{ total }}</div>
  </div>
</template>
<script lang="ts" setup>
import {
  computed,
  reactive,
  readonly,
  ref,
  shallowReactive,
  shallowReadonly,
  shallowRef,
} from "vue";

const count = ref(10);
const total = computed(() => count.value * 10);
console.log(total.value, "ComputedTest.vue::10行");
// total.value = 200 ; // ❌
console.log(total,"ComputedTest.vue::21行");

// 可读写的computed
const firstName = ref("jack");
const lastName = ref("Ma");

const fullName = computed({
  get: () => `${firstName.value} ${lastName.value}`,
  set: (val: string) => {
    const [first, last] = val.split(" ");
    firstName.value = first;
    lastName.value = last;
  },
});
console.log(fullName,"ComputedTest.vue::35行");
fullName.value = "Tony Stark";

var a = ref(0);
var b = ref({ name: "jack" });
console.log(a, "ComputedTest.vue::30行");
console.log(b, "ComputedTest.vue::31行");

const shallowA = shallowRef(0);
const shallowB = shallowRef({ name: "jack" });
console.log("shallowA", shallowA, "ComputedTest.vue::35行");
console.log("shallowB", shallowB, "ComputedTest.vue::36行");

const c = reactive({ name: "xxx", scores: { math: 100 } });
console.log(c, "ComputedTest.vue::34行");
const shallowC = shallowReactive({ name: "xx", scores: { math: 100 } });
console.log("shallowC", shallowC, "ComputedTest.vue::41行");

const d = readonly(ref(0));
console.log("readonly d is", d, "ComputedTest.vue::44行");

const e = readonly(reactive({ math: { scores: 100 } }));
console.log(e, "ComputedTest.vue::45行");
// e.math = { scores: 100 };
// e.math.scores = 99;

const obj = { scores: { math: 99 } };
const f = shallowReadonly(obj);
console.log(f, "ComputedTest.vue::53行");
// f.scores = {};
// f.scores.math = 100;
</script>
<style lang="scss" scoped></style>
