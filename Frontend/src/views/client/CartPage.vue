<template>
  <BreadcrumbComponent
    :title="`Giỏ hàng`"
    :breadcrumb="[
      { label: 'Trang chủ', path: '/' },
      { label: 'Giỏ hàng', path: '' },
    ]"
  ></BreadcrumbComponent>
  <div class="px-20 py-10">Hello world</div>
</template>

<script setup>
import BreadcrumbComponent from "@components/BreadcrumbComponent.vue"
</script>
