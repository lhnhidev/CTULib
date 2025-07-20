<template>
  <div class="flex h-[100vh] w-[100vw] bg-gray-100">
    <SidebarAdmin></SidebarAdmin>

    <div class="ml-72 flex min-h-screen flex-1 flex-col">
      <HeaderAdmin></HeaderAdmin>
      <router-view />
    </div>
  </div>
</template>

<script setup>
import HeaderAdmin from "@components/HeaderAdmin.vue"
import SidebarAdmin from "@components/SidebarAdmin.vue"
</script>
