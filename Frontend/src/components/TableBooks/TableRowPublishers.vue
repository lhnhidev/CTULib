<template>
  <tr :id="pub?.maNXB">
    <td class="px-6 py-4 text-sm text-gray-600">
      {{ pub?.maNXB }}
    </td>
    <td class="px-6 py-4">
      <div class="flex items-center">
        <div class="inline-block h-10 flex-shrink-0">
          <img :alt="pub?.tenNXB" :src="pub?.image" class="h-full rounded" />
        </div>
        <div class="ml-4">
          <div class="text-sm text-black">
            {{ pub?.tenNXB }}
          </div>
        </div>
      </div>
    </td>
    <td class="px-6 py-4 text-sm text-black">{{ pub?.diaChi }}</td>
    <td class="px-6 py-4 text-lg">
      <div class="flex items-center justify-center gap-4">
        <button
          class="text-blue-600 transition-all hover:text-blue-900"
          @click="() => emit('toParent', 'info', pub?.maSach)"
        >
          <FontAwesomeIcon :icon="faInfoCircle" title="Xem chi tiết" />
        </button>
        <button
          class="text-green-600 transition-all hover:text-green-900"
          @click="() => emit('toParent', 'change', pub?.maSach)"
        >
          <FontAwesomeIcon :icon="faPen" title="Chỉnh sửa" />
        </button>
        <button
          class="text-red-600 transition-all hover:text-red-900"
          @click="() => emit('toParent', 'delete', pub?.maSach)"
        >
          <FontAwesomeIcon :icon="faTrashAlt" title="Xóa bỏ" />
        </button>
      </div>
    </td>
  </tr>
</template>

<script setup>
import {
  faInfoCircle,
  faPen,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

const { pub } = defineProps({
  pub: Object,
})
</script>
