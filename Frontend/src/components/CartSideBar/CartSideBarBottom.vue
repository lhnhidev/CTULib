<template>
  <div
    class="mt-8 flex flex-col items-center border-t border-gray-200 px-4 py-2"
  >
    <p class="mb-3 text-black">
      <span>Tổng số sách đăng ký mượn: </span>
      {{ amount }}
    </p>

    <router-link
      class="mx-auto block self-start rounded border bg-[var(--primary-color)] px-6 py-2 text-white transition-all hover:bg-[var(--secondary-color)]"
      to="/cart"
      @click="handle"
    >
      Xem chi tiết
    </router-link>
  </div>
</template>

<script setup>
const { amount } = defineProps({
  amount: Number,
  handle: Function,
})

// if (product.value) {
//   console.log(product.value)
//   const { data } = await useFetch(`${api}books/${product.value.id}`)

//   watch(data, (val) => (bookInfo.value = val))
// }
</script>
