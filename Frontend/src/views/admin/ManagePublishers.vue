<template>
  <div class="p-4 pb-0">
    <div
      class="flex h-[595px] flex-col overflow-hidden rounded-lg bg-white p-4 shadow"
    >
      <div class="flex items-center justify-between border-b pb-4">
        <el-breadcrumb :separator-icon="ArrowRight">
          <div class="flex items-center gap-3">
            <FontAwesomeIcon
              :icon="faArrowLeft"
              v-if="isEntry"
              @click="isEntry = false"
              class="h-5 w-5 cursor-pointer rounded-full border border-[var(--primary-color)] p-1 text-[var(--primary-color)] transition-all hover:border-[var(--secondary-color)] hover:text-[var(--secondary-color)]"
            ></FontAwesomeIcon>
            <el-breadcrumb-item @click="isEntry = false" class="cursor-pointer">
              <span
                :class="`text-lg font-bold text-[var(--primary-color)] ${isEntry ? 'transition-all hover:text-[var(--secondary-color)]' : ''}`"
                >Quản lý nhà xuất bản</span
              >
            </el-breadcrumb-item>
            <el-breadcrumb-item v-if="isEntry" class="ml-[-12px]">
              <span class="text-lg text-gray-600">{{ idForm }}</span>
            </el-breadcrumb-item>
          </div>
        </el-breadcrumb>

        <div class="flex space-x-2">
          <button
            class="rounded bg-[var(--primary-color)] px-4 py-2 text-sm text-white transition-all hover:bg-[var(--secondary-color)]"
          >
            <FontAwesomeIcon
              :icon="faFileExport"
              class="mr-1"
            ></FontAwesomeIcon>
            Thêm Nhà xuất bản
          </button>
          <div class="relative" v-if="!isEntry">
            <input
              v-model="search"
              @keyup.enter="handleSearch"
              type="text"
              placeholder="Tìm kiếm nhà xuất bản..."
              class="w-64 rounded border py-2 pl-8 pr-4 text-sm"
            />
            <FontAwesomeIcon
              :icon="faSearch"
              class="absolute left-3 top-3 text-gray-400"
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>

      <div>
        <TablePublishers></TablePublishers>
      </div>
    </div>
  </div>
</template>

<script setup>
import TablePublishers from "@components/TableBooks/TablePublishers.vue"
</script>
