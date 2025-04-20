<template>
  <div>
    <keep-alive>
      <div>
        <div class="LifeCycle">{{ dataValue }}</div>
        <button @click="changeValue">更新数据</button>
        <button @click="makeMistake">创造错误</button>
      </div>
    </keep-alive>
  </div>
</template>
<script lang="ts" setup>
import {
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onErrorCaptured,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from "vue";

// setup充当了onCreated的角色
onBeforeMount(() => {
  console.log("1.onBeforeMount", "LifeCycle.vue::9行");
});
onMounted(() => {
  console.log("2.onMounted", "LifeCycle.vue::12行");
});

const dataValue = ref(0);
const changeValue = () => {
  dataValue.value = 10;
};

onBeforeUpdate((...args: any[]) => {
  console.log("onBeforeUpdate", args, "LifeCycle.vue::15行");
});
onUpdated((...args: any[]) => {
  console.log("onUpdated", args, "LifeCycle.vue::18行");
});

const makeMistake = () => {
  // @ts-ignore
  dataValue.value.name = "xxx";
};
onErrorCaptured((err, instance, info) => {
  const { message, name, stack } = err;
  console.error({ message, name, stack, instance, info });
  console.log(stack,"LifeCycle.vue::53行");
  return false; // 阻止错误进一步传播
});

onActivated(() => {
  console.log("onActivated", "LifeCycle.vue::32行");
});
onDeactivated(() => {
  console.log("onDeactivated", "LifeCycle.vue::32行");
});

onBeforeUnmount(() => {
  console.log("onBeforeUnmount", "LifeCycle.vue::22行");
});
onUnmounted(() => {
  console.log("onUnmounted", "LifeCycle.vue::22行");
});
</script>
<style lang="scss" scoped></style>
