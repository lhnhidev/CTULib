<template>
  <BreadcrumbComponent
    :title="`Lịch sử`"
    :breadcrumb="[
      { label: 'Trang chủ', path: '/' },
      { label: 'Lịch sử', path: '' },
    ]"
  ></BreadcrumbComponent>
  <div class="px-20 py-10">
    <HistoryBooksTable :books="books"></HistoryBooksTable>
  </div>

  <div class="example-pagination-block">
    <el-pagination
      size="small"
      background
      layout="prev, pager, next"
      :total="totalPage"
      class="justify-center"
      @current-change="handlePageChange"
    />
  </div>
</template>

<script setup>
import BreadcrumbComponent from "@components/BreadcrumbComponent.vue"
import HistoryBooksTable from "@components/HistoryBooks/HistoryBooksTable.vue"
import { ref } from "vue"

const api = import.meta.env.VITE_HOST

const tableData = ref()
const initBooks = ref([])
const books = ref([])
const token = localStorage.getItem("token")

const totalPage = ref(initBooks.value.length)

const handlePageChange = (newPage) => {
  const start = 10 * (newPage - 1)
  const end = 10 * newPage
  console.log(start, end)
  books.value = initBooks.value.slice(
    start,
    initBooks.value.length < end ? initBooks.value.length : end,
  )
}

const main = async () => {
  if (!token) return

  const user = JSON.parse(atob(token.split(".")[1]))
  tableData.value = await fetch(`${api}borrowing/${user.id}`).then((res) =>
    res.json(),
  )

  for (const item of tableData.value) {
    const book = await fetch(`${api}books/${item.maSach}`).then((res) =>
      res.json(),
    )
    initBooks.value.push({ ...book, ...item })
  }

  initBooks.value.sort(
    (a, b) => new Date(b.ngayDangKyMuon) - new Date(a.ngayDangKyMuon),
  )
  books.value = initBooks.value.slice(
    0,
    initBooks.value < 10 ? initBooks.value : 10,
  )
  totalPage.value = initBooks.value.length
}

main()
</script>

<style>
.custome-lable {
  color: white;
  background-color: var(--primary-color) !important;
  font-size: 20px !important;
  padding-bottom: 12px !important;
  padding-top: 12px !important;
}

.padding-30 {
  padding-left: 30px !important;
  padding-right: 30px !important;
}

span.el-table__column-filter-trigger i svg {
  color: white !important;
  margin-left: 8px !important;
  width: 20px !important;
  height: 20px !important;
  font-size: 20px !important;
  vertical-align: middle;
  display: inline-block;
}

span.el-table__column-filter-trigger {
  width: 20px !important;
  height: 20px !important;
}

span.el-table__column-filter-trigger i {
  width: 100% !important;
}

.el-table-filter.el-popper {
  margin-top: 18px !important;
}

.example-pagination-block + .example-pagination-block {
  margin-top: 10px;
}
.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
}
</style>
