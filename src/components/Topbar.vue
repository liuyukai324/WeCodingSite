<template>
  <div class="topbar">
    <div class="container">
      <div class="title">没有名字的coding站</div>
      <div class="nav">
        <ul>
          <li>
            <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18V42H39V18L24 6L9 18Z" fill="none" stroke="currentColor" stroke-width="4"
                    stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M19 29V42H29V29H19Z" fill="none" stroke="currentColor" stroke-width="4"
                    stroke-linejoin="round"/>
              <path d="M9 42H39" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
            </svg>
            <a href="javascript: ">首页</a>
          </li>
          <li>
            <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="12" width="36" height="30" rx="2" fill="none" stroke="currentColor"
                    stroke-width="4" stroke-linejoin="round"/>
              <path d="M17.9497 24.0083L29.9497 24.0083" stroke="currentColor" stroke-width="4"
                    stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6 13L13 5H35L42 13" stroke="currentColor" stroke-width="4" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
            <a href="javascript: ">仓库</a>
          </li>
        </ul>
      </div>
      <div class="user">
        <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          <path
              d="M24 23C26.7614 23 29 20.7614 29 18C29 15.2386 26.7614 13 24 13C21.2386 13 19 15.2386 19 18C19 20.7614 21.2386 23 24 23Z"
              fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
          <path d="M10.022 38.332C10.3657 33.1206 14.7016 29 20 29H28C33.2914 29 37.6229 33.1097 37.9767 38.3113"
                stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
/* 顶栏 */

.topbar {
  position: sticky;
  top: 0;
  background-color: black;
  padding: 14px;
  border-bottom: 1px solid #333;
}

.topbar .container {
  display: flex;
  justify-content: space-between;
}

.topbar .title {
  display: flex;
  color: white;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
}

.topbar .nav {
  display: flex;
  align-items: center;
}

.topbar .nav ul {
  display: flex;
  list-style: none;
}

.topbar .nav ul li {
  display: flex;
  margin-left: 30px;
  align-items: center;
  cursor: pointer;
}

.topbar .nav ul li:first-child {
  margin-left: 0;
}

.topbar .nav ul li a {
  text-decoration: none;
  color: white;
  font-size: 18px;
}

.topbar .nav ul li svg {
  color: white;
  height: 26px;
  margin-right: 6px;
}

.topbar .nav ul li:hover a,
.topbar .nav ul li:hover svg {
  color: #32aab7;
}

.topbar .user {
  display: flex;
  cursor: pointer;
  align-items: center;
  color: white;
}

</style>