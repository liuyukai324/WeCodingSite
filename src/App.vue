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
@import "assets/css/base.css";
</style>
<style scoped>
@import "assets/css/app.css";
</style>