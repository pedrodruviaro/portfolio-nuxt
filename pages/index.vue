<script setup lang="ts"></script>

<template>
  <div class="grid gap-10">
    <section class="grid gap-4 md:grid-cols-[1fr_15rem]">
      <BaseCard>
        <template #default>
          <div class="grid gap-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              numquam sequi aspernatur ullam deleniti illum quisquam laborum
              alias mollitia quidem, doloremque fuga est consequatur nostrum
              totam aliquam corporis magnam quos!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              numquam sequi aspernatur ullam deleniti illum quisquam laborum
              alias mollitia quidem, doloremque fuga est consequatur nostrum
              totam aliquam corporis magnam quos!
            </p>
          </div>
        </template>
      </BaseCard>
      <BaseCard />
    </section>

    <section class="grid gap-4 md:grid-cols-3">
      <BaseCard v-for="i in 3">
        <div class="grid gap-4">
          <div
            class="bg-brand-light-primary w-10 h-10 rounded-full mx-auto"
          ></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            numquam sequi aspernatur ullam deleniti illum quisquam laborum alias
            mollitia quidem, doloremque fuga est consequatur nostrum totam
            aliquam corporis magnam quos!
          </p>
        </div></BaseCard
      >
    </section>

    <section class="grid gap-4 md:grid-cols-[15rem_1fr]">
      <BaseCard />
      <BaseCard>
        <div class="grid gap-2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            numquam sequi aspernatur ullam deleniti illum quisquam laborum alias
            mollitia quidem, doloremque fuga est consequatur nostrum totam
            aliquam corporis magnam quos!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            numquam sequi aspernatur ullam deleniti illum quisquam laborum alias
            mollitia quidem, doloremque fuga est consequatur nostrum totam
            aliquam corporis magnam quos!
          </p>
        </div>
      </BaseCard>
    </section>
  </div>
</template>
