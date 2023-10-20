<template>
  <div class="home">
    <div class="loading-text" v-if="loading">数据加载中...</div>
    <container :options="{width: 3840, height: 2160}" v-else>
      <div class="text">123</div>
    </container>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import container from '../../components/container.vue'

const loading = ref(true)

setTimeout(() => {
  loading.value = false
}, 1000)
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background-color: rgb(29, 29, 29);
  color: #fff;
  font-size: 48px;
}
</style>
