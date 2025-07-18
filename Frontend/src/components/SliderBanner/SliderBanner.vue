<template>
  <div class="relative w-full">
    <BannerComponent
      :src="currentBanner.src"
      :alt="currentBanner.alt"
      :price="currentBanner.price"
      :name="currentBanner.name"
      :author="currentBanner.author"
    />

    <div class="absolute bottom-5 right-6">
      <div class="flex gap-2">
        <div
          class="w-10 cursor-pointer border-[3px]"
          :class="currentIndex === 0 ? 'border-blue-500' : 'border-gray-400'"
          @click="changeBanner(0)"
        ></div>
        <div
          class="w-10 cursor-pointer border-[3px]"
          :class="currentIndex === 1 ? 'border-blue-500' : 'border-gray-400'"
          @click="changeBanner(1)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
import BannerComponent from "@components/BannerComponent.vue"

const banners = [
  {
    src: "https://res.cloudinary.com/dpsj6nk7y/image/upload/v1752865734/banner-1_x8pfn4.jpg",
    alt: "banner-1",
    price: 80,
    name: "The All Souls Trilogy Boxed",
    author: "Deborah Harkness",
  },
  {
    src: "https://res.cloudinary.com/dpsj6nk7y/image/upload/v1752865739/banner-2_cqdhwc.jpg",
    alt: "banner-2",
    price: 165,
    name: "101 Essays That Will Change The Way You Think",
    author: "William Shakespeare",
  },
]

const currentIndex = ref(0)
const currentBanner = ref(banners[currentIndex.value])

let intervalId

function startAutoSlide() {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % banners.length
    currentBanner.value = banners[currentIndex.value]
  }, 4000)
}

function stopAutoSlide() {
  clearInterval(intervalId)
}

onMounted(() => {
  startAutoSlide()
})

onBeforeUnmount(() => {
  stopAutoSlide()
})

function changeBanner(index) {
  stopAutoSlide()
  currentIndex.value = index
  currentBanner.value = banners[index]
  startAutoSlide()
}
</script>
