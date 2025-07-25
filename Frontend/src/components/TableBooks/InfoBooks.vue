<template>
  <div class="flex gap-24 overflow-auto px-12 py-1">
    <BookImage
      :image="book?.image || []"
      :styleLitileImage="{ width: '80px' }"
      :styleMainImage="{ width: '280px' }"
      :flexCol="true"
    ></BookImage>
    <BookDetails
      :book="book"
      class="mt-3 flex-1"
      :showBookAction="false"
      :theLoaiInline="false"
      :donGiaInlineName="true"
    ></BookDetails>
  </div>
</template>

<script setup>
import BookDetails from "@components/BookDetails/BookDetails.vue"
import BookImage from "@components/BookImage.vue"

const { book } = defineProps({
  book: Object,
})
</script>
