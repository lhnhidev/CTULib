<template>
  <ServiceComponent />

  <div class="flex justify-between gap-8 px-20">
    <CardBanner
      title="Luận văn tốt nghiệp"
      desc="Tìm ý tưởng luận văn"
      img="https://res.cloudinary.com/dpsj6nk7y/image/upload/v1752865838/sub-banner-1_jpjoul.jpg"
      textColor="#fff"
    />
    <CardBanner
      title="Giáo trình môn học"
      desc="Giảm giá 30% hôm nay"
      img="https://res.cloudinary.com/dpsj6nk7y/image/upload/v1752865837/sub-banner-2_dzeu0c.jpg"
      textColor="#000"
    />
    <CardBanner
      title="Sách tham khảo nước ngoài"
      desc="Tài liệu học thuật quốc tế"
      img="https://res.cloudinary.com/dpsj6nk7y/image/upload/v1752865837/sub-banner-3_gfsdvq.jpg"
      textColor="#000"
    />
  </div>
</template>

<script setup>
import ServiceComponent from "./ServiceComponent.vue"
import CardBanner from "./CardBanner.vue"
</script>
