<template>
  <div>
    <img :src="image[0]" alt="" />

    <div class="space-y-2 py-3">
      <!-- Brand -->
      <p class="text-center text-sm text-gray-500">{{ brand }}</p>

      <!-- Name -->
      <p class="text-center">
        {{ title }}
      </p>

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
      <p class="text-center">$55.00</p>
    </div>
  </div>
</template>

<script setup>
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
