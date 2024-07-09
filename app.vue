<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: "pt-BR",
  },

  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - pedroruviaro` : "pedroruviaro"
  },
})
</script>

<template>
  <lenis :options="{ syncTouch: false }">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </lenis>
</template>

<style>
html,
body {
  @apply bg-brand-light-200 min-h-screen text-brand-light-700 font-base;
}

body {
  background-image: url("~/assets/images/noise.svg");
  background-size: contain;
  background-repeat: repeat;
}
</style>
