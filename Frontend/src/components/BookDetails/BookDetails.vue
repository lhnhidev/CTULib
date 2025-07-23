<template>
  <div>
    <BookTitleAndDescription
      :book="book"
      :donGiaInlineName="donGiaInlineName"
    ></BookTitleAndDescription>
    <div class="space-y-2">
      <BookInfoDetail
        :book="book"
        :theLoaiInline="theLoaiInline"
      ></BookInfoDetail>
      <BookAction :book="book" v-if="showBookAction"></BookAction>
    </div>
  </div>
</template>

<script setup>
import BookAction from "@components/BookDetails/BookAction.vue"
import BookInfoDetail from "./BookInfoDetail.vue"
import BookTitleAndDescription from "./BookTitleAndDescription.vue"

const { book } = defineProps({
  book: Object,
  showBookAction: Boolean,
  theLoaiInline: Boolean,
  donGiaInlineName: Boolean,
})
</script>
