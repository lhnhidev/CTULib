<template>
  <div v-if="book" class="flex justify-between gap-16 px-20 py-10">
    <BookImage :image="book.image"></BookImage>

    <div>
      <RatingStars
        :vote="5"
        :style="{ textAlign: 'left', fontSize: '16px' }"
      ></RatingStars>
      <div>
        <h2 class="my-3 text-3xl text-[var(--primary-color)]">
          {{ book.name }}
        </h2>
        <p
          v-html="book.desc"
          class="line-clamp-3 space-y-2 text-justify text-gray-600"
        ></p>
        <hr class="my-4" />
      </div>

      <div>
        <p>
          Tác giả: <span>{{ book.author }}</span>
        </p>
        <p>
          Nhà sản xuất: <span>{{ book.publisher }}</span>
        </p>
        <p>
          Năm xuất bản: <span>{{ book.release }}</span>
        </p>
        <p>
          Số lượng có sẵn: <span>{{ book.amount }}</span>
        </p>
        <!-- Ngôn ngữ, thể loại, hình ảnh nhà xuất bản, giá, nút thêm giỏ hàng, nút số lượng -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFetch } from "@/hooks/useFetch"
import BookImage from "@components/BookImage.vue"
import RatingStars from "@components/RatingStars.vue"
import { onMounted } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()
const id = route.params.id

const { data: book } = useFetch(`${import.meta.env.VITE_HOST}books/${id}`)
onMounted(() => console.log(book))
</script>
