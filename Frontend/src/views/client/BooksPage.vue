<template>
  <BreadcrumbComponent
    :title="`Sách`"
    :breadcrumb="[
      { label: 'Trang chủ', path: '/' },
      { label: 'Sách', path: '' },
    ]"
  ></BreadcrumbComponent>
  <BooksList></BooksList>
</template>

<script setup>
import BooksList from "@components/BookList/BooksList.vue"
import BreadcrumbComponent from "@components/BreadcrumbComponent.vue"
</script>
