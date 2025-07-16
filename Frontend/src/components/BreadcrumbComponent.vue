<template>
  <div
    class="animate__animated animate__fadeIn flex h-28 w-full items-center justify-center bg-center"
    style="
      background-image: url(&quot;https://www.ctu.edu.vn/images/cong-truong-3.png&quot;);
    "
  >
    <div
      class="animate__animated animate__fadeInDown flex flex-col items-center"
    >
      <h3
        class="text-[26px] font-bold uppercase tracking-wider text-white"
        :style="{ wordSpacing: '4px', ...styleTitle }"
      >
        {{ title }}
      </h3>

      <el-breadcrumb separator="|">
        <el-breadcrumb-item
          v-for="item in breadcrumb"
          :key="item"
          :to="{ path: item.path }"
        >
          <span
            :class="`text-lg text-white ${item.path != '' ? 'font-bold' : ''}`"
            >{{ item.label }}</span
          >
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script setup>
const { title, breadcrumb } = defineProps({
  title: String,
  breadcrumb: Array,
  styleTitle: Object,
})
</script>

<style>
.el-breadcrumb__separator {
  color: white !important;
  font-weight: normal !important;
  font-size: 20px;
}
</style>
