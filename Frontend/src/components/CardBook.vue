<template>
  <div class="animate__animated animate__flipInY">
    <div class="group relative aspect-[814/1000]">
      <router-link :to="`/books/${id}`">
        <img
          class="absolute z-20 h-full w-full cursor-pointer transition-opacity duration-700 ease-in-out group-hover:opacity-0"
          :src="image[0]"
          :alt="title"
          @mouseover="(e) => e.target.classList.add('opacity-0')"
          @mouseleave="(e) => e.target.classList.remove('opacity-0')"
        />
        <img class="absolute" :src="image[1]" :alt="title" />
      </router-link>
      <div
        class="absolute bottom-2 right-2 z-30 rounded bg-white px-2 py-1 opacity-0 transition-all duration-300 hover:cursor-pointer hover:text-[var(--secondary-color)] group-hover:opacity-100"
        title="Thêm vào giỏ hàng"
        @click="handleAddBookToCart"
      >
        <FontAwesomeIcon :icon="faCartShopping" />
      </div>
    </div>

    <div class="flex flex-col space-y-2 py-3">
      <!-- Brand -->
      <a href="#" class="inline-block text-center text-sm text-gray-500">{{
        brand
      }}</a>

      <!-- Name -->
      <router-link :to="`/books/${id}`">
        <p
          class="inline-block text-center transition-all hover:text-[var(--primary-color)]"
        >
          {{ title }}
        </p>
      </router-link>

      <RatingStars :vote="vote"></RatingStars>

      <!-- Price -->
      <p class="text-center">{{ formatCurrency(price) }}</p>
    </div>
  </div>
</template>

<script setup>
import { formatCurrency, notifyMessage } from "@/utils"
import RatingStars from "./RatingStars.vue"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

const { image, brand, title, vote, price, id } = defineProps({
  image: Array,
  brand: String,
  title: String,
  vote: Number,
  price: Number,
  id: String,
})

const handleAddBookToCart = async () => {
  const token = localStorage.getItem("token")

  if (!token) {
    notifyMessage(
      "error",
      "bottom-right",
      "Vui lòng đăng nhập tài khoản",
      "Để thực hiện thêm vào giỏ hàng cần đăng nhập trước đó",
    )
    return
  }

  const maDocGia = JSON.parse(atob(token.split(".")[1])).id
  const maSach = id

  const api = import.meta.env.VITE_HOST

  const book = await fetch(`${api}books/${id}`).then((res) => res.json())

  const { message } = await fetch(`${api}cart/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      maDocGia,
      maSach,
      soLuong: 1,
      coSan: book.soQuyen,
    }),
  }).then((res) => res.json())

  if (
    message === "Chưa đăng nhập" ||
    message === "Token không có" ||
    message === "Token không hợp lệ" ||
    message === "Không có quyền truy cập" ||
    message === "Không có quyền user"
  ) {
    notifyMessage(
      "error",
      "bottom-right",
      "Vui lòng đăng nhập tài khoản",
      "Để thực hiện thêm vào giỏ hàng, bạn phải đăng nhập tài khoảng độc giả",
    )
  } else {
    if (message === "Quá số lượng") {
      notifyMessage(
        "error",
        "bottom-right",
        "Quá số lượng có sẵn",
        "Bạn đã thêm tối đa số lượng sản phẩm vào giỏ!",
      )
    } else {
      notifyMessage(
        "success",
        "bottom-right",
        "Thêm vào giỏ hàng thành công",
        "Vui lòng truy cập giỏ hàng để xem chi tiết",
      )
    }
  }
}
</script>
