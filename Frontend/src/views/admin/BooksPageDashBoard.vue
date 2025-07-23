<template>
  <div class="p-4 pb-0">
    <div
      class="flex h-[595px] flex-col overflow-hidden rounded-lg bg-white shadow"
    >
      <div class="flex items-center justify-between border-b p-4">
        <el-breadcrumb :separator-icon="ArrowRight">
          <div class="flex items-center gap-3">
            <FontAwesomeIcon
              :icon="faArrowLeft"
              v-if="isEntry !== 'home'"
              @click="isEntry = 'home'"
              class="h-5 w-5 cursor-pointer rounded-full border border-[var(--primary-color)] p-1 text-[var(--primary-color)] transition-all hover:border-[var(--secondary-color)] hover:text-[var(--secondary-color)]"
            ></FontAwesomeIcon>
            <el-breadcrumb-item
              @click="isEntry = 'home'"
              :class="isEntry !== 'home' ? 'cursor-pointer' : 'cursor-default'"
            >
              <span
                :class="`text-lg font-bold text-[var(--primary-color)] ${isEntry !== 'home' ? 'transition-all hover:text-[var(--secondary-color)]' : ''}`"
                >Quản lý sách</span
              >
            </el-breadcrumb-item>
            <el-breadcrumb-item v-if="isEntry !== 'home'" class="ml-[-12px]">
              <span class="text-lg text-gray-600">Thông tin {{ idBook }}</span>
            </el-breadcrumb-item>
          </div>
        </el-breadcrumb>
        <div class="flex space-x-2">
          <button
            class="rounded bg-[var(--primary-color)] px-4 py-2 text-sm text-white transition-all hover:bg-[var(--secondary-color)]"
          >
            <FontAwesomeIcon :icon="faPlus" class="mr-1"></FontAwesomeIcon>
            Thêm sách
          </button>
          <div class="relative" v-if="isEntry === 'home'">
            <input
              v-model="search"
              @keyup.enter="handleSearch"
              type="text"
              placeholder="Tìm kiếm sách..."
              class="w-64 rounded border py-2 pl-8 pr-4 text-sm"
            />
            <FontAwesomeIcon
              :icon="faSearch"
              class="absolute left-3 top-3 text-gray-400"
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>

      <TableBooks
        :booksSearch="booksSearch"
        v-if="isEntry === 'home'"
        @to-grandpa="(signal, id) => handleChangeDirect(signal, id)"
      ></TableBooks>

      <InfoBooks
        v-if="isEntry === 'info'"
        :book="bookInfo"
        class="mt-3"
      ></InfoBooks>
    </div>
  </div>
</template>

<script setup>
import TableBooks from "@components/TableBooks/TableBooks.vue"
import {
  faArrowLeft,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { ArrowRight } from "@element-plus/icons-vue"
import { ref, watch } from "vue"
import InfoBooks from "@components/TableBooks/InfoBooks.vue"

const search = ref("")
const api = import.meta.env.VITE_HOST
const booksSearch = ref([])
const bookInfo = ref()

const handleSearch = async () => {
  if (search.value === "") return
  search.value = search.value.toUpperCase()
  const book = await fetch(`${api}books/${search.value}`).then((res) =>
    res.json(),
  )

  search.value = ""
  if (book === null) return

  const idNxb = book.maNXB
  const nxb = await fetch(`${api}publishers/${idNxb}`).then((res) => res.json())

  booksSearch.value = [{ ...book, nxb }]
}

const isEntry = ref("home")
const idBook = ref("")

const handleChangeDirect = (signal, id) => {
  isEntry.value = signal
  idBook.value = id
}

watch(idBook, async () => {
  bookInfo.value = await fetch(`${api}books/${idBook.value}`).then((res) =>
    res.json(),
  )
  const nxb = await fetch(`${api}publishers/${bookInfo.value.maNXB}`).then(
    (res) => res.json(),
  )

  bookInfo.value = { ...bookInfo.value, nxb }

  console.log("bookInfo", bookInfo.value)
})
</script>
