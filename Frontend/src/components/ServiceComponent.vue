<template>
  <div class="flex justify-center gap-28 px-12 py-20">
    <div
      class="space-y-2 text-center transition hover:text-[var(--primary-color)]"
    >
      <div class="text-4xl">
        <FontAwesomeIcon :icon="faTruckFast" />
      </div>

      <h2 class="text-2xl font-bold uppercase">Giao hàng mọi nơi</h2>

      <p>Phục vụ mọi lúc, mọi nơi</p>
    </div>
    <div
      class="space-y-2 text-center transition hover:text-[var(--primary-color)]"
    >
      <div class="text-4xl">
        <FontAwesomeIcon :icon="faPiggyBank" />
      </div>

      <h2 class="text-2xl font-bold uppercase">Cam kết chất lượng</h2>

      <p>Hỗ trợ đổi trả sách nếu có lỗi in ấn</p>
    </div>
    <div
      class="space-y-2 text-center transition hover:text-[var(--primary-color)]"
    >
      <div class="text-4xl">
        <FontAwesomeIcon :icon="faTicket" />
      </div>

      <h2 class="text-2xl font-bold uppercase">Ưu đãi và giảm giá</h2>

      <p>Phục vụ mọi lúc, mọi nơi</p>
    </div>
    <div
      class="space-y-2 text-center transition hover:text-[var(--primary-color)]"
    >
      <div class="text-4xl">
        <FontAwesomeIcon :icon="faPhoneVolume" />
      </div>

      <h2 class="text-2xl font-bold uppercase">Giao hàng mọi nơi</h2>

      <p>Phục vụ mọi lúc, mọi nơi</p>
    </div>
  </div>
</template>

<script setup>
import {
  faPhoneVolume,
  faPiggyBank,
  faTicket,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
</script>
