<template>
  <div class="DefinePropsComp">
    <div>this is DefinePropsComp page</div>
    <div>{{ msg }}</div>
  </div>
</template>
<script lang="ts" setup>
// 最简单的
// defineProps<{
//   msg: string;
// }>();

// 带默认值的
// defineProps({
//   msg: {
//     type: String,
//     default: "hello",
//   },
// });

// defineProps + withDefault
// const props = defineProps<{
//   msg?: string;
// }>();
withDefaults(
  defineProps<{
    msg: string;
  }>(),
  {
    msg: "hello from vue 3",
  }
);

// defineProps<{
//     msg:string,
// }>({
//     msg:"hello"
// })
</script>
<style lang="scss" scoped></style>
