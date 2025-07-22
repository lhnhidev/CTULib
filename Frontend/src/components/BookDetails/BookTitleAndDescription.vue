<template>
  <div class="flex items-center gap-2">
    <RatingStars
      :vote="book.vote"
      :style="{ textAlign: 'left', fontSize: '16px' }"
    ></RatingStars>
    <p class="text-md text-yellow-400 underline">
      {{ book.vote }} {{ book.vote === 1 ? "star" : "stars" }}
    </p>
  </div>
  <div>
    <h2 class="my-3 text-3xl text-[var(--primary-color)]">
      {{ book.maSach + " - " + book.name }}
    </h2>
    <p
      v-html="book.desc"
      class="line-clamp-3 space-y-2 text-justify text-gray-600"
    ></p>
    <hr class="my-4" />
  </div>
</template>

<script setup>
import RatingStars from "@components/RatingStars.vue"

const { book } = defineProps({
  book: Object,
})
</script>
