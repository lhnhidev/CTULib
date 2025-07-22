<template>
  <div class="flex flex-col">
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
          @to-parent="(signal) => emit('toGrandpa', signal, item.maPhieu)"
        ></TableRowAdmin>
      </tbody>
    </table>
  </div>
  <div
    class="mt-auto flex items-center justify-between border-t border-gray-200 px-6 py-3"
  >
    <div>
      <p class="text-sm text-black">
        Hiển thị {{ start }} đến {{ end }} trong {{ historyInit?.length }} kết
        quả
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
</template>

<script setup>
import { useFetch } from "@/hooks/useFetch"
import TableRowAdmin from "@components/TableBorrowingBooks/TableRowAdmin.vue"
import { ref, watch } from "vue"

const { searchHistory } = defineProps({
  searchHistory: Array,
})

const amountOfDisplay = 6
const start = ref(1)
const end = ref(amountOfDisplay)

const api = import.meta.env.VITE_HOST
const { data: historyInit } = useFetch(`${api}borrowing`)
const { data: history } = useFetch(
  `${api}borrowing/page?start=${start.value}&end=${end.value}`,
)

watch(
  () => searchHistory,
  () => {
    if (searchHistory.length != 0) {
      history.value = searchHistory
    }
  },
)

const handlePageChange = async (page) => {
  start.value = (page - 1) * amountOfDisplay + 1
  end.value = start.value + amountOfDisplay - 1
  if (end.value > historyInit.value.length) end.value = historyInit.value.length
  history.value = await fetch(
    `${api}borrowing/page?start=${start.value}&end=${end.value}`,
  ).then((res) => res.json())
}

const emit = defineEmits(["toGrandpa"])
</script>
