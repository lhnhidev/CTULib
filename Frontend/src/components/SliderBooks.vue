<template>
  <div class="relative mt-24 px-20">
    <h2 class="mb-7 text-center text-4xl uppercase">{{ props.title }}</h2>

    <div
      class="absolute top-[calc(50%-22px)] z-10 h-0 w-[calc(100vw-132px)] translate-x-[-22px]"
    >
      <div class="flex h-0 justify-between">
        <div
          @click="handleMoveLeft"
          class="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white text-lg"
        >
          <FontAwesomeIcon :icon="faAngleLeft" />
        </div>
        <div
          @click="handleMoveRight"
          class="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white text-lg"
        >
          <FontAwesomeIcon :icon="faAngleRight" />
        </div>
      </div>
    </div>

    <div class="flex w-full gap-10 overflow-x-hidden">
      <div
        :state="state"
        class="z-0 w-[calc(20%-32px)] shrink-0 transition-all duration-700 ease-in-out"
        :style="{
          transform: `translateX(calc(${state} * (-100% - 40px)))`,
        }"
        v-for="(book, index) in books"
        :key="index"
      >
        <CardBook
          :image="book.image"
          :brand="book.brand"
          :title="book.name"
          :vote="book.vote"
          :price="book.price"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import CardBook from "./CardBook.vue"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"

const props = defineProps({
  title: String,
})

const books = [
  {
    image: ["/1.jpg", "/2.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary 1",
    vote: 3,
    price: 55,
  },
  {
    image: ["/1.jpg", "/2.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary 2",
    vote: 5,
    price: 55,
  },
  {
    image: ["/1.jpg", "/2.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary 3",
    vote: 4,
    price: 55,
  },
  {
    image: ["/1.jpg", "/2.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary 4",
    vote: 4,
    price: 55,
  },
  {
    image: ["/1.jpg", "/2.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary 5",
    vote: 2,
    price: 55,
  },
  {
    image: ["/1.jpg", "/2.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary 6",
    vote: 4,
    price: 55,
  },
  {
    image: ["/1.jpg", "/2.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary 7",
    vote: 4,
    price: 55,
  },
  {
    image: ["/1.jpg", "/2.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary 8",
    vote: 5,
    price: 55,
  },
  {
    image: ["/1.jpg", "/2.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary",
    vote: 1,
    price: 55,
  },
  {
    image: ["/1.jpg", "/2.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary",
    vote: 3,
    price: 55,
  },
]

import { ref, onMounted } from "vue"

const state = ref(0)
const width = window.innerWidth

const amountDisplayBooks = width >= 768 ? 5 : 2

const handleMoveRight = () => {
  if (state.value === books.length - amountDisplayBooks) {
    state.value = 0
  } else {
    state.value++
  }
}
const handleMoveLeft = () => {
  if (state.value === 0) {
    state.value = books.length - amountDisplayBooks
  } else {
    state.value--
  }
}

onMounted(() => {})
</script>
