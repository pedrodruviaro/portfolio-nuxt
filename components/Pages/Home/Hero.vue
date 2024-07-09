<script setup lang="ts"></script>

<template>
  <section class="grid gap-4 md:grid-cols-[1fr_15rem]">
    <BaseCard>
      <template #default>
        <div class="grid gap-4">
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
      </template>
    </BaseCard>

    <BaseCard class="flex flex-col justify-center items-center">
      <div class="overflow-hidden w-[100px] mx-auto rounded-full">
        <NuxtImg
          src="/profile.png"
          alt="Pedro visto de frente"
          loading="lazy"
          decoding="async"
          width="100"
          height="100"
        />
      </div>

      <div class="mt-6 flex gap-2 justify-center items-center text-center">
        <div class="flex justify-center items-center">
          <PhosphorIconCode size="20" color="#303030" />
        </div>
        <div>
          <p class="text-sm">Front End</p>
        </div>
      </div>

      <div class="mt-2 flex gap-2 justify-center items-center text-center">
        <div class="flex justify-center items-center">
          <PhosphorIconMapPin size="20" color="#303030" />
        </div>
        <div>
          <p class="text-sm">RS, Brasil</p>
        </div>
      </div>
    </BaseCard>
  </section>
</template>
