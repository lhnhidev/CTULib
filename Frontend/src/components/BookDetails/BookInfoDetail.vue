<template>
  <div class="relative z-0 space-y-1">
    <p>
      Tác giả: <span class="ml-1 text-gray-600">{{ book?.author }}</span>
    </p>
    <p>
      Nhà sản xuất:
      <span class="ml-1 text-gray-600">{{
        book?.nxb?.tenNXB || nxb?.tenNXB || ""
      }}</span>
    </p>
    <p>
      Năm xuất bản:
      <span class="ml-1 text-gray-600">{{ book?.release }}</span>
    </p>
    <p>
      Số lượng có sẵn:
      <span class="ml-1 font-bold text-[var(--secondary-color)]"
        >{{ book?.amount }} quyển</span
      >
    </p>
    <p :class="`flex items-center gap-3 ${theLoaiInline ? 'mb-3' : ''}`">
      <span> Ngôn ngữ có sẵn: </span>
      <img
        :src="`https://flagcdn.com/24x18/${handleLang(book?.lang)}.png`"
        :srcset="`https://flagcdn.com/48x36/${handleLang(book?.lang)}.png 2x,
                    https://flagcdn.com/72x54/${handleLang(book?.lang)}.png 3x`"
        width="24"
        height="18"
        :alt="book?.lang"
        :title="book?.lang"
      />
    </p>
    <div :class="`${theLoaiInline ? 'flex gap-3' : ''}`">
      <p>Thể loại:</p>
      <div :class="`${theLoaiInline ? '' : 'mt-2'} flex w-96 flex-wrap gap-2`">
        <div
          v-for="type in types"
          :key="type"
          class="rounded-sm border-2 border-[var(--secondary-color)] px-2 py-1 text-xs text-gray-600"
        >
          {{ handleNameType(type) }}
        </div>
      </div>
    </div>

    <div class="w-30 absolute right-0 top-0 rounded bg-gray-100 px-4 py-2">
      <img
        :src="nxb?.image || book?.nxb?.image"
        :alt="nxb?.tenNXB || book?.nxb?.tenNXB"
      />
    </div>
  </div>
</template>

<script setup>
import { useFetch } from "@/hooks/useFetch"
import { ref, watch } from "vue"

const { book } = defineProps({
  book: Object,
  theLoaiInline: Boolean,
})

console.log(book)
const types = ref()

watch(
  () => book,
  () => {
    types.value = book?.idFeatures.filter((item) => item.includes("theloai"))
  },
)

types.value = book?.idFeatures.filter((item) => item.includes("theloai"))

const handleNameType = (type) => {
  switch (type) {
    case "theloai01":
      return "Giáo trình"
    case "theloai02":
      return "Kỹ thuật"
    case "theloai03":
      return "Văn học"
    case "theloai04":
      return "Lịch sử và Địa lý"
    case "theloai05":
      return "Tiểu thuyết"
    case "theloai06":
      return "Kỹ năng sống"
    case "theloai07":
      return "Sách tham khảo"
  }
}

const handleLang = (lang) => {
  switch (lang) {
    case "Tiếng Việt":
      return "vn"
    case "Tiếng Anh":
      return "gb"
    case "Tiếng Trung":
      return "cn"
    case "Tiếng Nhật":
      return "jp"
    case "Tiếng Hàn":
      return "kr"
    default:
      return "vn"
  }
}

const api = import.meta.env.VITE_HOST
const { data: nxb } = useFetch(`${api}publishers/${book?.publisher}`)
</script>
