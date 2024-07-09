<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    link?: boolean
    to?: string | object
    variant?: "base" | "clean" | "outlined"
    size?: "sm" | "base"
  }>(),
  {
    link: false,
    to: "/",
    variant: "base",
    size: "base",
  }
)
</script>

<template>
  <button
    class="button"
    :class="[`variant-${props.variant}`, `size-${props.size}`]"
    v-if="!link"
  >
    <slot />
  </button>

  <NuxtLink
    :to="props.to"
    class="button"
    :class="[props.variant, props.size]"
    v-else
  >
    <slot />
  </NuxtLink>
</template>

<style scoped>
.button {
  @apply flex justify-center items-center gap-2 rounded-lg font-semibold transition-all;
}

.variant-base {
  @apply text-brand-light-100 bg-brand-light-primary hover:brightness-105 focus:brightness-105;
}

.variant-clean {
  @apply bg-brand-light-700 text-brand-light-100 hover:brightness-90 focus:brightness-90;
}

.variant-outlined {
  @apply border border-brand-light-primary;
}

.size-base {
  @apply py-3 px-7 text-base;
}

.size-sm {
  @apply font-semibold text-sm py-2 px-5;
}
</style>
