<template>
  <header class="bg-white shadow-sm">
    <div class="flex items-center justify-between p-4">
      <div class="flex items-center">
        <h2 class="text-xl font-semibold">
          {{
            route.fullPath === "/admin"
              ? "Tổng quan"
              : route.fullPath === "/admin/history"
                ? "Lịch sử mượn"
                : "Quản lý mượn"
          }}
        </h2>
      </div>

      <div class="flex items-center space-x-4">
        <div class="relative">
          <FontAwesomeIcon
            :icon="faBell"
            class="text-lg text-gray-600"
          ></FontAwesomeIcon>
        </div>
        <img :src="admin?.avatar" alt="avatar" class="w-9 rounded-full" />
      </div>
    </div>
  </header>
</template>

<script setup>
import { useFetch } from "@/hooks/useFetch"
import { faBell } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { watch } from "vue"
import { ref } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()

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
