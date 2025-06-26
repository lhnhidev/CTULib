<template>
  <header class="sticky top-[-44px] z-50 w-full shadow-sm">
    <div
      class="flex justify-between bg-[var(--bg-black-color)] px-4 py-3 text-sm text-gray-300"
    >
      <div>
        <span
          >Limited Time Offer : Up To 50% Off Every Week For Selected Item</span
        >
      </div>

      <div class="flex gap-3">
        <span class="bar">demo@example.com</span>
        <span class="bar">(+91) 9876-543-210</span>
        <span class="bar">Vietnamese</span>
        <span>USD</span>
      </div>
    </div>

    <div class="flex justify-between bg-white px-4">
      <a href="#" class="flex w-72 items-center">
        <img
          :src="`${imgApi}v1750824523/logomobile_dtgqs2.png`"
          alt="CTULib_logo"
        />
      </a>

      <nav class="flex items-center">
        <div>
          <router-link
            to="/"
            class="block px-5 py-4 hover:text-[var(--primary-color)]"
            >Trang chủ</router-link
          >
        </div>
        <div>
          <router-link
            to="/books"
            class="block px-5 py-4 hover:text-[var(--primary-color)]"
            >Sách</router-link
          >
        </div>
        <div>
          <a href="#" class="block px-5 py-4 hover:text-[var(--primary-color)]"
            >Ebook</a
          >
        </div>
        <div>
          <a href="#" class="block px-5 py-4 hover:text-[var(--primary-color)]"
            >Lịch sử</a
          >
        </div>
        <div>
          <a href="#" class="block px-5 py-4 hover:text-[var(--primary-color)]"
            >Tin tức</a
          >
        </div>
        <div>
          <a href="#" class="block px-5 py-4 hover:text-[var(--primary-color)]"
            >Giới thiệu</a
          >
        </div>
        <div>
          <a href="#" class="block px-5 py-4 hover:text-[var(--primary-color)]"
            >Liên hệ</a
          >
        </div>
      </nav>

      <div class="flex gap-5">
        <div class="flex items-center">
          <a href="#" class="text-2xl hover:text-[var(--primary-color)]">
            <FontAwesomeIcon :icon="faMagnifyingGlass" />
          </a>
        </div>
        <div class="flex items-center">
          <a href="#" class="text-2xl hover:text-[var(--primary-color)]">
            <FontAwesomeIcon :icon="faUser" />
          </a>
        </div>
        <div class="flex items-center">
          <a href="#" class="text-2xl hover:text-[var(--primary-color)]">
            <FontAwesomeIcon :icon="faHeart" />
          </a>
        </div>
        <div class="flex items-center">
          <a href="#" class="text-2xl hover:text-[var(--primary-color)]">
            <FontAwesomeIcon :icon="faBagShopping" />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import {
  faMagnifyingGlass,
  faBagShopping,
  faUser,
  faHeart,
} from "@fortawesome/free-solid-svg-icons"

const imgApi = import.meta.env.VITE_IMAGE
// import {} from "@fortawesome/free-regular-svg-icons"
</script>
