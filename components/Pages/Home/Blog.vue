<script setup lang="ts"></script>

<template>
  <section class="grid gap-4">
    <div>
      <h2
        class="font-bold font-heading text-3xl lg:text-4xl text-center text-balance"
      >
        Alguns conteúdos
      </h2>
      <div class="block max-w-[150px] mx-auto">
        <svg
          class="block w-full mx-auto max-w-max"
          width="454"
          height="34"
          viewBox="0 0 454 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.42273 32.3434C57.0677 32.3434 113.216 18.2353 167.302 11.3968C171.125 10.9135 232.397 -1.69242 235.528 3.31738C236.345 4.62477 221.529 12.4296 220.567 12.893C211.355 17.3281 201.032 19.7756 191.541 23.6655C182.893 27.2095 178.838 27.3941 191.84 26.3586C278.686 19.4417 365.638 12.8998 452.176 2.7189"
            stroke="#FF793F"
            stroke-width="5"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>

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
