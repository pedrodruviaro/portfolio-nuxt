<script setup lang="ts">
useSeoMeta({
  title: "Início",
})

defineOgImageComponent("Default", {
  title: "Início",
})

const { data } = await useAsyncData("blog-posts", () =>
  queryContent("/blog").sort({ date: -1 }).limit(3).find()
)
</script>

<template>
  <div class="grid gap-10 lg:gap-16">
    <PagesHomeHero />
    <PagesHomeSkills />
    <PagesHomeHistory />
    <PagesHomeBlog />

    <div class="hidden">
      <NuxtLink v-for="post in data" :key="post._id" :to="post._path">
        {{ post.title }}
      </NuxtLink>
    </div>
  </div>
</template>
