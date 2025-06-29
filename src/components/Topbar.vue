<template>
  <div class="topbar glass">
    <div class="container">
      <div class="title linear">一个没有名字的coding站</div>
      <nav>
        <a class="btn-text" @click="home">首页</a>
        <a class="btn-text" @click="code">代码仓库</a>
        <a class="btn-text">我的</a>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
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

<style scoped>
/* 顶栏 */
.topbar {
  height: 90px;
  position: sticky;
  top: 0;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: rgba(216, 216, 216, 0.5);
  z-index: 1;
}

.container {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 28px;
  font-weight: bold;
}

nav {
  color: white;
  display: flex;
  gap: 72px;
  font-size: 20px;
  font-weight: 500;
}

nav a {
  cursor: pointer;
  background-color: white;
  background-clip: text;
  color: transparent;
}
</style>