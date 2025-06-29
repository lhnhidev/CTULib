<template>
  <div>
    <h3 class="text font-bold uppercase text-[var(--primary-color)]">
      {{ title }}
    </h3>
    <div>
      <div
        class="mt-2 flex cursor-pointer items-center gap-2 transition-all hover:text-[var(--secondary-color)]"
        v-for="option in optionsFilter"
        :key="option._id"
      >
        <div>
          <input
            type="checkbox"
            className="checkbox checkbox-xs"
            typeInput="filter"
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
import { inject, watch } from "vue"

const { optionsFilter, filterCheck } = defineProps({
  title: String,
  optionsFilter: Array,
  filterCheck: Array,
})

const emit = defineEmits(["update:filterCheck"])

const handleFilterFeatures = (e) => {
  const id = e.target.id
  if (filterCheck.includes(id)) {
    emit("update:filterCheck", "uncheck", id)
  } else {
    emit("update:filterCheck", "check", id)
  }
}

const bindingFilter = inject("bindingFilter")
const watchFilter = inject("watchFilter")

watch(
  () => filterCheck,
  (newVal) => {
    bindingFilter(newVal)
    watchFilter()
  },
)
</script>
