<template>
  <div
    class="flex w-40 cursor-default flex-col gap-1 rounded bg-white px-3 py-2"
    style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
  >
    <router-link
      v-if="!isUser"
      class="p-1 text-base text-gray-600 hover:text-[var(--primary-color)]"
      to="/login"
      >Đăng nhập
    </router-link>
    <router-link
      v-else
      class="p-1 text-base text-gray-600 hover:text-[var(--primary-color)]"
      :to="`/profile/${id}`"
    >
      Thông tin
    </router-link>
    <router-link
      v-if="!isUser"
      class="p-1 text-base text-gray-600 hover:text-[var(--primary-color)]"
      to="/register"
      >Đăng ký
    </router-link>
    <button
      v-else
      class="p-1 text-left text-base text-gray-600 hover:text-[var(--primary-color)]"
      @click="$emit('handleLogout')"
    >
      Đăng xuất
    </button>
    <a
      class="p-1 text-base text-gray-600 hover:text-[var(--primary-color)]"
      href="#"
      >Cài đặt</a
    >
  </div>
</template>

<script setup>
const { isUser, id } = defineProps({
  isUser: Boolean,
  id: String,
})

defineEmits(["handleLogout"])
</script>
