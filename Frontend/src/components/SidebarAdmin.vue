<template>
  <div
    class="fixed h-screen w-72 overflow-y-auto bg-white text-gray-800 shadow-lg"
  >
    <div class="flex items-center justify-between border-b border-gray-200 p-4">
      <div class="flex items-center">
        <img
          src="https://res.cloudinary.com/dpsj6nk7y/image/upload/v1750824523/logomobile_dtgqs2.png"
          alt="Logo thư viện"
        />
      </div>
    </div>

    <div class="p-4">
      <div
        class="mb-4 flex items-center space-x-3 rounded-lg bg-primary-100 p-2"
      >
        <img
          :src="admin?.avatar"
          alt="Ảnh đại diện"
          class="w-10 rounded-full"
        />
        <div>
          <h3 class="font-bold text-[var(--primary-color)]">Admin</h3>
          <p class="text-xs text-gray-500">Quản trị viên</p>
        </div>
      </div>

      <nav class="mt-6">
        <div>
          <h4
            class="mb-3 px-3 text-lg font-semibold uppercase text-[var(--primary-color)]"
          >
            Menu Chính
          </h4>

          <router-link
            to="/admin"
            :class="[
              'mb-1 block rounded-lg p-2 px-3 transition-all',
              route.path === '/admin'
                ? 'bg-primary-100 text-primary-700'
                : 'hover:bg-gray-100',
            ]"
          >
            <FontAwesomeIcon :icon="faTachometerAlt" class="mr-3" />
            <span>Tổng quan</span>
          </router-link>

          <router-link
            to="/admin/books"
            :class="[
              'mb-1 block rounded-lg p-2 px-3 transition-all',
              route.path === '/admin/books'
                ? 'bg-primary-100 text-primary-700'
                : 'hover:bg-gray-100',
            ]"
          >
            <FontAwesomeIcon :icon="faBook" class="mr-3" />
            <span>Quản lý sách</span>
          </router-link>

          <router-link
            to="/admin/history"
            :class="[
              'mb-1 block rounded-lg p-2 px-3 transition-all',
              route.path === '/admin/history'
                ? 'bg-primary-100 text-primary-700'
                : 'hover:bg-gray-100',
            ]"
          >
            <FontAwesomeIcon :icon="faFileAlt" class="mr-3" />
            <span>Lịch sử mượn</span>
          </router-link>
        </div>

        <div class="mt-6">
          <h4
            class="mb-3 px-3 text-lg font-semibold uppercase text-[var(--primary-color)]"
          >
            Hệ thống
          </h4>

          <a
            href="#"
            class="mb-1 block rounded-lg p-2 px-3 transition-all hover:bg-gray-100"
          >
            <FontAwesomeIcon :icon="faCog" class="mr-3"></FontAwesomeIcon>
            <span>Cài đặt</span>
          </a>

          <a
            href="#"
            class="mb-1 block rounded-lg p-2 px-3 text-red-500 transition-all hover:bg-gray-100"
            id="logoutBtn"
            @click="handleLogout"
          >
            <FontAwesomeIcon
              :icon="faSignOutAlt"
              class="mr-3"
            ></FontAwesomeIcon>
            <span>Đăng xuất</span>
          </a>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { useFetch } from "@/hooks/useFetch"
import {
  faBook,
  faCog,
  faFileAlt,
  faSignOutAlt,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { ElMessage } from "element-plus"
import { ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router"

const router = useRouter()
const route = useRoute()

const handleLogout = () => {
  localStorage.removeItem("token")
  router.push("/")

  ElMessage({
    message: "Đăng xuất thành công.",
    type: "primary",
    plain: true,
  })
}

const token = localStorage.getItem("token")
const decoded = JSON.parse(atob(token.split(".")[1]))

const api = import.meta.env.VITE_HOST
const admin = ref()

const main = async () => {
  const { data } = await useFetch(`${api}admin/${decoded.id}`)

  watch(data, () => {
    admin.value = data.value
  })
}

main()
</script>
