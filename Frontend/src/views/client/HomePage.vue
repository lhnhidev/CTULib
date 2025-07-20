<template>
  <SliderBanner />

  <SubBanner></SubBanner>

  <Slider
    title="Sản phẩm mới"
    :data="books?.filter((book) => book.idFeatures?.includes('tuychon01'))"
    :amountDisplay="5"
    :gap="40"
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

  <TopBlogs></TopBlogs>

  <Slider
    title="Sản phẩm nổi bật"
    :data="books?.filter((book) => book.idFeatures?.includes('tuychon02'))"
    :amountDisplay="5"
    :gap="40"
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

  <BannerComponent
    src="https://res.cloudinary.com/dpsj6nk7y/image/upload/v1752865788/banner-3_tjujhd.jpg"
    alt="banner-3"
    :price="72"
    name="Identity Theft Secrets Exposing The Tricks Of The Trade!"
    author="Deborah Harkness"
    :reverse="true"
    :style="{
      marginTop: '80px',
    }"
  />

  <Slider
    title="Sản phẩm yêu thích"
    :data="books?.filter((book) => book.idFeatures?.includes('tuychon03'))"
    :amountDisplay="5"
    :gap="40"
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

  <Slider
    title="Cảm nhận từ độc giả"
    :data="votes"
    :amountDisplay="3"
    :gap="48"
    :style="{
      backgroundColor: 'rgb(37 155 198 / 24%)',
      paddingTop: '90px',
      paddingBottom: '90px',
    }"
  >
    <template #default="{ vote, comment, desc, user }">
      <VoteCustomerCard
        :vote="vote"
        :comment="comment"
        :desc="desc"
        :user="user"
      />
    </template>
  </Slider>

  <div class="my-20 flex justify-between px-20">
    <div v-for="publisher in publishers" :key="publisher.name">
      <a href="#" :title="publisher.name">
        <img :src="publisher.image" :alt="publisher.name" />
      </a>
    </div>
  </div>

  <hr class="mx-auto w-[90%]" />

  <Slider title="Bản tin Thư viện" :data="blogs" :amountDisplay="3" :gap="48">
    <template #default="{ image, time, topic, title, desc }">
      <NewsComponent
        :image="image"
        :time="time"
        :topic="topic"
        :title="title"
        :desc="desc"
      />
    </template>
  </Slider>
</template>

<script setup>
import SliderBanner from "@components/SliderBanner/SliderBanner.vue"
import SubBanner from "@components/SubBanner/SubBanner.vue"
import Slider from "@components/Slider/Slider.vue"
import BannerComponent from "@components/BannerComponent.vue"
import VoteCustomerCard from "@components/VoteCustomerCard.vue"
import CardBook from "@components/CardBook.vue"
import NewsComponent from "@components/NewsComponent.vue"
import TopBlogs from "@components/TopBlogs/TopBLogs.vue"
import { useFetch } from "@/hooks/useFetch"

const api = import.meta.env.VITE_HOST

const { data: books } = useFetch(`${api}books`)
const { data: publishers } = useFetch(`${api}publishers`)
const { data: blogs } = useFetch(`${api}blogs`)
const { data: votes } = useFetch(`${api}votes`)
</script>
