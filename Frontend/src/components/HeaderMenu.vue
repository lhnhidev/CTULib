<template>
  <div
    class="flex w-40 cursor-default flex-col gap-1 rounded bg-white px-3 py-2"
    style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
  >
    <router-link
      class="p-1 text-base text-gray-600 hover:text-[var(--primary-color)]"
      to="/login"
      >Đăng nhập
    </router-link>
    <router-link
      class="p-1 text-base text-gray-600 hover:text-[var(--primary-color)]"
      to="/register"
      >Đăng ký
    </router-link>
    <a
      class="p-1 text-base text-gray-600 hover:text-[var(--primary-color)]"
      href="#"
      >Cài đặt</a
    >
  </div>
</template>

<script setup></script>
