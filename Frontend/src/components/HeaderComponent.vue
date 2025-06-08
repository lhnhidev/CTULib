<template>
  <header class="w-full">
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
      <div class="flex w-64 items-center">
        <img src="/logo.svg" alt="CTULib logo" />
      </div>

      <nav class="flex">
        <div>
          <a href="#" class="block px-5 py-8">Books</a>
        </div>
        <div>
          <a href="#" class="block px-5 py-8">Categorise</a>
        </div>
        <div>
          <a href="#" class="block px-5 py-8">Religion</a>
        </div>
        <div>
          <a href="#" class="block px-5 py-8">Products</a>
        </div>
        <div>
          <a href="#" class="block px-5 py-8">Historical</a>
        </div>
        <div>
          <a href="#" class="block px-5 py-8">Contact Us</a>
        </div>
        <div>
          <a href="#" class="block px-5 py-8">News</a>
        </div>
      </nav>

      <div>
        <div>
          <a href="#">
            <FontAwesomeIcon :icon="faMagnifyingGlass" />
          </a>
        </div>
        <div>
          <a href="#"></a>
        </div>
        <div>
          <a href="#"></a>
        </div>
        <div>
          <a href="#"></a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
</script>
