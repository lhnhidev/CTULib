<template>
  <div class="flex h-[595px] flex-col overflow-hidden">
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead class="bg-[var(--primary-color)]">
          <tr>
            <th
              class="w-[140px] px-6 py-3 text-left text-xs uppercase tracking-wider text-white"
            >
              Mã sách
            </th>
            <th
              class="min-w-[220px] max-w-[315px] px-6 py-3 text-center text-xs uppercase tracking-wider text-white"
            >
              Sách
            </th>
            <th
              class="w-[180px] px-6 py-3 text-left text-xs uppercase tracking-wider text-white"
            >
              Tác giả
            </th>
            <th
              class="w-[180px] px-6 py-3 text-left text-xs uppercase tracking-wider text-white"
            >
              Nhà xuất bản
            </th>
            <th
              class="w-[130px] px-6 py-3 text-center text-xs uppercase tracking-wider text-white"
            >
              Số lượng
            </th>
            <th
              class="w-[170px] px-6 py-3 text-center text-xs uppercase tracking-wider text-white"
            >
              Tùy chọn
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
          <TableRowBooks
            v-for="book in books"
            :key="book._id"
            :book="book"
            @to-parent="
              (signal, id) => {
                emit('toGrandpa', signal, id)
              }
            "
          ></TableRowBooks>
        </tbody>
      </table>
    </div>

    <div
      class="mt-auto flex items-center justify-between border-t border-gray-200 px-6 py-3"
    >
      <div>
        <p class="text-sm text-black">
          Hiển thị {{ start }} đến {{ end }} trong {{ allBooks?.length }} kết
          quả
        </p>
      </div>
      <div>
        <el-pagination
          size="small"
          background
          layout="prev, pager, next"
          :page-size="amountOfDisplay"
          :total="allBooks?.length"
          @current-change="handlePageChange"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFetch } from "@/hooks/useFetch"
import { ref, watch } from "vue"
import TableRowBooks from "./TableRowBooks.vue"

const { booksSearch } = defineProps({
  booksSearch: Array,
})

const amountOfDisplay = 6
const start = ref(1)
const end = ref(amountOfDisplay)

const api = import.meta.env.VITE_HOST

const { data: allBooks } = useFetch(`${api}books`)
const { data: booksInit } = useFetch(
  `${api}books/page?start=${start.value}&end=${end.value}`,
)

const books = ref([])

watch(booksInit, () => {
  booksInit.value?.forEach(async (item) => {
    const idNxb = item.maNXB
    const nxb = await fetch(`${api}publishers/${idNxb}`).then((res) =>
      res.json(),
    )
    books.value = [...books.value, { ...item, nxb }]
  })
})

watch(
  () => booksSearch,
  () => {
    if (booksSearch.length === 0) return
    books.value = booksSearch
  },
)

const handlePageChange = async (page) => {
  start.value = (page - 1) * amountOfDisplay + 1
  end.value = start.value + amountOfDisplay - 1
  if (end.value > allBooks.value.length) end.value = allBooks.value.length
  books.value = []
  booksInit.value = await fetch(
    `${api}books/page?start=${start.value}&end=${end.value}`,
  ).then((res) => res.json())
}

const emit = defineEmits(["toGrandpa"])
</script>
