<script setup lang="ts">
const currentYear = computed(() => {
  return new Date().getFullYear()
})
</script>

<template>
  <BaseCard as="footer" shadow>
    <div class="flex items-center flex-wrap gap-2 justify-between">
      <div class="flex items-center gap-2 justify-center">
        <NuxtLink
          aria-label="Linkedin"
          to="https://www.linkedin.com/in/pedroruviaro/"
          target="_blank"
          class="p-2 rounded hover:bg-brand-light-200"
        >
          <PhosphorIconLinkedinLogo :size="32" color="#ff793f" />
        </NuxtLink>

        <NuxtLink
          aria-label="Github"
          to="https://github.com/pedrodruviaro"
          target="_blank"
          class="p-2 rounded hover:bg-brand-light-200"
        >
          <PhosphorIconGithubLogo :size="32" color="#ff793f" />
        </NuxtLink>
      </div>

      <p class="text-sm opacity-50">
        &copy; Copyright {{ currentYear }} - pedroruviaro.com.br
      </p>
    </div>
  </BaseCard>
</template>
