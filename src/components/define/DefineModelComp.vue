<template>
  <div class="DefineModelComp">
    <div>{{ model }}-{{ title }}</div>
    <div>
      <button @click="changeModelValueInChild">changeModelValueInChild</button>
      <button @click="changeModelTitle">更改title</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
const model = defineModel<number>();
const title = defineModel<string>("title");
// const model = defineModel<number>("model");

// const model = withDefaults(defineModel<number>(), {
//   default: 100
// })

const changeModelValueInChild = () => {
  if (model.value) {
    model.value++;
  }
};

const changeModelTitle = () => {
  title.value += "hello";
};
</script>
<style lang="scss" scoped></style>
