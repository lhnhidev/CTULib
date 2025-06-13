<template>
  <div class="relative w-full">
    <BannerComponent
      src="/banner-1.jpg"
      alt="banner-1"
      :price="80"
      name="The All Souls Trilogy Boxed"
      author="Deborah Harkness"
    />

    <div class="absolute bottom-5 right-6">
      <div class="flex gap-2">
        <div class="w-10 cursor-pointer border-[3px] border-gray-400"></div>
        <div class="w-10 cursor-pointer border-[3px] border-gray-400"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BannerComponent from "./BannerComponent.vue"
</script>
