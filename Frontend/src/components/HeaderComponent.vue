<template>
  <CartSideBar
    v-if="showCartSideBar"
    @toogleShowCartSideBar="changeShowCartSideBar"
    :showCartSideBar="showCartSideBar"
  ></CartSideBar>
  <header class="sticky top-[-44px] z-50 w-full shadow-sm">
    <div
      class="flex justify-between bg-[var(--primary-color)] px-4 py-3 text-sm text-white"
    >
      <div>
        <span>Đồng thuận - Tận tâm - Chuẩn mực - Sáng tạo</span>
      </div>

      <div class="flex gap-3">
        <span class="bar">demo@gmail.com</span>
        <span class="bar">(+91) 9876-543-210</span>
        <span class="bar">Vietnamese</span>
        <span>USD</span>
      </div>
    </div>

    <div class="flex justify-between bg-white px-4">
      <a href="#" class="flex w-72 items-center">
        <img
          :src="`${imgApi}v1750824523/logomobile_dtgqs2.png`"
          alt="CTULib_logo"
        />
      </a>

      <nav class="flex items-center">
        <div>
          <router-link
            to="/"
            class="block px-5 py-4 hover:text-[var(--primary-color)]"
            >Trang chủ</router-link
          >
        </div>
        <div>
          <router-link
            to="/books"
            class="block px-5 py-4 hover:text-[var(--primary-color)]"
            >Sách</router-link
          >
        </div>
        <div>
          <a href="#" class="block px-5 py-4 hover:text-[var(--primary-color)]"
            >Ebook</a
          >
        </div>
        <div>
          <router-link
            to="/history"
            class="block px-5 py-4 hover:text-[var(--primary-color)]"
            >Lịch sử</router-link
          >
        </div>
        <div>
          <a href="#" class="block px-5 py-4 hover:text-[var(--primary-color)]"
            >Tin tức</a
          >
        </div>
        <div>
          <a href="#" class="block px-5 py-4 hover:text-[var(--primary-color)]"
            >Giới thiệu</a
          >
        </div>
        <div>
          <a href="#" class="block px-5 py-4 hover:text-[var(--primary-color)]"
            >Liên hệ</a
          >
        </div>
      </nav>

      <div class="flex gap-5">
        <div class="flex items-center">
          <a href="#" class="text-2xl hover:text-[var(--primary-color)]">
            <FontAwesomeIcon :icon="faMagnifyingGlass" />
          </a>
        </div>
        <div class="flex items-center">
          <div
            class="group relative cursor-pointer text-2xl hover:text-[var(--primary-color)]"
          >
            <FontAwesomeIcon :icon="faUser" v-if="!isUser" />
            <div class="h-8 w-8" v-else>
              <img :src="user?.avatar" alt="" class="h-8 w-8 rounded-full" />
            </div>
            <div
              class="animate__animated animate__fadeIn absolute left-1/2 hidden -translate-x-1/2 before:block before:h-7 before:w-full before:cursor-default before:content-[''] group-hover:block"
            >
              <HeaderMenu
                :isUser="isUser"
                :id="user?.id"
                @handle-logout="handleLogout"
              ></HeaderMenu>
            </div>
          </div>
        </div>
        <div class="flex items-center">
          <a href="#" class="text-2xl hover:text-[var(--primary-color)]">
            <FontAwesomeIcon :icon="faHeart" />
          </a>
        </div>
        <div class="flex items-center">
          <a
            @click="showCartSideBar = true"
            class="cursor-pointer text-2xl hover:text-[var(--primary-color)]"
          >
            <FontAwesomeIcon :icon="faBagShopping" />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import {
  faMagnifyingGlass,
  faBagShopping,
  faUser,
  faHeart,
} from "@fortawesome/free-solid-svg-icons"
import HeaderMenu from "./HeaderMenu.vue"
import { ref, watch } from "vue"
import { useFetch } from "@/hooks/useFetch"
import { useRouter } from "vue-router"
import { ElMessage } from "element-plus"
import CartSideBar from "./CartSideBar/CartSideBar.vue"

const imgApi = import.meta.env.VITE_IMAGE

const token = localStorage.getItem("token")
const isUser = ref(false)
const user = ref()
const showCartSideBar = ref(false)

watch(showCartSideBar, () => {
  document.body.style.overflow = showCartSideBar.value ? "hidden" : "auto"
  document.body.style.marginRight = showCartSideBar.value ? "15px" : "0px"
})

const changeShowCartSideBar = () => {
  showCartSideBar.value = !showCartSideBar.value
}

if (token) {
  const payload = JSON.parse(atob(token.split(".")[1]))
  isUser.value = payload.role === "user"

  const api = import.meta.env.VITE_HOST
  const { data } = useFetch(`${api}user/${payload.id}`)

  watch(data, (val) => (user.value = val))
}

const router = useRouter()

const handleLogout = () => {
  localStorage.removeItem("token")
  user.value = null
  isUser.value = null
  router.push("/")

  ElMessage({
    message: "Đăng xuất thành công.",
    type: "primary",
    plain: true,
  })
}
</script>
