<template>
  <div class="flex h-screen w-screen items-center justify-center bg-gray-100">
    <div
      class="container flex flex-col items-center justify-center px-5 text-gray-700 md:flex-row"
    >
      <div class="max-w-md space-y-3">
        <div class="font-dark text-5xl font-bold">404</div>
        <p class="text-2xl font-light leading-normal md:text-3xl">
          Xin lỗi, trang này không tồn tại.
        </p>
        <p class="mb-8">
          Bạn có thể khám phá thêm tài liệu hữu ích khác tại trang chủ thư viện.
        </p>

        <router-link
          class="mt-3 inline-block rounded bg-[var(--primary-color)] px-8 py-2 text-white transition-all hover:bg-[var(--secondary-color)]"
          to="/"
        >
          Trang chủ
        </router-link>
      </div>
      <div class="ml-16 max-w-lg">
        <img
          class="w-[180px]"
          src="https://res.cloudinary.com/dpsj6nk7y/image/upload/v1752897238/CTU_logo_myxixs.png"
          alt="Logo_CTU"
        />
      </div>
    </div>
  </div>
</template>

<script setup></script>
