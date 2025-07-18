<template>
  <div class="pt-2">
    <p class="text-3xl font-bold">{{ formatCurrency(book.price) }}</p>
    <p class="mt-3 text-sm text-[var(--primary-color)]">
      <FontAwesomeIcon
        :icon="faTruckFast"
        class="mr-2 text-lg"
      ></FontAwesomeIcon>
      Giao hàng cấp tốc trong khuôn viên trường chỉ 30 phút!
    </p>
    <div class="mt-4 flex gap-5">
      <el-input-number
        v-model="count"
        :min="1"
        :max="book?.soQuyen"
        controls-position="right"
        size="large"
        :style="{
          width: 'unset',
        }"
      />

      <button
        class="block rounded bg-[var(--primary-color)] px-10 py-1 text-white transition-all hover:bg-[var(--secondary-color)]"
        @click="addToCart"
      >
        <FontAwesomeIcon :icon="faCartShopping"></FontAwesomeIcon>
        Thêm vào giỏ hàng
      </button>
    </div>

    <p
      class="mt-2 inline-block cursor-pointer pr-1 text-gray-600 transition-all hover:text-[var(--secondary-color)]"
      @click="
        isUserLoggedIn(
          'error',
          'bottom-right',
          'Vui lòng đăng nhập tài khoản',
          'Để thực hiện thêm vào danh sách yêu thích, bạn phải đăng nhập trước đó',
        )
      "
    >
      <FontAwesomeIcon :icon="faHeart" class="mr-2"></FontAwesomeIcon>
      Thêm vào danh sách yêu thích
    </p>
  </div>
</template>

<script setup>
import {
  faCartShopping,
  faHeart,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { ref } from "vue"
import { formatCurrency, isUserLoggedIn, notifyMessage } from "@utils/index"
import { useRoute } from "vue-router"

const { book } = defineProps({
  book: Object,
})

const count = ref(1)
const api = import.meta.env.VITE_HOST

const route = useRoute()

const addToCart = async () => {
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

  const maSach = route.params.id

  const { message } = await fetch(`${api}cart/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      maDocGia,
      maSach,
      soLuong: count.value,
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
