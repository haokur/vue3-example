import { defineAsyncComponent, defineComponent, ref } from "vue";
import LoadingComp from "./LoadingComp.vue";
import ErrorComp from "./ErrorComp.vue";

export const NormalComponent = defineComponent({
  name: "NormalComponent",
  setup() {
    const count = ref(0);
    const handleClick = () => {
      count.value++
    }
    return () => {
      <div>
        <div>{count}</div>
        <button onClick={handleClick}>点击count+1</button>
      </div>
    }
  },
});

export const AsyncComp = defineAsyncComponent({
  loader: () => import("./HeavyComp.vue"),
  loadingComponent: LoadingComp,
  errorComponent: ErrorComp,
  delay: 100, // 延迟 100ms 后显示加载组件
  timeout: 10000, // 超过 10 秒未加载成功视为失败
})