<template>
  <div :class="isDeleted ? 'hidden' : ''">
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
          @click="
            () => {
              handelDeleteOutCart()
              isDeleted = true
            }
          "
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
import { notifyMessage } from "@utils/index"
import { ref, watch } from "vue"

const { book } = defineProps({
  book: Object,
})

const api = import.meta.env.VITE_HOST
const info = ref()
const isDeleted = ref(false)

if (book) {
  const { data } = useFetch(`${api}books/${book.maSach}`)
  watch(data, () => (info.value = data.value))
}

const handelDeleteOutCart = async () => {
  const token = localStorage.getItem("token")
  const maDocGia = JSON.parse(atob(token.split(".")[1])).id
  const maSach = info.value?.maSach

  const { message } = await fetch(`${api}cart/delete`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      maDocGia,
      maSach,
    }),
  }).then((res) => res.json())

  if (message === "Xóa khỏi giỏ thành công") {
    notifyMessage(
      "success",
      "bottom-left",
      "Xóa khỏi giỏ hàng thành công",
      "Bạn đã thực hiện xóa sản phẩm khỏi giỏ hàng",
    )
  }
}
</script>
