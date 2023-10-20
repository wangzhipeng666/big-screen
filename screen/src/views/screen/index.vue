<template>
  <div class="home">
    <container :options="{width: 3840, height: 2160}">
      <div class="text">123</div>
    </container>
  </div>
</template>

<script setup>
import container from '../../components/container.vue'
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  .text {
    color: red;
    font-size: 140px;
  }
}
</style>
