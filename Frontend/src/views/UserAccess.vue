<template>
  <div>
    <div
      class="flex h-[100vh] w-full items-center justify-center bg-cover bg-center"
      style="
        background-image:
          linear-gradient(rgb(59 167 207 / 10%), rgb(19 37 59 / 80%)),
          url(&quot;https://res.cloudinary.com/dpsj6nk7y/image/upload/v1751383483/467_Chouocmobaycao-min_lzsak3.jpg&quot;);
      "
      :key="url"
    >
      <div
        class="animate__animated animate__fadeIn w-[450px] rounded-lg bg-white px-7 py-9 shadow-[rgba(0,0,0,0.24)_0px_3px_8px]"
      >
        <div>
          <h2 class="mb-1 text-[28px] font-bold text-[var(--primary-color)]">
            {{ title }}
          </h2>
          <p class="text-gray-600">{{ desc }}</p>
        </div>

        <component
          :is="formType"
          :url="url"
          @update:url="(newValue) => (url = newValue)"
        ></component>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRoute } from "vue-router"

const { title, desc, formType } = defineProps({
  title: String,
  desc: String,
  formType: Object,
})

const route = useRoute()
const url = ref(route.path)
</script>
