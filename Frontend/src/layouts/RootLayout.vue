<template>
  <HeaderComponent></HeaderComponent>

  <router-view />

  <FooterComponent></FooterComponent>
</template>

<script setup>
import FooterComponent from "@components/FooterComponent.vue"
import HeaderComponent from "@components/HeaderComponent.vue"
</script>
