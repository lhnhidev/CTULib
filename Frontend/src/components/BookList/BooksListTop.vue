<template>
  <div class="mb-4 flex items-center justify-between">
    <div class="flex items-center gap-4 text-3xl">
      <FontAwesomeIcon :icon="faBook" class="text-[var(--primary-color)]" />
      <span class="text-xl">Có tổng {{ totalBook }} đầu sách</span>
    </div>

    <fieldset class="fieldset">
      <select class="select w-64" v-model="selected">
        <option value="none" disabled selected>Sắp xếp theo</option>
        <option value="ascByName">Tên A → Z</option>
        <option value="descByName">Tên Z → A</option>
        <option value="ascByPrice">Giá tăng dần</option>
        <option value="descByPrice">Giá giảm dần</option>
        <option value="new">Mới nhất</option>
        <option value="old">Cũ nhất</option>
      </select>
    </fieldset>
  </div>
</template>

<script setup>
import { faBook } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { inject, ref, watch } from "vue"

defineProps({
  totalBook: Number,
})

const selected = ref("none")

const bindingSort = inject("bindingSort")

watch(selected, (newSelected) => {
  bindingSort(newSelected)
  // console.log(selected.value)
})
</script>
