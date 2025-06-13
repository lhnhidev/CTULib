<template>
  <div class="relative mt-24 px-20" :style="style">
    <h2 class="mb-7 text-center text-4xl uppercase">{{ title }}</h2>

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

    <div class="flex w-full overflow-x-hidden" :style="{ gap: `${gap}px` }">
      <div
        class="z-0 shrink-0 transition-all duration-700 ease-in-out"
        :style="{
          transform: `translateX(calc(${state} * (-100% - ${gap}px)))`,
          width: `calc(100% / ${amountDisplay} - 32px)`,
        }"
        v-for="(ele, index) in data"
        :key="index"
      >
        <slot
          :image="ele.image"
          :brand="ele.brand"
          :title="ele.name || ele.title"
          :vote="ele.vote"
          :price="ele.price"
          :comment="ele.comment"
          :desc="ele.desc"
          :user="ele.author"
          :time="ele.time"
          :topic="ele.topic"
        ></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"

const {
  title,
  data,
  amountDisplay = 5,
  gap,
  style,
} = defineProps({
  title: String,
  data: Array,
  amountDisplay: Number,
  gap: Number,
  style: Object,
})

import { ref } from "vue"

const state = ref(0)
const width = window.innerWidth

const amountDisplayBooks = width >= 768 ? amountDisplay : 2

const handleMoveRight = () => {
  if (state.value === data.length - amountDisplayBooks) {
    state.value = 0
  } else {
    state.value++
  }
}
const handleMoveLeft = () => {
  if (state.value === 0) {
    state.value = data.length - amountDisplayBooks
  } else {
    state.value--
  }
}
</script>
