<template>
  <div class="flex h-[595px] flex-col overflow-scroll">
    <div class="overflow-x-scroll">
      <table class="w-full">
        <thead class="bg-[var(--primary-color)]">
          <tr>
            <th
              class="w-[200px] px-6 py-3 text-left text-xs uppercase tracking-wider text-white"
            >
              Mã nhà xuất bản
            </th>
            <th
              class="min-w-[150px] max-w-[170px] px-6 py-3 text-left text-xs uppercase tracking-wider text-white"
            >
              Nhà xuất bản
            </th>
            <th
              class="w-[280px] px-6 py-3 text-left text-xs uppercase tracking-wider text-white"
            >
              Địa chỉ
            </th>
            <th
              class="w-[370px] px-6 py-3 text-center text-xs uppercase tracking-wider text-white"
            >
              Tùy chọn
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
          <TableRowPublishers
            v-for="pub in publishers"
            :key="pub?._id"
            :pub="pub"
          ></TableRowPublishers>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { useFetch } from "@/hooks/useFetch"
import TableRowPublishers from "./TableRowPublishers.vue"

const api = import.meta.env.VITE_HOST
const { data: publishers } = useFetch(`${api}publishers`)
</script>
