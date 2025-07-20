<template>
  <div :class="`rounded-lg border-l-4 ${primaryColor} bg-white p-4 shadow`">
    <h3 class="text-sm font-medium text-gray-600">{{ heading }}</h3>
    <div class="mt-2 flex items-center justify-between">
      <h2 class="text-3xl font-bold">{{ title }}</h2>
      <slot></slot>
    </div>
    <p class="mt-2 text-xs text-green-500">
      {{ desc }}
    </p>
  </div>
</template>

<script setup>
const { primaryColor, title, desc } = defineProps({
  primaryColor: String,
  heading: String,
  title: String,
  desc: String,
})
</script>
