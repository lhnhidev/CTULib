<template>
  <div class="min-h-60 space-y-2 bg-white px-8 py-7 text-center">
    <div class="text-yellow-400">
      <span v-for="i in vote" :key="i">
        <FontAwesomeIcon :icon="faStar" />
      </span>
    </div>

    <div class="space-y-2">
      <h3 class="text-xl uppercase">{{ comment }}</h3>
      <p class="text-gray-500">{{ desc }}</p>
    </div>

    <h2 class="text-xl uppercase">{{ user }}</h2>
  </div>
</template>

<script setup>
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

const { vote, comment, desc, user } = defineProps({
  vote: Number,
  comment: String,
  desc: String,
  user: String,
})
</script>
