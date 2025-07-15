<template>
  <div>
    <el-dialog
      v-model="centerDialogVisible"
      title="Đăng nhập thành công"
      width="500"
      center
    >
      <span>Vui lòng chọn tùy chọn bên dưới để di chuyển đến trang chủ!</span>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="centerDialogVisible = false">Hủy bỏ</el-button>
          <router-link :to="authorizationLink" class="ml-3">
            <el-button type="primary" @click="centerDialogVisible = false">
              Trang chủ
            </el-button>
          </router-link>
        </div>
      </template>
    </el-dialog>
    <form class="mt-8 space-y-4" @submit="handleLogin">
      <div class="space-y-4">
        <input
          v-model="email"
          class="w-full rounded border border-gray-300 px-3 py-2 outline-[var(--secondary-color)] transition-all"
          type="email"
          placeholder="Nhập Email..."
        />
        <input
          v-model="password"
          class="w-full rounded border border-gray-300 px-3 py-2 outline-[var(--secondary-color)] transition-all"
          type="password"
          placeholder="Mật khẩu"
        />
      </div>

      <button
        class="rounded bg-[var(--primary-color)] px-5 py-2 text-white transition-all hover:bg-[var(--secondary-color)]"
      >
        Đăng nhập
      </button>
    </form>

    <div class="mt-7">
      <p class="mb-2 text-gray-600">Tùy chọn khác:</p>
      <div class="flex gap-3">
        <div
          class="cursor-pointer rounded bg-gray-100 px-2 py-1 transition-all hover:opacity-80"
        >
          <FontAwesomeIcon
            :icon="faFacebook"
            class="text-[#3B5998]"
          ></FontAwesomeIcon>
          Facebook
        </div>
        <div
          class="cursor-pointer rounded bg-gray-100 px-2 py-1 transition-all hover:opacity-80"
        >
          <FontAwesomeIcon
            :icon="faGoogle"
            class="text-[#F44336]"
          ></FontAwesomeIcon>
          Google
        </div>
        <div
          class="cursor-pointer rounded bg-gray-100 px-2 py-1 transition-all hover:opacity-80"
        >
          <FontAwesomeIcon
            :icon="faLinkedin"
            class="text-[#0077B5]"
          ></FontAwesomeIcon>
          Linkedin
        </div>
      </div>
    </div>

    <div class="flex justify-between">
      <router-link
        to="/register"
        class="mt-6 inline-block pr-2 text-[var(--primary-color)] transition-all hover:text-[var(--secondary-color)]"
        @click="emit('update:url', '1')"
      >
        Tạo tài khoản mới
      </router-link>

      <a
        href="#"
        class="mt-6 inline-block pr-2 text-[var(--primary-color)] transition-all hover:text-[var(--secondary-color)]"
      >
        Quên mật khẩu?
      </a>
    </div>
  </div>
</template>

<script setup>
import {
  faFacebook,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { ref } from "vue"

import { ElNotification } from "element-plus"

const open = (message, type) => {
  ElNotification[type]({
    title: "Lỗi",
    message,
    offset: 100,
  })
}

const emit = defineEmits(["update:url"])

const email = ref("")
const password = ref("")

const centerDialogVisible = ref(false)
const authorizationLink = ref("/")

const handleLogin = async (e) => {
  e.preventDefault()
  if (email.value === "") {
    open("Trường Email là bắt buộc!", "error")
    return
  } else if (password.value === "") {
    open("Trường password là bắt buộc!", "error")
    return
  }

  const api = import.meta.env.VITE_HOST

  try {
    const { account, message, token } = await fetch(`${api}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email.value, password: password.value }),
    }).then((res) => res.json())

    if (account) {
      localStorage.setItem("token", token)

      const payload = JSON.parse(atob(token.split(".")[1]))
      if (payload.role === "admin") {
        authorizationLink.value = "/admin"
      } else {
        authorizationLink.value = "/"
      }

      centerDialogVisible.value = true
    } else {
      open(message, "warning")
    }
  } catch {
    console.log("Có lỗi")
  }
}
</script>
