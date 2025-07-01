<template>
  <div class="project glass" ref="project">
    <div class="text">
      <div class="name">{{ name }}</div>
      <div class="description">{{ description }}</div>
    </div>
    <div class="tags">
      <div class="lang">
        <img src="@/assets/icons/lang.svg" alt="语言">
        <span>{{ lang }}</span>
      </div>
      <div class="author">
        <img src="@/assets/icons/author.svg" alt="作者">
        <span>{{ author }}</span>
      </div>
      <div class="good">
        <img src="@/assets/icons/good.svg" alt="点赞">
        <span>{{ star }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {name, description, lang, author, star} =
    defineProps(
        ["name", "description", "lang", "author", "star"])
// const project = ref<HTMLElement>()
// onUpdated(() => {
//   console.log(1)
//   project.value!.style.transform = "translateY(100px)"
// })
</script>

<style scoped>
@import "@/assets/css/project.css";
</style>