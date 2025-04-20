<template>
  <div class="MyList">
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <slot name="item" :item="item"></slot>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
interface Item {
  id: number;
  name: string;
}

defineProps<{ items: Item[] }>();

const slots = defineSlots<{
  item?: (props: { item: Item }) => any;
}>();
</script>
<style lang="scss" scoped></style>
