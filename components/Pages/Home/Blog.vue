<script setup lang="ts"></script>

<template>
  <section>
    <div class="grid gap-4 md:grid-cols-3">
      <BaseCard v-for="i in 3" :key="i" as="article">
        <div class="grid gap-4 grid-rows-[max-content_1fr_max-content]">
          <div class="rounded overflow-hidden max-h-32">
            <NuxtImg
              src="/oranges.jpg"
              alt="INSERIR"
              width="640"
              height="427"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div class="grid gap-2">
            <h3 class="font-semibold font-heading text-xl lg:text-2xl">
              Lorem ipsum dolor sit amet consectetur.
            </h3>

            <p class="text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              itaque omnis nihil nesciunt, recusandae, earum.
            </p>
          </div>

          <div>
            <BaseButton size="sm" variant="clean" class="max-w-max"
              >Ler mais</BaseButton
            >
          </div>
        </div>
      </BaseCard>
    </div>
  </section>
</template>
