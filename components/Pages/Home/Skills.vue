<script setup lang="ts"></script>

<template>
  <section class="grid gap-4">
    <div>
      <h2
        class="font-bold font-heading text-3xl lg:text-4xl text-center text-balance"
      >
        O que eu faço
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
      <BaseCard v-for="i in 3" :key="i">
        <div class="grid gap-4">
          <div class="flex justify-center mb-2">
            <PhosphorIconAcorn size="40" color="#ff793f" />
          </div>
          <div class="text-center grid gap-2">
            <h3 class="font-bold font-heading text-2xl lg:text-3xl">
              Serviço {{ i }}
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              numquam sequi aspernatur ullam deleniti illum quisquam laborum
              alias mollitia quidem, doloremque fuga est consequatur nostrum
              totam aliquam corporis magnam quos!
            </p>
          </div>
        </div>
      </BaseCard>
    </div>
  </section>
</template>
