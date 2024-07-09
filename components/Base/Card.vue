<script setup lang="ts">
const props = withDefaults(defineProps<{ as?: string; shadow?: boolean }>(), {
  as: "div",
  shadow: false,
})
</script>

<template>
  <Component
    :is="props.as"
    class="block p-6 bg-brand-light-100 border border-[#3D424B20] rounded-lg"
    :class="{ 'shadow-[0px_4px_40px_rgba(0,0,0,0.08)]': props.shadow }"
  >
    <div v-if="$slots.title">
      <slot name="title" />
    </div>

    <div>
      <slot />
    </div>
  </Component>
</template>
