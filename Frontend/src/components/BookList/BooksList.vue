<template>
  <div class="flex gap-8 px-20 py-10">
    <FilterBooks></FilterBooks>

    <div>
      <BooksListTop></BooksListTop>

      <div class="grid grid-cols-4 gap-8">
        <div
          v-for="book in f.length === 0 ? booksData : books"
          :key="book._id"
          class="h-[456px] w-60"
        >
          <CardBook
            :key="book._id"
            :image="book.image"
            :brand="book.brand"
            :title="book.name"
            :vote="book.vote"
            :price="book.price"
          ></CardBook>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFetch } from "@/hooks/useFetch"
import CardBook from "@components/CardBook.vue"
import FilterBooks from "@components/FilterBooks/FilterBooks.vue"
import BooksListTop from "./BooksListTop.vue"
import { provide, ref } from "vue"

const api = import.meta.env.VITE_HOST
const { data: booksData } = useFetch(`${api}books`)

const books = ref([])
const f = ref([])

// const books = ref(booksData.value)
console.log(books.value)

provide("bindingFilter", (filterCheck) => {
  f.value = filterCheck
  books.value = booksData.value.filter(
    (data) => data.idFeatures.some((id) => filterCheck.includes(id)),
    // filterCheck.every((id) => data.idFeatures.includes(id)),
  )
  console.log(books.value)
})
</script>
