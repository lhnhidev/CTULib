<template>
  <tr>
    <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
      {{ maPhieu }}
    </td>
    <td class="whitespace-nowrap px-6 py-4">
      <div class="flex items-center">
        <div class="h-10 w-10 flex-shrink-0">
          <img :src="user?.avatar" alt="" class="rounded-full" />
        </div>
        <div class="ml-4">
          <div class="text-sm">{{ `${user?.hoLot} ${user?.ten}` }}</div>
          <div class="text-sm text-gray-600">{{ user?.maDocGia }}</div>
        </div>
      </div>
    </td>
    <td class="min-w-[220px] max-w-[315px] px-6 py-4 text-sm text-black">
      {{ book?.tenSach }}
    </td>
    <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
      {{ ngayMuon }}
    </td>
    <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
      {{ ngayTra }}
    </td>
    <td class="whitespace-nowrap px-6 py-4">
      <span
        :class="`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${handleClassTrangThai(trangThai)}`"
        :style="st"
      >
        {{ label.length === 0 ? handleTrangThai(trangThai) : label }}
      </span>
    </td>
    <td class="whitespace-nowrap px-6 py-4 text-sm font-medium">
      <div class="flex items-center justify-center gap-4 text-lg">
        <button class="text-blue-600 transition-all hover:text-blue-900">
          <FontAwesomeIcon :icon="faInfoCircle" title="Xem chi tiết" />
        </button>
        <button
          class="text-green-600 transition-all hover:text-green-900"
          @click="handleSubmitFormBorrowing(true)"
        >
          <FontAwesomeIcon :icon="faCheck" title="Chấp nhận" />
        </button>
        <button
          class="text-red-600 transition-all hover:text-red-900"
          @click="handleSubmitFormBorrowing(false)"
        >
          <FontAwesomeIcon :icon="faTimes" title="Từ chối" />
        </button>
        <button
          class="text-purple-400 transition-all hover:text-purple-900"
          @click="handleReturnBook"
        >
          <FontAwesomeIcon :icon="faBookOpen" title="Xác nhận trả sách" />
        </button>
      </div>
    </td>
  </tr>
</template>

<script setup>
import { useFetch } from "@/hooks/useFetch"
import {
  faBookOpen,
  faCheck,
  faInfoCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { ElMessage, ElMessageBox } from "element-plus"
import { ref } from "vue"

const {
  ghiChu,
  maDocGia,
  maSach,
  ngayDangKyMuon,
  ngayMuon,
  ngayTra,
  soLuongMuon,
  trangThai,
  maPhieu,
} = defineProps({
  ghiChu: String,
  maDocGia: String,
  maSach: String,
  ngayDangKyMuon: String,
  ngayMuon: String,
  ngayTra: String,
  soLuongMuon: Number,
  trangThai: String,
  maPhieu: String,
})

const api = import.meta.env.VITE_HOST
const { data: user } = useFetch(`${api}user/${maDocGia}`)
const { data: book } = useFetch(`${api}books/${maSach}`)
const st = ref({})
const label = ref("")

const handleSubmitFormBorrowing = async (agree) => {
  try {
    ElMessageBox.alert(
      `${agree ? "Bạn đồng ý cho độc giả này mượn sách?" : "Bạn từ chối cho độc giả này mượn sách?"}`,
      "Xác nhận",
      {
        confirmButtonText: `${agree ? "Đồng ý" : "Từ chối"}`,
        callback: async (action) => {
          ElMessage({
            type: `success`,
            message: `Thông báo: ${action === "cancel" ? "Đã hủy thao tác" : agree ? "Chấp nhận thành công" : "Đã từ chối"}`,
          })

          if (action === "cancel") {
            return
          }
          if (agree) {
            await fetch(`${api}borrowing/${maPhieu}`, {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ trangThai: "Đang mượn" }),
            })
            st.value = renderStyle("#409eff", "rgb(235.9,245.3,255)")
            label.value = "Đang mượn"
          } else {
            await fetch(`${api}borrowing/${maPhieu}`, {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ trangThai: "Bị từ chối" }),
            })
            st.value = renderStyle("#f56c6c", "rgb(254,240.3,240.3)")
            label.value = "Đã từ chối"
          }
        },
      },
    )
  } catch (error) {
    throw new Error("Có lỗi tại HeaderComponent.vue", error)
  }
}

const handleReturnBook = async () => {
  try {
    ElMessageBox.alert(`Bạn xác nhận độc giả này đã trả sách?`, "Xác nhận", {
      confirmButtonText: `Xác nhận`,
      callback: async (action) => {
        ElMessage({
          type: `success`,
          message: `Thông báo: ${action === "cancel" ? "Đã hủy thao tác" : "Xác nhận thành công"}`,
        })

        if (action === "cancel") {
          return
        }
        await fetch(`${api}borrowing/${maPhieu}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ trangThai: "Đã trả" }),
        })
        st.value = renderStyle("#67c23a", "rgb(239.8,248.9,235.3)")
        label.value = "Đã trả"
      },
    })
  } catch (error) {
    throw new Error("Có lỗi tại HeaderComponent.vue", error)
  }
}

const handleTrangThai = (tt) => {
  switch (tt) {
    case "Bị từ chối":
      return "Đã từ chối"
    case "Đang mượn":
      return "Đã xác nhận"
    default:
      return tt
  }
}

const handleClassTrangThai = (tt) => {
  switch (tt) {
    case "Đang mượn":
      return "text-[#409eff] bg-[rgb(235.9,245.3,255)]"
    case "Bị từ chối":
      return "text-[#f56c6c] bg-[rgb(254,240.3,240.3)]"
    case "Đã trả":
      return "text-[#67c23a] bg-[rgb(239.8,248.9,235.3)]"
    case "Chờ xác nhận":
      return "text-[#909399] bg-[rgb(243.9,244.2,244.8)]"
  }
}

const renderStyle = (text, bg) => {
  return {
    color: text,
    backgroundColor: bg,
  }
}
</script>
