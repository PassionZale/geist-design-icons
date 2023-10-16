<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    stroke-linecap="round"
    stroke-linejoin="round"
    v-bind="attrs"
    :style="styles"
    >
    <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
  </svg>
</template>

<script setup lang="ts">
import { computed, useAttrs } from "vue";

defineOptions({ name: "GIconNavigation", inheritAttrs: false });

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