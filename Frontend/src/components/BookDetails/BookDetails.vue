<template>
  <BookTitleAndDescription :book="book"></BookTitleAndDescription>
  <div class="space-y-2">
    <BookInfoDetail :book="book"></BookInfoDetail>
    <BookAction :book="book"></BookAction>
  </div>
</template>

<script setup>
import BookAction from "@components/BookDetails/BookAction.vue"
import BookInfoDetail from "./BookInfoDetail.vue"
import BookTitleAndDescription from "./BookTitleAndDescription.vue"

const { book } = defineProps({
  book: Object,
})
</script>
