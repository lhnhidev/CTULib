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
              v-if="isEntry"
              @click="isEntry = false"
              class="h-5 w-5 cursor-pointer rounded-full border border-[var(--primary-color)] p-1 text-[var(--primary-color)] transition-all hover:border-[var(--secondary-color)] hover:text-[var(--secondary-color)]"
            ></FontAwesomeIcon>
            <el-breadcrumb-item @click="isEntry = false" class="cursor-pointer">
              <span
                :class="`text-lg font-bold text-[var(--primary-color)] ${isEntry ? 'transition-all hover:text-[var(--secondary-color)]' : ''}`"
                >Lịch sử mượn sách</span
              >
            </el-breadcrumb-item>
            <el-breadcrumb-item v-if="isEntry" class="ml-[-12px]">
              <span class="text-lg text-gray-600">{{ idForm }}</span>
            </el-breadcrumb-item>
          </div>
        </el-breadcrumb>

        <div class="flex space-x-2">
          <button
            class="rounded bg-[var(--primary-color)] px-4 py-2 text-sm text-white transition-all hover:bg-[var(--secondary-color)]"
          >
            <FontAwesomeIcon
              :icon="faFileExport"
              class="mr-1"
            ></FontAwesomeIcon>
            Xuất Excel
          </button>
          <div class="relative" v-if="!isEntry">
            <input
              v-model="search"
              @keyup.enter="handleSearch"
              type="text"
              placeholder="Tìm kiếm phiếu..."
              class="w-64 rounded border py-2 pl-8 pr-4 text-sm"
            />
            <FontAwesomeIcon
              :icon="faSearch"
              class="absolute left-3 top-3 text-gray-400"
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>

      <TableBorrowingBooks
        :searchHistory="searchHistory"
        @to-grandpa="
          (signal, id) => {
            isEntry = signal
            idForm = id
          }
        "
        v-if="!isEntry"
      ></TableBorrowingBooks>

      <InfoBorrowingForm v-if="isEntry" :idForm="idForm"></InfoBorrowingForm>
    </div>
  </div>
</template>

<script setup>
import TableBorrowingBooks from "@components/TableBorrowingBooks/TableBorrowingBooks.vue"
import {
  faArrowLeft,
  faFileExport,
  faSearch,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { ArrowRight } from "@element-plus/icons-vue"
import { ref } from "vue"
import InfoBorrowingForm from "@components/TableBorrowingBooks/InfoBorrowingForm.vue"

const search = ref("")
const searchHistory = ref([])
const api = import.meta.env.VITE_HOST

const handleSearch = async () => {
  if (search.value === "") return
  const form = await fetch(`${api}borrowing/form/${search.value}`).then((res) =>
    res.json(),
  )
  search.value = ""
  if (form === null) return
  searchHistory.value = [form]
}

const idForm = ref("")
const isEntry = ref(false)
</script>
