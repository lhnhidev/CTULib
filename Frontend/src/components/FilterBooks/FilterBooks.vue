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
          <input type="search" class="grow" placeholder="Tìm kiếm..." />
        </label>
      </div>

      <div class="bg-[#f5f5f5] px-4 py-3">
        <div>
          <h3
            class="text-[18px] font-bold uppercase text-[var(--primary-color)]"
          >
            Lọc theo
          </h3>
          <hr class="mb-5 mt-2" />
        </div>
        <FilterBookItem
          :title="bookFeature.featureName"
          :optionsFilter="bookFeature.featureValue"
          v-for="bookFeature in bookFeatures"
          :key="bookFeature._id"
        ></FilterBookItem>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFetch } from "@/hooks/useFetch"
import FilterBookItem from "./FilterBookItem.vue"

const api = import.meta.env.VITE_HOST

const { data: bookFeatures } = useFetch(`${api}bookFeatures`)
</script>
