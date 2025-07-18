<template>
  <div>
    <BlogItem
      src="https://res.cloudinary.com/dpsj6nk7y/image/upload/v1752865880/top-blog-1_w9ovpx.jpg"
      title="Best Choice For Learners"
      desc="Lorem Ipsum is simply dummy text of the printing and typesetting more lorem has been the industry standard the dummy text ever since the 1500s when an galley of type and scrambled it to make a type specimen book."
    />
    <BlogItem
      src="https://res.cloudinary.com/dpsj6nk7y/image/upload/v1752865880/top-blog-2_gvfedd.png"
      title="10 Things you must know improve reading skills"
      desc="Lorem Ipsum is simply dummy text of the printing and typesetting more lorem has been the industry standard the dummy text ever since the 1500s when an galley of type and scrambled it to make a type specimen book."
      :reverse="true"
    />
  </div>
</template>

<script setup>
import BlogItem from "./BlogItem.vue"
</script>
