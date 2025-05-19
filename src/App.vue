<template>
  <Topbar :router="router"/>
  <router-view></router-view>
</template>

<script lang="ts" setup>
  import {useRouter} from "vue-router"
  const router = useRouter()
  import Topbar from "./components/Topbar.vue"
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