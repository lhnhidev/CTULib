<template>
  <div class="p-4 pb-0">
    <div class="overflow-hidden rounded-lg bg-white shadow">
      <div class="flex items-center justify-between border-b p-4">
        <h3 class="text-lg font-bold text-[var(--primary-color)]">
          Lịch sử mượn sách
        </h3>
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
          <div class="relative">
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

      <div>
        <table class="w-full">
          <thead class="bg-[var(--primary-color)]">
            <tr>
              <th
                class="w-[140px] px-6 py-3 text-left text-xs uppercase tracking-wider text-white"
              >
                Mã phiếu
              </th>
              <th
                class="w-[190px] px-6 py-3 text-left text-xs uppercase tracking-wider text-white"
              >
                Người mượn
              </th>
              <th
                class="min-w-[220px] max-w-[315px] px-6 py-3 text-center text-xs uppercase tracking-wider text-white"
              >
                Sách
              </th>
              <th
                class="w-[130px] px-6 py-3 text-left text-xs uppercase tracking-wider text-white"
              >
                Ngày mượn
              </th>
              <th
                class="w-[130px] px-6 py-3 text-left text-xs uppercase tracking-wider text-white"
              >
                Ngày trả
              </th>
              <th
                class="w-[130px] px-6 py-3 text-left text-xs uppercase tracking-wider text-white"
              >
                Trạng thái
              </th>
              <th
                class="w-[170px] px-6 py-3 text-center text-xs uppercase tracking-wider text-white"
              >
                Tùy chọn
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 bg-white">
            <TableRowAdmin
              v-for="item in history"
              :key="item._id"
              :ghiChu="item.ghiChu"
              :maDocGia="item.maDocGia"
              :maSach="item.maSach"
              :ngayDangKyMuon="item.ngayDangKyMuon"
              :ngayMuon="item.ngayMuon"
              :ngayTra="item.ngayTra"
              :soLuongMuon="item.soLuongMuon"
              :trangThai="item.trangThai"
              :maPhieu="item.maPhieu"
            ></TableRowAdmin>
          </tbody>
        </table>
      </div>

      <div
        class="flex items-center justify-between border-t border-gray-200 px-6 py-3"
      >
        <div>
          <p class="text-sm text-black">
            Hiển thị {{ start }} đến {{ end }} trong
            {{ historyInit?.length }} kết quả
          </p>
        </div>
        <div>
          <el-pagination
            size="small"
            background
            layout="prev, pager, next"
            :page-size="amountOfDisplay"
            :total="historyInit?.length"
            @current-change="handlePageChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFetch } from "@/hooks/useFetch"
import TableRowAdmin from "@components/TableRowAdmin.vue"
import { faFileExport, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { ref } from "vue"

const amountOfDisplay = 6
const start = ref(1)
const end = ref(amountOfDisplay)
const search = ref("")

const api = import.meta.env.VITE_HOST
const { data: historyInit } = useFetch(`${api}borrowing`)
const { data: history } = useFetch(
  `${api}borrowing/page?start=${start.value}&end=${end.value}`,
)

const handlePageChange = async (page) => {
  start.value = (page - 1) * amountOfDisplay + 1
  end.value = start.value + amountOfDisplay - 1
  if (end.value > historyInit.value.length) end.value = historyInit.value.length
  history.value = await fetch(
    `${api}borrowing/page?start=${start.value}&end=${end.value}`,
  ).then((res) => res.json())
}

const handleSearch = async () => {
  if (search.value === "") return
  const form = await fetch(`${api}borrowing/form/${search.value}`).then((res) =>
    res.json(),
  )
  search.value = ""
  if (form === null) return
  history.value = [form]
}
</script>
