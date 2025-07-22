<template>
  <div class="text-center text-xs" :style="style">
    <span v-for="i in vote" :key="i">
      <FontAwesomeIcon :icon="faStar" class="text-yellow-400" />
    </span>

    <span v-for="i in 5 - vote" :key="i">
      <FontAwesomeIcon :icon="faStar" class="text-gray-300" />
    </span>
  </div>
</template>

<script setup>
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

const { vote, style } = defineProps({
  vote: Number,
  style: Object,
})

console.log(vote, style)
</script>
