<template>
  <div class="background">
<!--    <div class="ball"></div>-->
<!--    <div class="ball"></div>-->
<!--    <div class="ball"></div>-->
<!--    <div class="ball"></div>-->
<!--    <div class="ball"></div>-->
<!--    <div class="ball"></div>-->
<!--    <div class="ball"></div>-->
<!--    <div class="ball"></div>-->
<!--    <div class="ball"></div>-->
<!--    <div class="ball"></div>-->
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
/* 背景 */
.background {
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: #141B2C;
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
</style>