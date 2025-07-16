<template>
  <div>
    <div
      class="mb-1 flex space-x-3 border-b border-gray-200 bg-white px-5 py-3"
    >
      <div class="w-[90px]">
        <img :src="info?.image[0]" alt="Hình ảnh" />
      </div>
      <div class="flex justify-between text-gray-600">
        <div>
          <h3 class="pr-2">{{ info?.tenSach }}</h3>
          <p class="text-sm">
            <span class="mr-1 mt-2 inline-block text-black">Số lượng:</span>
            {{ book?.soLuong }}
          </p>
        </div>
        <div
          class="cursor-pointer self-start px-1 transition-all hover:text-red-500"
        >
          <FontAwesomeIcon :icon="faTrashAlt"></FontAwesomeIcon>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFetch } from "@/hooks/useFetch"
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { ref, watch } from "vue"

const { book } = defineProps({
  book: Object,
})

const api = import.meta.env.VITE_HOST
const info = ref()

if (book) {
  const { data } = useFetch(`${api}books/${book.maSach}`)
  watch(data, () => (info.value = data.value))
}

setTimeout(() => console.log(info.value), 2000)
</script>
