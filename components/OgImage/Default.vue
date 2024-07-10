<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <div
    class="h-full w-full flex items-start justify-start border-solid border-brand-light-primary border-[12px] bg-brand-light-100"
  >
    <div class="flex items-start justify-start h-full">
      <div class="flex flex-col justify-between w-full h-full">
        <h1 class="text-[80px] p-20 font-black text-left">
          {{ props.title }}
        </h1>
        <p class="text-2xl pb-10 px-20 font-bold mb-0">pedroruviaro.com.br</p>
      </div>
    </div>
  </div>
</template>
