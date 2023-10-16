<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    stroke-linecap="round"
    stroke-linejoin="round"
    v-bind="attrs"
    :style="styles"
    >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
</template>

<script setup lang="ts">
import { computed, useAttrs } from "vue";

defineOptions({ name: "GIconYoutube", inheritAttrs: false });

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