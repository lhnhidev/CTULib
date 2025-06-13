<template>
  <div class="group">
    <div class="overflow-hidden">
      <img
        class="cursor-pointer transition duration-700 ease-in-out group-hover:scale-110"
        :src="image"
        :alt="title"
      />
    </div>

    <div class="pt-4">
      <div class="flex gap-7">
        <div>
          <FontAwesomeIcon :icon="faCalendarDays" />
          <span class="ml-2">{{ time }}</span>
        </div>

        <div>
          <FontAwesomeIcon :icon="faList" />
          <span class="ml-2">{{ topic }}</span>
        </div>
      </div>

      <div class="mb-3">
        <a
          href="#"
          class="cursor-pointer transition hover:text-[var(--primary-color)]"
        >
          <h2 class="truncate py-2 text-2xl uppercase">{{ title }}</h2>
        </a>
        <p class="line-clamp-2 text-gray-500">{{ desc }}</p>
      </div>

      <a class="uppercase hover:underline" href="#">Đọc thêm</a>
    </div>
  </div>
</template>

<script setup>
import { faCalendarDays, faList } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

const { image, time, topic, title, desc } = defineProps({
  image: String,
  time: String,
  topic: String,
  title: String,
  desc: String,
})
</script>
