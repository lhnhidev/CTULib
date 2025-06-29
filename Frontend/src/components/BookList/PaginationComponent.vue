<template>
  <div class="join">
    <button class="btn join-item" v-if="page != 0" @click="previousPage">
      «
    </button>
    <input
      v-for="number in page"
      :class="
        number == '...'
          ? 'btn btn-disabled join-item'
          : 'btn btn-square join-item checked:border-[var(--secondary-color)] checked:bg-[var(--secondary-color)]'
      "
      type="radio"
      name="options"
      :aria-label="number"
      :checked="number == pageChecked ? true : false"
      :key="number"
      :number="number"
      @click="
        (e) => {
          if (e.target.getAttribute('number') === '...') return
          pageChecked = e.target.getAttribute('number')
        }
      "
    />
    <button class="btn join-item" v-if="page != 0" @click="nextPage">»</button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue"

const { numberOfPage, resetPage } = defineProps({
  numberOfPage: Number,
  resetPage: Boolean,
  // nextPage: Function,
  // previousPage: Function,
})

const pageChecked = ref(1)
const page = ref([])

const emit = defineEmits(["page-change", "set-not-reset-page"])

watch(pageChecked, (newPage) => {
  emit("page-change", newPage)
})

watch(
  () => resetPage,
  (newResetPage) => {
    if (newResetPage === true) pageChecked.value = 1
    emit("set-not-reset-page")
  },
)

const nextPage = () => {
  if (pageChecked.value === numberOfPage) return
  ++pageChecked.value
}

const previousPage = () => {
  if (pageChecked.value === 1) return
  --pageChecked.value
}

watch(
  () => numberOfPage,
  () => {
    // Cập nhật lại page khi numberOfPage thay đổi
    if (numberOfPage > 4) {
      page.value = [1, 2, "...", numberOfPage - 1, numberOfPage]
    } else if (numberOfPage > 1) {
      page.value = Array.from({ length: numberOfPage }, (_, i) => i + 1)
    } else {
      page.value = 0
    }
  },
)
</script>
