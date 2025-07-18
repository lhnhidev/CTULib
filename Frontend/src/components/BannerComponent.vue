<template>
  <div class="relative" :style="style" :key="src">
    <img :src="src" :alt="alt" class="animate__animated animate__fadeIn" />

    <div
      :class="`absolute ${reverse ? 'left-[100px]' : 'right-[100px]'} top-1/2 w-[30%] translate-y-[-50%] px-4`"
    >
      <div class="mb-7">
        <h3
          class="animate__animated animate__fadeInRight animate__fast text-2xl"
        >
          Giá tham khảo: {{ formatCurrency(price) }}
        </h3>
        <h1 class="animate__animated animate__fadeInRight my-5 text-6xl">
          {{ name }}
        </h1>
        <h3
          class="animate__animated animate__fadeInRight animate__fast text-2xl"
        >
          Tác giả: {{ author }}
        </h3>
      </div>

      <div>
        <button class="primary-button animate__animated animate__fadeInUp">
          Khám phá ngay
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { formatCurrency } from "@utils/index"

const {
  src,
  alt,
  price,
  name,
  author,
  style,
  reverse = false,
} = defineProps({
  src: String,
  alt: String,
  price: Number,
  name: String,
  author: String,
  style: Object,
  reverse: Boolean,
})
</script>
