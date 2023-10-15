import path from "node:path";
import feather from "feather-icons";
import fs from "fs-extra";
import pascalcase from "pascalcase";

const { icons } = feather;

const templateToComponent = (icon) => `<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    stroke-linecap="round"
    stroke-linejoin="round"
    v-bind="attrs"
    :style="styles"
    >
    ${icon.contents}
  </svg>
</template>

<script setup lang="ts">
import { computed, useAttrs } from "vue";

defineOptions({ name: "${icon.pascalCasedComponentName}", inheritAttrs: false });

const $attrs = useAttrs();

const props = defineProps({
  size: {
    type: [String, Number],
  },
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
</script>`;

Object.values(feather.icons).forEach((icon) => {
  icon.pascalCasedComponentName = pascalcase(`g_icon_${icon.name}`);
});

Object.values(icons).forEach((icon) => {
  const component = templateToComponent(icon);

  const filepath = `./src/components/${icon.pascalCasedComponentName}.vue`;

  fs.ensureDir(path.dirname(filepath)).then(() =>
    fs.writeFile(filepath, component, "utf8")
  );
});

const defaults = Object.values(feather.icons)
  .map(
    (icon) =>
      `export { default as ${icon.pascalCasedComponentName} } from './components/${icon.pascalCasedComponentName}.vue'`
  )
  .join("\n\n");

fs.outputFile("./src/index.ts", defaults, "utf8");
