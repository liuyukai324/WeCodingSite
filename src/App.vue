<template>
  <Background/>
  <div class="app">
    <Topbar/>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Topbar from "@/components/Topbar.vue"
import Background from "@/components/Background.vue"
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
  max-width: 1240px;
  margin: auto;
}

.glass {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
.linear {
  background-image: linear-gradient(to right, #2ecc71, #3498db);
  background-clip: text;
  color: transparent;
}
.btn:hover {
  background-color: #57DDBE;
}
.btn:active {
  background-color: #79DDC6;
}
</style>
<style scoped>
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
</style>