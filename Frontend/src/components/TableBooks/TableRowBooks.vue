<template>
  <tr>
    <td class="px-6 py-4 text-sm text-gray-600">
      {{ book?.maSach }}
    </td>
    <td class="px-6 py-4">
      <div class="flex items-center">
        <div class="h-10 w-10 flex-shrink-0">
          <img
            :alt="book?.tenSach"
            :src="book.image[1] || book.image[0]"
            class="rounded"
          />
        </div>
        <div class="ml-4">
          <div class="text-sm text-black">
            {{ book?.tenSach }}
          </div>
        </div>
      </div>
    </td>
    <td class="px-6 py-4 text-sm text-black">{{ book?.author }}</td>
    <td class="px-6 py-4 text-sm text-gray-600">
      {{ book?.nxb.tenNXB }}
    </td>
    <td class="px-6 py-4 text-center text-sm text-gray-600">
      {{ book?.soQuyen }}
    </td>
    <td class="px-6 py-4 text-lg">
      <div class="flex items-center justify-center gap-4">
        <button
          class="text-blue-600 transition-all hover:text-blue-900"
          @click="() => emit('toParent', 'info', book?.maSach)"
        >
          <FontAwesomeIcon :icon="faInfoCircle" title="Xem chi tiết" />
        </button>
        <button
          class="text-green-600 transition-all hover:text-green-900"
          @click="() => emit('toParent', 'change', book?.maSach)"
        >
          <FontAwesomeIcon :icon="faPen" title="Chỉnh sửa" />
        </button>
        <button class="text-red-600 transition-all hover:text-red-900">
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

const { book } = defineProps({
  book: Object,
})

const emit = defineEmits(["toParent"])
</script>
