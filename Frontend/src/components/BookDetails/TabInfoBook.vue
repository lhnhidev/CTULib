<template>
  <!-- name of each tab group should be unique -->
  <div class="px-20">
    <div class="tabs tabs-lift flex justify-center">
      <input
        type="radio"
        name="my_tabs_3"
        class="tab h-12 w-44 text-lg font-bold text-[var(--primary-color)] transition-all hover:text-[var(--secondary-color)]"
        aria-label="Nội dung"
        checked="checked"
      />
      <div
        class="tab-content space-y-3 overflow-y-scroll border-base-300 bg-base-100 px-14 py-10 text-justify"
        :style="{ height: '300px !important' }"
        v-html="book?.desc"
      ></div>

      <input
        type="radio"
        name="my_tabs_3"
        class="tab h-12 w-44 text-lg font-bold text-[var(--primary-color)] transition-all hover:text-[var(--secondary-color)]"
        aria-label="Tác giả"
      />
      <div
        class="tab-content overflow-y-scroll border-base-300 bg-base-100 p-6"
        :style="{ height: '300px !important' }"
      >
        Nhà xuất bản
      </div>

      <input
        type="radio"
        name="my_tabs_3"
        class="tab h-12 w-44 text-lg font-bold text-[var(--primary-color)] transition-all hover:text-[var(--secondary-color)]"
        aria-label="Nhà xuất bản"
      />
      <div
        class="tab-content overflow-y-scroll border-base-300 bg-base-100 p-6"
        :style="{ height: '300px !important' }"
      >
        Tác giả
      </div>
    </div>
  </div>
</template>

<script setup>
const { book } = defineProps({
  book: Object,
})
</script>
