<template>
  <div
    ref="bannerRef"
    :class="`text-[${props.textColor}] group relative overflow-hidden rounded-md`"
    style="transition: opacity 0.3s"
  >
    <div>
      <img
        :src="props.img"
        :alt="props.title"
        class="transition duration-500 ease-in-out group-hover:scale-110"
      />
    </div>

    <div class="absolute top-0 w-[80%] p-7">
      <div class="mb-6 space-y-4">
        <h2 class="text-md">{{ props.desc }}</h2>
        <h3 class="text-3xl">{{ props.title }}</h3>
      </div>
      <a class="text-lg underline hover:no-underline" href="#">Khám phá</a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  desc: String,
  img: String,
  textColor: String,
})
</script>
