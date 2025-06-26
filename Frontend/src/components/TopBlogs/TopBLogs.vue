<template>
  <div>
    <BlogItem
      src="/top-blog-1.jpg"
      title="Best Choice For Learners"
      desc="Lorem Ipsum is simply dummy text of the printing and typesetting more lorem has been the industry standard the dummy text ever since the 1500s when an galley of type and scrambled it to make a type specimen book."
    />
    <BlogItem
      src="/top-blog-2.jpg"
      title="10 Things you must know improve reading skills"
      desc="Lorem Ipsum is simply dummy text of the printing and typesetting more lorem has been the industry standard the dummy text ever since the 1500s when an galley of type and scrambled it to make a type specimen book."
      :reverse="true"
    />
  </div>
</template>

<script setup>
import BlogItem from "./BlogItem.vue"
</script>
