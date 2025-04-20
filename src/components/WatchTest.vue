<template>
  <div class="WatchTest">
    <div>{{ count }}</div>
    <button @click="changeCount">ChangeCount</button>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref, toRaw, watch, watchEffect } from "vue";

const count = ref(0);
const changeCount = () => {
  count.value++;
};
watch(count, (newVal, oldVal) => {
  console.log(newVal, oldVal, "WatchTest.vue::14行");
});
// watch(count.value, (newVal, oldVal) => {
//   console.log(newVal, oldVal, "WatchTest.vue::14行");
// });
watch(
  () => count.value,
  (newVal, oldValue) => {
    console.log(newVal, oldValue, "WatchTest.vue::18行");
  }
);

const price = ref(0);
watch([count, price], (newVal, oldVal) => {
  console.log(newVal, oldVal, "WatchTest.vue::29行");
});
watch([() => count.value, () => price.value], (newVal, oldVal) => {
  console.log(newVal, oldVal, "WatchTest.vue::32行");
});

watch([() => count, () => price], (newVal, oldVal) => {
  console.log(newVal, oldVal, "WatchTest.vue::36行");
});

const useInfo = ref({ name: "jack" });
watch(useInfo.value, (newVal, oldVal) => {
  console.log(JSON.stringify(newVal), JSON.stringify(oldVal), "WatchTest.vue::41行");
});
setTimeout(() => {
  useInfo.value.name = "bob";
}, 1000);

const user = reactive({ name: "jack" });
watch(user, (newVal, oldVal) => {
  console.log(newVal, oldVal, "WatchTest.vue::49行");
});
setTimeout(() => {
  user.name = "john";
}, 1000);

watch(
  () => user.name,
  (newVal, oldVal) => {
    console.log(newVal, oldVal, "WatchTest.vue::56行");
  }
);
const user2 = reactive({ name: "jack" });
watch([() => user.name, () => user2.name, () => useInfo.value.name], (newVal, oldVal) => {
  console.log(newVal, oldVal, "WatchTest.vue::62行");
});

// immediate，立即执行一次
const count2 = ref(10);
watch(
  count2,
  (newVal, oldVal) => {
    console.log(newVal, oldVal, "WatchTest.vue::69行");
  },
  { immediate: true }
);

const user3 = ref({ name: "bob" });
setTimeout(() => {
  user3.value.name = "john";
}, 1000);
watch(
  user3,
  (newVal, oldVal) => {
    console.log(newVal, oldVal, "WatchTest.vue::81行");
  },
  { deep: false }
);
watch(
  user3,
  (newVal, oldVal) => {
    console.log(newVal, oldVal, "WatchTest.vue::90行");
  },
  { deep: true }
);

const stop = watch(count, (newVal, _oldVal) => {
  if (newVal > 5) {
    stop();
  } else {
    console.log("stop not happen newVal is ", newVal, "WatchTest.vue::99行");
  }
});

const stopWatch = watchEffect(() => {
  console.log(count.value, "WatchTest.vue::105行");
  if (count.value > 10) {
    stopWatch();
  }
}, {});

const stopWatch2 = watchEffect(
  () => {
    console.log(count.value, "WatchTest.vue::105行");
    if (count.value > 10) {
      stopWatch2();
    }
  },
  {
    flush: "post", // 副作用执行的时机 默认为pre
  }
);

watchEffect((cleanUp) => {
  console.log(count.value, "WatchTest.vue::111行");
  const timer = setTimeout(() => {
    console.log("执行到定时器", "WatchTest.vue::113行");
  }, 1000);
  cleanUp(() => {
    console.log("执行清理", "WatchTest.vue::114行");
    clearTimeout(timer);
  });
}, {});
</script>
<style lang="scss" scoped></style>
