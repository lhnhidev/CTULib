<template>
  <div :class="`mt-20 flex px-20 ${reverse ? 'flex-row-reverse' : ''}`">
    <div class="flex w-1/2 justify-center">
      <img :src="src" alt="top-blog" class="w-[595px]" />
    </div>

    <div class="w-[calc(50%-50px)]">
      <h2 class="mt-9 text-4xl uppercase">{{ title }}</h2>
      <p class="my-6 text-justify text-gray-500">
        {{ desc }}
      </p>
      <button class="primary-button uppercase">Đọc thêm</button>
    </div>
  </div>
</template>

<script setup>
const {
  src,
  title,
  desc,
  reverse = false,
} = defineProps({
  src: String,
  title: String,
  desc: String,
  reverse: Boolean,
})
</script>
