<template>
  <HeaderComponent />
  <SliderComponent />
  <ServiceComponent />

  <div class="flex justify-between gap-8 px-20">
    <SubBanner
      title="Luận văn tốt nghiệp"
      desc="Tìm ý tưởng luận văn"
      img="/sub-banner-1.jpg"
      textColor="#fff"
    />
    <SubBanner
      title="Giáo trình môn học"
      desc="Giảm giá 30% hôm nay"
      img="/sub-banner-2.jpg"
      textColor="#000"
    />
    <SubBanner
      title="Sách tham khảo nước ngoài"
      desc="Tài liệu học thuật quốc tế"
      img="/sub-banner-3.jpg"
      textColor="#000"
    />
  </div>

  <SliderBooks
    title="Sản phẩm mới"
    :data="newBooks"
    :amountDisplay="5"
    :gap="40"
  >
    <template #default="{ image, brand, title, vote, price }">
      <CardBook
        :image="image"
        :brand="brand"
        :title="title"
        :vote="vote"
        :price="price"
      />
    </template>
  </SliderBooks>
  <SliderBooks
    title="Sản phẩm nổi bật"
    :data="featureBooks"
    :amountDisplay="5"
    :gap="40"
  >
    <template #default="{ image, brand, title, vote, price }">
      <CardBook
        :image="image"
        :brand="brand"
        :title="title"
        :vote="vote"
        :price="price"
      />
    </template>
  </SliderBooks>

  <BannerComponent
    src="/banner-3.jpg"
    alt="banner-3"
    :price="72"
    name="Identity Theft Secrets Exposing The Tricks Of The Trade!"
    author="Deborah Harkness"
    :reverse="true"
    :style="{
      marginTop: '80px',
    }"
  />

  <div>
    <TopBlogs
      src="/top-blog-1.jpg"
      title="Best Choice For Learners"
      desc="Lorem Ipsum is simply dummy text of the printing and typesetting more lorem has been the industry standard the dummy text ever since the 1500s when an galley of type and scrambled it to make a type specimen book."
    />
    <TopBlogs
      src="/top-blog-2.jpg"
      title="10 Things you must know improve reading skills"
      desc="Lorem Ipsum is simply dummy text of the printing and typesetting more lorem has been the industry standard the dummy text ever since the 1500s when an galley of type and scrambled it to make a type specimen book."
      :reverse="true"
    />
  </div>

  <SliderBooks
    title="Sản phẩm yêu thích"
    :data="favoriteBooks"
    :amountDisplay="5"
    :gap="40"
  >
    <template #default="{ image, brand, title, vote, price }">
      <CardBook
        :image="image"
        :brand="brand"
        :title="title"
        :vote="vote"
        :price="price"
      />
    </template>
  </SliderBooks>

  <SliderBooks
    title="Cảm nhận từ độc giả"
    :data="voteCustomer"
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
  </SliderBooks>

  <div class="my-20 flex justify-between px-20">
    <div v-for="item in provider" :key="item.name">
      <a href="#" :title="item.name">
        <img :src="item.image" :alt="item.name" />
      </a>
    </div>
  </div>

  <hr class="mx-auto w-[90%]" />

  <SliderBooks
    title="Bản tin Thư viện"
    :data="news"
    :amountDisplay="3"
    :gap="48"
  >
    <template #default="{ image, time, topic, title, desc }">
      <NewsComponent
        :image="image"
        :time="time"
        :topic="topic"
        :title="title"
        :desc="desc"
      />
    </template>
  </SliderBooks>

  <FooterComponent />
</template>

<script setup>
import SliderComponent from "@components/SliderComponent.vue"
import HeaderComponent from "@components/HeaderComponent.vue"
import ServiceComponent from "@components/ServiceComponent.vue"
import SubBanner from "@components/SubBanner.vue"
import FooterComponent from "@components/FooterComponent.vue"
import SliderBooks from "@components/SliderBooks.vue"
import TopBlogs from "@components/TopBlogs.vue"
import BannerComponent from "@components/BannerComponent.vue"
import VoteCustomerCard from "@components/VoteCustomerCard.vue"
import CardBook from "@components/CardBook.vue"
import NewsComponent from "@components/NewsComponent.vue"

