<template>
  <div class="p-4 pb-0">
    <div
      class="flex h-[595px] flex-col overflow-hidden rounded-lg bg-white shadow"
    >
      <div class="flex items-center justify-between border-b p-4">
        <h3 class="text-lg font-bold text-[var(--primary-color)]">
          Quản lý sách
        </h3>
        <div class="flex space-x-2">
          <button
            class="rounded bg-[var(--primary-color)] px-4 py-2 text-sm text-white transition-all hover:bg-[var(--secondary-color)]"
          >
            <FontAwesomeIcon :icon="faPlus" class="mr-1"></FontAwesomeIcon>
            Thêm sách
          </button>
          <div class="relative">
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
            <tr v-for="book in books" :key="book.maSach">
              <td class="px-6 py-4 text-sm text-gray-600">
                {{ book?.maSach }}
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <div class="h-10 w-10 flex-shrink-0">
                    <img
                      :alt="book?.tenSach"
                      :src="book.image[1] || book.image[0]"
                      class="rounded"
                    />
                  </div>
                  <div class="ml-4">
                    <div class="text-sm text-black">
                      {{ book?.tenSach }}
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 text-sm text-black">{{ book?.author }}</td>
              <td class="px-6 py-4 text-sm text-gray-600">
                {{ book?.nxb.tenNXB }}
              </td>
              <td class="px-6 py-4 text-center text-sm text-gray-600">
                {{ book?.soQuyen }}
              </td>
              <td class="px-6 py-4 text-lg">
                <div class="flex items-center justify-center gap-4">
                  <button
                    class="text-blue-600 transition-all hover:text-blue-900"
                  >
                    <FontAwesomeIcon
                      :icon="faInfoCircle"
                      title="Xem chi tiết"
                    />
                  </button>
                  <button
                    class="text-green-600 transition-all hover:text-green-900"
                  >
                    <FontAwesomeIcon :icon="faPen" title="Chỉnh sửa" />
                  </button>
                  <button
                    class="text-red-600 transition-all hover:text-red-900"
                  >
                    <FontAwesomeIcon :icon="faTrashAlt" title="Xóa bỏ" />
                  </button>
                </div>
              </td>
            </tr>
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
  </div>
</template>

<script setup>
import { useFetch } from "@/hooks/useFetch"
import {
  faInfoCircle,
  faPen,
  faPlus,
  faSearch,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { ref, watch } from "vue"

const amountOfDisplay = 6
const start = ref(1)
const end = ref(amountOfDisplay)
const search = ref("")

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

const handleSearch = async () => {
  if (search.value === "") return
  const book = await fetch(`${api}books/${search.value}`).then((res) =>
    res.json(),
  )

  console.log(book)
  search.value = ""
  if (book === null) return

  const idNxb = book.maNXB
  const nxb = await fetch(`${api}publishers/${idNxb}`).then((res) => res.json())

  books.value = [{ ...book, nxb }]
}

const handlePageChange = async (page) => {
  start.value = (page - 1) * amountOfDisplay + 1
  end.value = start.value + amountOfDisplay - 1
  if (end.value > allBooks.value.length) end.value = allBooks.value.length
  books.value = []
  booksInit.value = await fetch(
    `${api}books/page?start=${start.value}&end=${end.value}`,
  ).then((res) => res.json())
}
</script>
