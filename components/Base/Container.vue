<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    as?: string
  }>(),
  {
    as: "div",
  }
)
</script>

<template>
  <Component
    :is="props.as"
    class="w-full max-w-[68.75rem] mx-auto px-4 lg:px-5"
  >
    <slot />
  </Component>
</template>
