<template>
  <header>
    <div class="container">
      <svg width="96" height="96" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="12" width="36" height="30" rx="2" fill="none" stroke="currentColor" stroke-width="4"
              stroke-linejoin="round"/>
        <path d="M17.9497 24.0083L29.9497 24.0083" stroke="currentColor" stroke-width="4" stroke-linecap="round"
              stroke-linejoin="round"/>
        <path d="M6 13L13 5H35L42 13" stroke="currentColor" stroke-width="4" stroke-linecap="round"
              stroke-linejoin="round"/>
      </svg>
      <span>仓库</span>
    </div>
  </header>
  <div class="projects-nav">
    <div class="container">
      <ul>
        <li :class="clicked(1)" @click="click = 1">广场</li>
        <li :class="clicked(2)" @click="click = 2">Scratch</li>
        <li :class="clicked(3)" @click="click = 3">Python</li>
        <li :class="clicked(4)" @click="click = 4">C++</li>
        <li :class="clicked(5)" @click="click = 5">Web</li>
        <li :class="clicked(6)" @click="click = 6">Java</li>
        <li :class="clicked(7)" @click="click = 7">其它</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue"
let click = ref(1);
function clicked(n:number) {
  if (click.value === n) {
    return "clicked"
  } else {
    return
  }
}
</script>

<style scoped>
/* 头部 */
header .container {
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

header .container span {
  margin-left: 10px;
  font-size: 70px;
  font-weight: 600;
  cursor: default;
}

/* 筛选栏 */
.projects-nav {
  margin-top: 10px;
}

.projects-nav .container {
  display: flex;
  justify-content: center;
}

.projects-nav ul {
  display: flex;
  list-style: none;
}

.projects-nav ul li {
  display: flex;
  font-weight: 500;
  font-size: 20px;
  width: 100px;
  padding: 10px;
  background-color: white;
  margin: 10px 8px;
  cursor: pointer;
  justify-content: center;
  border-radius: 22px;
  transition: all 0.3s ease;
}

.projects-nav ul li:first-child {
  margin-left: 16px;
}

.projects-nav ul li:last-child {
  margin-right: 16px;
}

.projects-nav ul li:hover, .projects-nav ul li.clicked {
  background-color: rgb(87, 221, 190);
  color: white;
  transform: scale(1.05);
}

</style>