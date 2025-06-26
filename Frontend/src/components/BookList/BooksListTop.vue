<template>
  <div class="mb-4 flex items-center justify-between">
    <div class="flex items-center gap-4 text-3xl">
      <FontAwesomeIcon :icon="faBook" class="text-[var(--primary-color)]" />
      <span class="text-xl">Có tổng đầu sách</span>
    </div>

    <fieldset class="fieldset">
      <select class="select w-64">
        <option disabled selected>Sắp xếp theo</option>
        <option>Tên A → Z</option>
        <option>Tên Z → A</option>
        <option>Giá tăng dần</option>
        <option>Giá giảm dần</option>
        <option>Mới nhất</option>
        <option>Cũ nhất</option>
      </select>
    </fieldset>
  </div>
</template>

<script setup>
import { faBook } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
</script>
