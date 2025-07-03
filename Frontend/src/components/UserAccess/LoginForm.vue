<template>
  <div>
    <form action="" method="POST" class="mt-8 space-y-4">
      <div class="space-y-4">
        <input
          class="w-full rounded border border-gray-300 px-3 py-2 outline-[var(--secondary-color)] transition-all"
          type="text"
          placeholder="Nhập Email..."
        />
        <input
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

const emit = defineEmits(["update:url"])
</script>
