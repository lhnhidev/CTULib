<template>
  <div>
    <h3 class="text font-bold uppercase text-[var(--primary-color)]">
      {{ title }}
    </h3>
    <div>
      <div
        class="mt-2 flex cursor-pointer items-center gap-2 transition-all hover:text-[var(--secondary-color)]"
        v-for="option in optionsFilter"
        :key="option.id"
      >
        <div>
          <input
            type="checkbox"
            className="checkbox checkbox-xs"
            :id="option.id"
            @input="handleFilterFeatures"
          />
        </div>

        <label
          class="flex flex-1 cursor-pointer justify-between"
          :for="option.id"
        >
          <span>
            {{ option.name }}
          </span>
          <span>({{ option.amount }})</span>
        </label>
      </div>
    </div>
    <hr class="mb-5 mt-2" />
  </div>
</template>

<script setup>
import { inject, ref, watch } from "vue"

defineProps({
  title: String,
  optionsFilter: Array,
})

const filterCheck = ref([])

const handleFilterFeatures = (e) => {
  if (filterCheck.value.includes(e.target.id)) {
    filterCheck.value = filterCheck.value.filter(
      (fetureId) => fetureId != e.target.id,
    )
  } else {
    filterCheck.value = [...filterCheck.value, e.target.id]
  }
  console.log(filterCheck.value)
}

const bindingFilter = inject("bindingFilter")

// Theo dõi filterCheck và gọi bindingFilter mỗi khi thay đổi
watch(filterCheck, (newVal) => {
  bindingFilter(newVal)
  console.log(newVal)
})
</script>
