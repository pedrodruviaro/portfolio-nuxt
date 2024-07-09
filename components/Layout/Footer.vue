<script setup lang="ts">
import {
  LazyPhosphorIconLinkedinLogo,
  LazyPhosphorIconGithubLogo,
  componentNames,
} from "#components"
const currentYear = computed(() => {
  return new Date().getFullYear()
})

const socialLinks = [
  {
    component: LazyPhosphorIconLinkedinLogo,
    link: "#",
    label: "Linkedin",
  },
  {
    component: LazyPhosphorIconGithubLogo,
    link: "#",
    label: "github",
  },
]
</script>

<template>
  <BaseCard as="footer" shadow>
    <div class="flex items-center flex-wrap gap-2 justify-between">
      <p class="text-sm opacity-50">
        &copy; Copyright {{ currentYear }} - pedroruviaro.com.br
      </p>

      <div class="flex items-center gap-2 justify-center">
        <NuxtLink
          v-for="link in socialLinks"
          :key="link.label"
          :aria-label="link.label"
          :to="link.link"
          target="_blank"
        >
          <Component :is="link.component" :size="32" color="#303030" />
        </NuxtLink>
      </div>
    </div>
  </BaseCard>
</template>
