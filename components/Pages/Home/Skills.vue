<script setup lang="ts"></script>

<template>
  <section class="grid gap-4 md:grid-cols-3">
    <BaseCard v-for="i in 3">
      <div class="grid gap-4">
        <div
          class="bg-brand-light-primary w-10 h-10 rounded-full mx-auto"
        ></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          numquam sequi aspernatur ullam deleniti illum quisquam laborum alias
          mollitia quidem, doloremque fuga est consequatur nostrum totam aliquam
          corporis magnam quos!
        </p>
      </div></BaseCard
    >
  </section>
</template>
