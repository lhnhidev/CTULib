<template>
  <div class="flex-1 p-4">
    <div>
      <div class="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <CardInfoAdmin
          primaryColor="border-[var(--primary-color)]"
          heading="Tổng số sách"
          title="100"
          desc="Tăng 12.7% so với tháng trước"
        >
          <FontAwesomeIcon
            :icon="faBook"
            class="text-xl text-[var(--primary-color)]"
          ></FontAwesomeIcon>
        </CardInfoAdmin>

        <CardInfoAdmin
          primaryColor="border-[#22C55E]"
          heading="Sách đang mượn"
          title="219"
          desc="Tăng 34.5% so với tháng trước"
        >
          <FontAwesomeIcon
            :icon="faBookOpen"
            class="text-xl text-[#22C55E]"
          ></FontAwesomeIcon>
        </CardInfoAdmin>

        <CardInfoAdmin
          primaryColor="border-[#EAB308]"
          heading="Quản trị viên"
          title="1"
          desc="Không thay đổi"
        >
          <FontAwesomeIcon
            :icon="faUserCog"
            class="text-xl text-[#EAB308]"
          ></FontAwesomeIcon>
        </CardInfoAdmin>

        <CardInfoAdmin
          primaryColor="border-[#A855F7]"
          heading="Người dùng"
          title="160504"
          desc="tăng 5.9% so với tháng trước"
        >
          <FontAwesomeIcon
            :icon="faUser"
            class="text-xl text-[#A855F7]"
          ></FontAwesomeIcon>
        </CardInfoAdmin>
      </div>

      <div class="mb-6 overflow-hidden rounded-lg bg-white shadow">
        <div class="border-b p-4">
          <h3 class="text-lg font-bold text-[var(--primary-color)]">
            Yêu cầu mượn sách mới nhất
          </h3>
        </div>

        <div></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CardInfoAdmin from "@components/CardInfoAdmin.vue"
import {
  faBook,
  faBookOpen,
  faUser,
  faUserCog,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
</script>
