<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    stroke-linecap="round"
    stroke-linejoin="round"
    v-bind="attrs"
    :style="styles"
    >
    <polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
  </svg>
</template>

<script setup lang="ts">
import { computed, useAttrs } from "vue";

defineOptions({ name: "GIconCheckSquare", inheritAttrs: false });

const $attrs = useAttrs();

const props = defineProps({
  /** icon 大小  */
  size: {
    type: [String, Number],
  },
  /** icon 颜色  */
  color: {
    type: String,
    default: "currentColor",
  },
});

const styles = computed(() => {
  const size = props.size ? { width: props.size, height: props.size } : {};

  const color = { color: props.color };

  return { ...size, ...color };
});

const attrs = {
  viewBox: "0 0 24 24",
  "shape-rendering": "geometricPrecision",
  width: 24,
  height: 24,
  fill: 'none',
  stroke:"currentColor",
  strokeWidth: '1.5',
  ...$attrs,
};
</script>