const newBooks = [
  {
    image: ["/1.jpg", "/2.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary 1",
    vote: 3,
    price: 55,
  },
  {
    image: ["/1.jpg", "/2.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary 2",
    vote: 5,
    price: 55,
  },
  {
    image: ["/1.jpg", "/2.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary 3",
    vote: 4,
    price: 55,
  },
  {
    image: ["/1.jpg", "/2.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary 4",
    vote: 4,
    price: 55,
  },
  {
    image: ["/1.jpg", "/2.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary 5",
    vote: 2,
    price: 55,
  },
  {
    image: ["/1.jpg", "/2.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary 6",
    vote: 4,
    price: 55,
  },
  {
    image: ["/1.jpg", "/2.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary 7",
    vote: 4,
    price: 55,
  },
  {
    image: ["/1.jpg", "/2.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary 8",
    vote: 5,
    price: 55,
  },
  {
    image: ["/1.jpg", "/2.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary",
    vote: 1,
    price: 55,
  },
  {
    image: ["/1.jpg", "/2.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary",
    vote: 3,
    price: 55,
  },
]

const featureBooks = [
  {
    image: ["/3.jpg", "/4.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary 1",
    vote: 3,
    price: 55,
  },
  {
    image: ["/3.jpg", "/4.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary 2",
    vote: 5,
    price: 55,
  },
  {
    image: ["/3.jpg", "/4.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary 3",
    vote: 4,
    price: 55,
  },
  {
    image: ["/3.jpg", "/4.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary 4",
    vote: 4,
    price: 55,
  },
  {
    image: ["/3.jpg", "/4.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary 5",
    vote: 2,
    price: 55,
  },
  {
    image: ["/3.jpg", "/4.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary 6",
    vote: 4,
    price: 55,
  },
  {
    image: ["/3.jpg", "/4.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary 7",
    vote: 4,
    price: 55,
  },
  {
    image: ["/3.jpg", "/4.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary 8",
    vote: 5,
    price: 55,
  },
  {
    image: ["/3.jpg", "/4.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary",
    vote: 1,
    price: 55,
  },
  {
    image: ["/3.jpg", "/4.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary",
    vote: 3,
    price: 55,
  },
]

const favoriteBooks = [
  {
    image: ["/5.jpg", "/6.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary 1",
    vote: 5,
    price: 80,
  },
  {
    image: ["/5.jpg", "/6.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary 1",
    vote: 2,
    price: 55,
  },
  {
    image: ["/5.jpg", "/6.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary 1",
    vote: 3,
    price: 52,
  },
  {
    image: ["/5.jpg", "/6.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary 1",
    vote: 5,
    price: 55,
  },
  {
    image: ["/5.jpg", "/6.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary 1",
    vote: 3,
    price: 155,
  },
  {
    image: ["/5.jpg", "/6.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary 1",
    vote: 2,
    price: 355,
  },
  {
    image: ["/5.jpg", "/6.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary 1",
    vote: 3,
    price: 85,
  },
  {
    image: ["/5.jpg", "/6.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary 1",
    vote: 4,
    price: 55,
  },
  {
    image: ["/5.jpg", "/6.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary 1",
    vote: 3,
    price: 25,
  },
  {
    image: ["/5.jpg", "/6.jpg"],
    brand: "EcomZone",
    name: "The Study Quran: A New Translation and Commentary 1",
    vote: 4,
    price: 35,
  },
]

const voteCustomer = [
  {
    vote: 5,
    comment: "It was a great experience!",
    desc: "There are many variations passages of lorem available to the majorit have suffered alteration some form slightly believable.",
    author: "Patrick Goodman 1",
  },
  {
    vote: 3,
    comment: "It was a great experience!",
    desc: "There are many variations passages of lorem available to the majorit have suffered alteration some form slightly believable.",
    author: "Patrick Goodman 2",
  },
  {
    vote: 5,
    comment: "It was a great experience!",
    desc: "There are many variations passages of lorem available to the majorit have suffered alteration some form slightly believable.",
    author: "Patrick Goodman 3",
  },
  {
    vote: 4,
    comment: "It was a great experience!",
    desc: "There are many variations passages of lorem available to the majorit have suffered alteration some form slightly believable.",
    author: "Patrick Goodman 4",
  },
  {
    vote: 2,
    comment: "It was a great experience!",
    desc: "There are many variations passages of lorem available to the majorit have suffered alteration some form slightly believable.",
    author: "Patrick Goodman 5",
  },
  {
    vote: 5,
    comment: "It was a great experience!",
    desc: "There are many variations passages of lorem available to the majorit have suffered alteration some form slightly believable.",
    author: "Patrick Goodman 6",
  },
  {
    vote: 5,
    comment: "It was a great experience!",
    desc: "There are many variations passages of lorem available to the majorit have suffered alteration some form slightly believable.",
    author: "Patrick Goodman 7",
  },
  {
    vote: 1,
    comment: "It was a great experience!",
    desc: "There are many variations passages of lorem available to the majorit have suffered alteration some form slightly believable.",
    author: "Patrick Goodman 8",
  },
  {
    vote: 2,
    comment: "It was a great experience!",
    desc: "There are many variations passages of lorem available to the majorit have suffered alteration some form slightly believable.",
    author: "Patrick Goodman 9",
  },
  {
    vote: 3,
    comment: "It was a great experience!",
    desc: "There are many variations passages of lorem available to the majorit have suffered alteration some form slightly believable.",
    author: "Patrick Goodman 10",
  },
]

const provider = [
  {
    name: "Carity",
    image: "/provider-1.jpg",
  },
  {
    name: "Carity",
    image: "/provider-2.jpg",
  },
  {
    name: "Carity",
    image: "/provider-3.jpg",
  },
  {
    name: "Carity",
    image: "/provider-4.jpg",
  },
  {
    name: "Carity",
    image: "/provider-1.jpg",
  },
  {
    name: "Carity",
    image: "/provider-1.jpg",
  },
  {
    name: "Carity",
    image: "/provider-1.jpg",
  },
]

const news = [
  {
    image: "/news-1.jpg",
    time: "15 October, 2024",
    topic: "Social Media 1",
    title: "How to Build a Detailed Business Plan That Stands Out",
    desc: "Expedita consequatur aut sed eaque minus Mollitia consequatur ipsum ut eaque illum sint. Sapiente ea explicabo. Lure...",
  },
  {
    image: "/news-1.jpg",
    time: "15 October, 2024",
    topic: "Social Media 2",
    title: "How to Build a Detailed Business Plan That Stands Out",
    desc: "Expedita consequatur aut sed eaque minus Mollitia consequatur ipsum ut eaque illum sint. Sapiente ea explicabo. Lure...",
  },
  {
    image: "/news-1.jpg",
    time: "15 October, 2024",
    topic: "Social Media 3",
    title: "How to Build a Detailed Business Plan That Stands Out",
    desc: "Expedita consequatur aut sed eaque minus Mollitia consequatur ipsum ut eaque illum sint. Sapiente ea explicabo. Lure...",
  },
  {
    image: "/news-1.jpg",
    time: "15 October, 2024",
    topic: "Social Media 4",
    title: "How to Build a Detailed Business Plan That Stands Out",
    desc: "Expedita consequatur aut sed eaque minus Mollitia consequatur ipsum ut eaque illum sint. Sapiente ea explicabo. Lure...",
  },
  {
    image: "/news-1.jpg",
    time: "15 October, 2024",
    topic: "Social Media 5",
    title: "How to Build a Detailed Business Plan That Stands Out",
    desc: "Expedita consequatur aut sed eaque minus Mollitia consequatur ipsum ut eaque illum sint. Sapiente ea explicabo. Lure...",
  },
  {
    image: "/news-1.jpg",
    time: "15 October, 2024",
    topic: "Social Media 6",
    title: "How to Build a Detailed Business Plan That Stands Out",
    desc: "Expedita consequatur aut sed eaque minus Mollitia consequatur ipsum ut eaque illum sint. Sapiente ea explicabo. Lure...",
  },
]
</script>
