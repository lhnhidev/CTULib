<template>
  <div
    :class="`animate__animated animate__fadeIn flex ${flexCol ? 'flex-col-reverse justify-center' : ''} gap-5`"
  >
    <div
      :class="`flex ${flexCol ? 'flex-row' : 'h-[550px] w-32 flex-col [direction:rtl]'} gap-4 overflow-y-auto pl-1`"
    >
      <img
        v-for="(img, index) in image"
        checked=""
        :class="`w-32 cursor-pointer border-2 transition-all hover:border hover:border-[var(--primary-color)] ${imgChecked === index ? 'border-[var(--secondary-color)]' : ''}`"
        :src="img"
        :key="index"
        @click="() => handleChangeImage(index)"
        :style="styleLitileImage"
      />
    </div>

    <div>
      <div
        ref="imgContainer"
        class="relative h-auto w-[500px] cursor-zoom-in border"
        @mouseenter="showZoom = true"
        @mouseleave="showZoom = false"
        @mousemove="handleMouseMove"
        :style="styleMainImage"
      >
        <img :src="currentImg" class="w-full object-cover" />
        <div
          v-if="showZoom"
          class="animate__animated animate__fadeIn absolute right-[-304px] top-0 z-20 h-[300px] w-[300px] border-2 border-[var(--secondary-color)] bg-cover bg-no-repeat"
          :style="zoomStyle"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue"

const { image } = defineProps({
  image: Array,
  styleLitileImage: Object,
  styleMainImage: Object,
  flexCol: Boolean,
})

const currentImg = ref(image[0])
const imgChecked = ref(0)

watch(
  () => image,
  () => {
    currentImg.value = image[0]
  },
)

const handleChangeImage = (index) => {
  imgChecked.value = index
  currentImg.value = image[index]
}

const showZoom = ref(false)
const zoomStyle = ref({})
const imgContainer = ref(null)

const handleMouseMove = (e) => {
  const rect = imgContainer.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  const percentX = (x / rect.width) * 100
  const percentY = (y / rect.height) * 100

  zoomStyle.value = {
    backgroundImage: `url('${currentImg.value}')`,
    backgroundSize: "250%",
    backgroundPosition: `${percentX}% ${percentY}%`,
    zIndex: "100",
  }
}
</script>
