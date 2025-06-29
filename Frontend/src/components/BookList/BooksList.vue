<template>
  <div class="flex gap-8 px-20 py-10">
    <FilterBooks :searchBook="searchBook"></FilterBooks>

    <div class="w-full">
      <BooksListTop
        :totalBook="
          f.length === 0 && books.length === 0
            ? booksData?.length
            : books.length
        "
      ></BooksListTop>

      <div class="grid grid-cols-4 gap-8">
        <div
          v-for="book in f.length === 0 && books.length === 0
            ? booksData?.slice(first, second)
            : books.slice(first, second)"
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
      <div class="mt-3 flex justify-end">
        <PaginationComponent
          :numberOfPage="Math.ceil(books.length / 12)"
          :totalBook="f.length === 0 ? booksData?.length : books.length"
          :resetPage="resetPage"
          @set-not-reset-page="setNotResetPage"
          @page-change="handlePageChange"
        ></PaginationComponent>
      </div>

      <hr class="mt-8" />

      <BooksListBottom></BooksListBottom>
    </div>
  </div>
</template>

<script setup>
import { useFetch } from "@/hooks/useFetch"
import CardBook from "@components/CardBook.vue"
import FilterBooks from "@components/FilterBooks/FilterBooks.vue"
import BooksListTop from "./BooksListTop.vue"
import { provide, ref, watch } from "vue"
import PaginationComponent from "./PaginationComponent.vue"
import BooksListBottom from "./BooksListBottom.vue"

const api = import.meta.env.VITE_HOST
const { data: booksData } = useFetch(`${api}books`)

const books = ref([])
const f = ref([])

const resetPage = ref(false)

const first = ref(0)
const second = ref(12)

const sortState = ref("none")

const searchBook = (text) => {
  resetPage.value = true
  if (text === "") {
    // books.value = booksData.value
    return
  } else {
    books.value = books.value.filter((book) =>
      book.name.trim().toLowerCase().includes(text),
    )
  }
}

const handlePageChange = (page) => {
  first.value = (page - 1) * 12
  second.value = first.value + 12
}

watch(booksData, () => (books.value = booksData.value))

const handleSort = (array, criterion, flag = "number") => {
  array = array.sort((first, second) => {
    if (flag === "number") {
      return first[criterion] - second[criterion]
    } else {
      return first[criterion].localeCompare(second[criterion])
    }
  })
  return array
}

const setNotResetPage = () => (resetPage.value = false)

provide("bindingFilter", (filterCheck) => {
  f.value = filterCheck
  books.value = booksData.value.filter((data) =>
    // data.idFeatures.some((id) => filterCheck.includes(id)),
    filterCheck.every((id) => data.idFeatures.includes(id)),
  )
  sortUseCase(sortState.value)
  // console.log(books.value)
})

const sortUseCase = (sortCheck) => {
  if (sortCheck === "none") return
  let data = books.value
  if (books.value.length === 0) data = booksData.value
  switch (sortCheck) {
    case "ascByName":
      data = handleSort(data, "name", "string")
      break
    case "descByName":
      data = handleSort(data, "name", "string").reverse()
      break
    case "ascByPrice":
      data = handleSort(data, "price")
      break
    case "descByPrice":
      data = handleSort(data, "price").reverse()
      break
    case "new":
      data = handleSort(data, "release").reverse()
      break
    case "old":
      data = handleSort(data, "release")
      break
    default:
      throw new Error("Có lỗi ở select BooksList")
  }

  books.value = data
}

provide("bindingSort", (sortCheck) => {
  sortState.value = sortCheck
  sortUseCase(sortCheck)
})

provide("watchFilter", () => {
  first.value = 0
  second.value = 12
  resetPage.value = true
})
</script>
