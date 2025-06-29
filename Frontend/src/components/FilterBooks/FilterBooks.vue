<template>
  <div class="relative">
    <!-- sticky top-[120px] -->
    <div class="w-64">
      <div class="mb-6">
        <label class="input">
          <svg
            class="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            class="grow"
            placeholder="Tìm kiếm..."
            v-model="search"
            @keyup.enter="
              () => {
                searchBook(search.trim().toLowerCase())
                search = ''
              }
            "
          />
        </label>
      </div>

      <div class="bg-[#f5f5f5] px-4 py-3">
        <div>
          <div class="flex items-center justify-between py-1">
            <h3
              class="text-[18px] font-bold uppercase text-[var(--primary-color)]"
            >
              Lọc theo
            </h3>

            <FontAwesomeIcon
              :icon="faFilterCircleXmark"
              class="cursor-pointer text-2xl text-[var(--primary-color)] transition-all hover:text-red-600"
              title="bỏ lọc"
              @click="removeAllFilterCheck"
            />
          </div>
          <hr class="mb-5 mt-2" />
        </div>
        <FilterBookItem
          v-for="bookFeature in bookFeatures"
          :key="bookFeature._id"
          :title="bookFeature.featureName"
          :optionsFilter="bookFeature.featureValue"
          :filterCheck="filterCheck"
          @update:filterCheck="updateFilterCheck"
        ></FilterBookItem>
      </div>
    </div>
  </div>
</template>

<script setup>
const { searchBook } = defineProps({
  searchBook: Function,
})

import { useFetch } from "@/hooks/useFetch"
import FilterBookItem from "./FilterBookItem.vue"
import { ref } from "vue"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { faFilterCircleXmark } from "@fortawesome/free-solid-svg-icons"

const api = import.meta.env.VITE_HOST

const { data: bookFeatures } = useFetch(`${api}bookFeatures`)

const search = ref("")

const filterCheck = ref([])

const updateFilterCheck = (event, id) => {
  if (event === "check") {
    filterCheck.value = [...filterCheck.value, id]
  } else if (event === "uncheck") {
    filterCheck.value = filterCheck.value.filter((fetureId) => fetureId != id)
  }
}

const removeAllFilterCheck = () => {
  filterCheck.value = []
  document
    .querySelectorAll("input[typeInput='filter']")
    .forEach((el) => (el.checked = false))
}
</script>
