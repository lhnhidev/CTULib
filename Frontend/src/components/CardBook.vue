<template>
  <div class="animate__animated animate__flipInY">
    <div class="relative aspect-[814/1000]">
      <router-link :to="`/books/${id}`">
        <img
          class="absolute z-10 cursor-pointer transition-all duration-700 ease-in-out"
          :src="image[0]"
          :alt="title"
          @mouseover="(e) => e.target.classList.add('opacity-0')"
          @mouseleave="(e) => e.target.classList.remove('opacity-0')"
        />
        <img class="absolute" :src="image[1]" :alt="title" />
      </router-link>
    </div>

    <div class="flex flex-col space-y-2 py-3">
      <!-- Brand -->
      <a href="#" class="inline-block text-center text-sm text-gray-500">{{
        brand
      }}</a>

      <!-- Name -->
      <router-link :to="`/books/${id}`">
        <p
          class="inline-block text-center transition-all hover:text-[var(--primary-color)]"
        >
          {{ title }}
        </p>
      </router-link>

      <RatingStars :vote="vote"></RatingStars>

      <!-- Price -->
      <p class="text-center">{{ formatCurrency(price) }}</p>
    </div>
  </div>
</template>

<script setup>
import { formatCurrency } from "@/utils"
import RatingStars from "./RatingStars.vue"

defineProps({
  image: Array,
  brand: String,
  title: String,
  vote: Number,
  price: Number,
  id: String,
})
</script>
