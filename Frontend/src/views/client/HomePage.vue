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

  <SliderBooks title="Sản phẩm mới" />

  <FooterComponent />
</template>

<script setup>
import SliderComponent from "@components/SliderComponent.vue"
import HeaderComponent from "@components/HeaderComponent.vue"
import ServiceComponent from "@components/ServiceComponent.vue"
import SubBanner from "@components/SubBanner.vue"
import FooterComponent from "@components/FooterComponent.vue"
import SliderBooks from "@components/SliderBooks.vue"
</script>
