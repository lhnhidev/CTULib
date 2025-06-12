<template>
  <div>
    <div class="relative aspect-[814/1000]">
      <img
        class="absolute z-10 cursor-pointer transition-all duration-700 ease-in-out"
        :src="image[0]"
        :alt="title"
        @mouseover="(e) => e.target.classList.add('opacity-0')"
        @mouseleave="(e) => e.target.classList.remove('opacity-0')"
      />

      <img class="absolute" :src="image[1]" :alt="title" />
    </div>

    <div class="flex flex-col space-y-2 py-3">
      <!-- Brand -->
      <a href="#" class="inline-block text-center text-sm text-gray-500">{{
        brand
      }}</a>

      <!-- Name -->
      <a
        href="#"
        class="inline-block text-center transition-all hover:text-[var(--primary-color)]"
        >{{ title }}</a
      >

      <!-- Vote -->
      <div class="text-center text-xs">
        <span v-for="i in vote" :key="i">
          <FontAwesomeIcon :icon="faStar" class="text-yellow-400" />
        </span>

        <span v-for="i in 5 - vote" :key="i">
          <FontAwesomeIcon :icon="faStar" class="text-gray-300" />
        </span>
      </div>

      <!-- Price -->
      <p class="text-center">{{ formatCurrency(price) }}</p>
    </div>
  </div>
</template>

<script setup>
import { formatCurrency } from "@/utils"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

defineProps({
  image: Array,
  brand: String,
  title: String,
  vote: Number,
  price: Number,
})
</script>
