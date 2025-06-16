<template>
  <div class="background">
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
  </div>
  <div class="app">
    <div class="topbar">
      <div class="container">
        <div class="title">没有名字的coding站</div>
        <div class="nav">
          <ul>
            <li @click="home">
              <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18V42H39V18L24 6L9 18Z" fill="none" stroke="currentColor" stroke-width="4"
                      stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M19 29V42H29V29H19Z" fill="none" stroke="currentColor" stroke-width="4"
                      stroke-linejoin="round"/>
                <path d="M9 42H39" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
              </svg>
              <a href="javascript: ">首页</a>
            </li>
            <li @click="code">
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
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useRouter} from "vue-router"

const router = useRouter()

function home() {
  router.replace({
    path: "/home",
  })
}

function code() {
  router.replace({
    path: "/code",
  })
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  flex-direction: column;
  position: relative;
}

.container {
  max-width: 1200px;
  margin: auto;
}
</style>
<style scoped>
/* 背景 */
.background {
  position: absolute;
  height: 100vh;
  width: 100vw;
  /*background-color: #080f11;*/
  background-color: #282c34;
  overflow: hidden;
}

.background .ball {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #57DDBE;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8),
  0 0 20px rgba(255, 255, 255, 0.3);
  margin: 30px;
  position: absolute;
  animation: move 10s linear infinite;
  opacity: 0;
}

.background .ball:nth-child(1) {
  left: 30%;
  top: 10%;
  height: 20px;
  width: 20px;
  animation-delay: 2s;
}

.background .ball:nth-child(2) {
  left: 80%;
  top: 20%;
  height: 16px;
  width: 16px;
  animation-delay: 0s;
}

.background .ball:nth-child(3) {
  left: 80%;
  top: 0;
  height: 10px;
  width: 10px;
  animation-delay: 6s;
}

.background .ball:nth-child(4) {
  left: 10%;
  top: 10%;
  height: 22px;
  width: 22px;
  animation-delay: 8s;
}

.background .ball:nth-child(5) {
  left: 50%;
  top: 5%;
  height: 20px;
  width: 20px;
  animation-delay: 0s;
}

.background .ball:nth-child(6) {
  left: 25%;
  top: 20%;
  height: 18px;
  width: 18px;
  animation-delay: 12s;
}

.background .ball:nth-child(6) {
  left: 70%;
  top: 20%;
  height: 18px;
  width: 18px;
  animation-delay: 2s;
}

.background .ball:nth-child(6) {
  left: 68%;
  top: 30%;
  height: 14px;
  width: 14px;
  animation-delay: 6s;
}

.background .ball:nth-child(6) {
  left: 76%;
  top: 24%;
  height: 14px;
  width: 14px;
  animation-delay: 8s;
}

.background .ball:nth-child(6) {
  left: 90%;
  top: 14%;
  height: 18px;
  width: 18px;
  animation-delay: 5s;
}

@keyframes move {
  from {
    transform: translateY(0) scale(1);
    opacity: 0;
  }
  30% {
    opacity: 1;
    transform: translateY(28vh) scale(1.2);
  }
  80% {
    opacity: 0.8;
    transform: translateY(74vh) scale(1.1);
  }
  to {
    opacity: 0;
    transform: translateY(90vh) scale(0.9);
  }
}

.app {
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  overflow: auto;
}
.app::-webkit-scrollbar {
  background-color: #282c34;
}
.app::-webkit-scrollbar-thumb {
  background-color: #21252b;
  border: 2px solid #282c34;
}
/* 顶栏 */
.topbar {
  position: sticky;
  top: 0;
  background-color: #282c34;
  padding: 14px;
  border-bottom: 1px solid #21252b;
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
  color: #57DDBE;
}

.topbar .user {
  display: flex;
  cursor: pointer;
  align-items: center;
  color: white;
}

</style>