<script setup lang="ts">
import {
  LazyPhosphorIconLinkedinLogo,
  LazyPhosphorIconGithubLogo,
} from "#components"
const currentYear = computed(() => {
  return new Date().getFullYear()
})

const socialLinks = [
  {
    component: LazyPhosphorIconLinkedinLogo,
    link: "https://www.linkedin.com/in/pedroruviaro/",
    label: "Linkedin",
  },
  {
    component: LazyPhosphorIconGithubLogo,
    link: "https://github.com/pedrodruviaro",
    label: "Github",
  },
]
</script>

<template>
  <BaseCard as="footer" shadow>
    <div class="flex items-center flex-wrap gap-2 justify-between">
      <div class="flex items-center gap-2 justify-center">
        <NuxtLink
          v-for="link in socialLinks"
          :key="link.label"
          :aria-label="link.label"
          :to="link.link"
          target="_blank"
          class="p-2 rounded hover:bg-brand-light-200"
        >
          <Component :is="link.component" :size="32" color="#ff793f" />
        </NuxtLink>
      </div>

      <p class="text-sm opacity-50">
        &copy; Copyright {{ currentYear }} - pedroruviaro.com.br
      </p>
    </div>
  </BaseCard>
</template>
