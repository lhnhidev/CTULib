<template>
  <ServiceComponent />

  <div class="flex justify-between gap-8 px-20">
    <CardBanner
      title="Luận văn tốt nghiệp"
      desc="Tìm ý tưởng luận văn"
      img="/sub-banner-1.jpg"
      textColor="#fff"
    />
    <CardBanner
      title="Giáo trình môn học"
      desc="Giảm giá 30% hôm nay"
      img="/sub-banner-2.jpg"
      textColor="#000"
    />
    <CardBanner
      title="Sách tham khảo nước ngoài"
      desc="Tài liệu học thuật quốc tế"
      img="/sub-banner-3.jpg"
      textColor="#000"
    />
  </div>
</template>

<script setup>
import ServiceComponent from "./ServiceComponent.vue"
import CardBanner from "./CardBanner.vue"
</script>
