<template>
  <table>
    <tr v-for="row in rows" :key="row.id">
      <td>
        <slot name="row" :row="row" />
      </td>
    </tr>
  </table>
</template>

<script setup lang="ts">
interface RowData {
  id: number;
  name: string;
  age: number;
}

// 定义 props
defineProps<{
  rows: RowData[];
}>();

// 定义插槽类型
const slots = defineSlots<{
  row?: (props: { row: RowData }) => any;
}>();
</script>
