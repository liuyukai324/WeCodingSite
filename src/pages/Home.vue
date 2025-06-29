<template>
  <header>
    <div class="container">
      <div class="title linear">没有名字的<span>coding</span>站</div>
      <div class="text">
        没有名字的coding站<br>
        by 刘誉锴 陈瑾轩 杨鑫浩
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style scoped>
header {
  color: white;
}

header .container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

header .container .title {
  display: flex;
  align-items: center;
  height: calc(1em + 50px);
  margin: 40px;
  font-size: 100px;
  font-weight: 900;
}

header .container .title span {
  font-family: Consolas, sans-serif;
  border-right: 2px solid white;
  animation: title 750ms;
  animation-iteration-count: infinite;
}

@keyframes title {
  from {
    border-right: 5px solid white;
  }
  to {
    border-right: 5px solid transparent;
  }
}

header .container .text {
  margin: auto;
  text-align: center;
  font-size: 20px;
}

</style>