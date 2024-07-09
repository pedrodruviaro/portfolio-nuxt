<script setup lang="ts"></script>

<template>
  <section class="grid gap-4">
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
