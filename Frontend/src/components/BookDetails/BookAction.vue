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
      <div class="flex">
        <input
          class="flex h-12 w-12 appearance-none items-center justify-center border pl-3 [moz-appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          :value="count"
          type="number"
        />
        <div class="flex flex-col">
          <button
            class="flex h-6 w-6 cursor-pointer items-center justify-center border transition-all hover:bg-[var(--secondary-color)] hover:text-white"
            @click="
              () => {
                if (count === book.amount) return
                count++
              }
            "
          >
            +
          </button>
          <button
            class="flex h-6 w-6 cursor-pointer items-center justify-center border transition-all hover:bg-[var(--secondary-color)] hover:text-white"
            @click="
              () => {
                if (count == 1) return
                count--
              }
            "
          >
            -
          </button>
        </div>
      </div>

      <button
        class="block rounded bg-[var(--primary-color)] px-10 py-1 text-white transition-all hover:bg-[var(--secondary-color)]"
        @click="
          isUserLoggedIn(
            'error',
            'bottom-right',
            'Vui lòng đăng nhập tài khoản',
            'Để thực hiện thêm vào giỏ hàng, bạn phải đăng nhập trước đó',
          )
        "
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
import { formatCurrency, isUserLoggedIn } from "@utils/index"

const { book } = defineProps({
  book: Object,
})

const count = ref(1)
</script>
