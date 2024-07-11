<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: "pt-BR",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],

  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - pedroruviaro` : "pedroruviaro"
  },
})
</script>

<template>
  <lenis :options="{ syncTouch: false }">
    <NuxtLayout>
      <NuxtLoadingIndicator :height="4" color="#ff793f" />
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
