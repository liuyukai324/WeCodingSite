<template>
  <Topbar/>
</template>

<script lang="ts" setup>
  import Topbar from "./components/Topbar.vue"
  import Home from "./pages/Home.vue"
  import Code from "./pages/Code.vue"
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: black;
  display: flex;
  flex-direction: column;
}

.container {
  width: 1200px;
  margin: auto;
}
</style>