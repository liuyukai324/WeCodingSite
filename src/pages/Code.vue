<template>
  <header>
    <div class="container">
      <svg width="128" height="128" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <li class="clicked">广场</li>
        <li>Scratch</li>
        <li>Python</li>
        <li>C++</li>
        <li>Web</li>
        <li>Java</li>
        <li>其它</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">

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
  font-size: 60px;
  font-weight: 600;
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
  font-size: 20px;
  width: 100px;
  padding: 10px;
  background-color: white;
  margin: 10px 5px;
  cursor: pointer;
  justify-content: center;
  border-radius: 15px;
}

.projects-nav ul li:hover, .projects-nav ul li.clicked {
  background-image: linear-gradient(to right, #5dff88, #4fb4ff);
  color: white;
}

.projects-nav ul li:first-child {
  margin-left: 10px;
}

.projects-nav ul li:last-child {
  margin-right: 10px;
}

</style>