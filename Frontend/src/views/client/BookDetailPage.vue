<template>
  <BreadcrumbComponent
    :title="book?.name"
    :styleTitle="{ fontSize: '20px', wordSpacing: '2px' }"
    :breadcrumb="[
      { label: 'Trang chủ', path: '/' },
      { label: 'Sách', path: '/books' },
      { label: book?.name, path: '' },
    ]"
  ></BreadcrumbComponent>
  <div :key="keyValue">
    <div v-if="book" class="flex justify-between gap-16 px-20 py-10">
      <BookImage :image="book.image" :flexCol="false"></BookImage>

      <div>
        <BookDetails
          :book="book"
          :showBookAction="true"
          :theLoaiInline="false"
          :donGiaInlineName="false"
        ></BookDetails>
      </div>
    </div>

    <div>
      <TabInfoBook :book="book"></TabInfoBook>

      <Slider
        title="Gợi ý của bạn"
        :data="relativeBook?.slice(0, 8)"
        :amountDisplay="5"
        :gap="40"
        :style="{ marginTop: '60px' }"
      >
        <template #default="{ image, brand, title, vote, price, maSach }">
          <CardBook
            :image="image"
            :brand="brand"
            :title="title"
            :vote="vote"
            :price="price"
            :id="maSach"
          />
        </template>
      </Slider>
    </div>
  </div>
</template>

<script setup>
import { useFetch } from "@/hooks/useFetch"
import BookImage from "@components/BookImage.vue"
import BookDetails from "@components/BookDetails/BookDetails.vue"
import CardBook from "@components/CardBook.vue"
import { useRoute } from "vue-router"
import TabInfoBook from "@components/BookDetails/TabInfoBook.vue"
import Slider from "@components/Slider/Slider.vue"
import { computed, ref, watch } from "vue"
import BreadcrumbComponent from "@components/BreadcrumbComponent.vue"

const route = useRoute()
const id = ref(route.params.id)
const url = computed(() => `${import.meta.env.VITE_HOST}books/${id.value}`)
const keyValue = computed(() => route.fullPath)

const { data: book } = useFetch(url.value)
const { data: relativeBook } = useFetch(`${import.meta.env.VITE_HOST}books`)

watch(
  () => route.params.id,
  async () => {
    id.value = route.params.id
    const data = await fetch(url.value)
    book.value = await data.json()
    console.log(book.value)
  },
)
</script>
