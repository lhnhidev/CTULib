<template>
  <div
    :key="showCartSideBar"
    class="fixed bottom-0 left-0 right-0 top-0 z-[100]"
  >
    <div
      ref="outBackground"
      class="animate__animated animate__fadeIn h-full w-full bg-black/40"
      @click="handle"
    ></div>

    <div
      ref="sidebar"
      class="animate__animated animate__fadeInRight fixed bottom-0 right-0 top-0 z-[101] w-[400px] bg-white shadow-xl"
    >
      <div>
        <div>
          <div
            class="flex items-center justify-between border border-gray-200 px-5 py-3"
          >
            <h2 class="text-xl font-bold uppercase text-[var(--primary-color)]">
              Giỏ hàng ({{ products?.length }})
            </h2>
            <div
              class="cursor-pointer px-1 text-2xl transition-all hover:text-red-500"
            >
              <font-awesome-icon
                :icon="faClose"
                @click="handle"
              ></font-awesome-icon>
            </div>
          </div>

          <div class="h-[500px] overflow-y-auto">
            <div
              v-if="!products?.length"
              class="mt-20 flex flex-col items-center"
            >
              <div>
                <img
                  class="w-24 opacity-60"
                  src="https://res.cloudinary.com/dpsj6nk7y/image/upload/v1752696401/no-image_eldgra.svg"
                  alt="Ảnh lỗi"
                />
              </div>
              <div>
                <h3 class="mb-2 mt-4 px-6 text-center text-xl">
                  Giỏ hàng của bạn trống.
                </h3>
                <p class="px-10 text-center text-sm text-gray-500">
                  Bạn có thể tra cứu tất cả sách hiện có và thực hiện mượn sách
                  tại thư viện.
                </p>
              </div>

              <div>
                <router-link
                  to="/books"
                  @click="handle"
                  class="mt-8 block rounded bg-[var(--primary-color)] px-5 py-3 text-[16px] uppercase text-white transition-all hover:bg-[var(--secondary-color)]"
                >
                  Khám phá kho sách
                </router-link>
              </div>
            </div>
            <BoxBook
              v-for="(book, index) in products"
              v-else
              @handle-close="handle"
              :book="book"
              :key="index"
            ></BoxBook>
          </div>

          <div>
            <CartSideBarBottom
              v-if="products?.length"
              :amount="
                products?.reduce((total, item) => {
                  return total + item.soLuong
                }, 0)
              "
              :handle="handle"
            ></CartSideBarBottom>
            <div
              v-else
              class="mt-20 border-t border-gray-200 px-4 py-2 text-center text-black"
            >
              Tổng số sách đăng ký mượn: 0
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { ref, watch } from "vue"
import BoxBook from "./BoxBook.vue"
import CartSideBarBottom from "./CartSideBarBottom.vue"
import { useFetch } from "@/hooks/useFetch"

const isReload = ref(false)
watch(isReload, () => console.log(isReload.value))

const emit = defineEmits(["toogleShowCartSideBar"])
const { showCartSideBar } = defineProps({
  showCartSideBar: Boolean,
})

const outBackground = ref()
const sidebar = ref()

const handle = () => {
  outBackground.value.classList.add("animate__fadeOut")
  sidebar.value.classList.add("animate__fadeOutRight")
  setTimeout(() => {
    emit("toogleShowCartSideBar")
  }, 300)
}

const products = ref()

const token = localStorage.getItem("token")

const api = import.meta.env.VITE_HOST
if (token) {
  const payload = JSON.parse(atob(token.split(".")[1]))
  payload.role === "user"

  const { data } = useFetch(`${api}cart/${payload.id}`)

  watch(data, () => (products.value = data.value))
}
</script>

<style scoped>
.animate__animated.animate__fadeIn {
  --animate-duration: 300ms;
}

.animate__animated.animate__fadeInRight {
  --animate-duration: 300ms;
}

.animate__animated.animate__fadeOut {
  --animate-duration: 300ms;
}

.animate__animated.animate__fadeOutRight {
  --animate-duration: 300ms;
}
</style>
