<template>
  <div class="home">
    <div class="loading-text" v-if="loading">数据加载中...</div>
    <container :options="{width: 3840, height: 2160}" v-else>
      <div class="header">
        <top-header />
      </div>
      <div class="separator-wrapper">
        <separator />
      </div>
    </container>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Container from '../../components/container/index.vue'
import TopHeader from '../../components/TopHeader/index.vue'
import Separator from '../../components/Separator/index.vue'

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
  #screen-container {
    display: flex;
    flex-direction: column;

    .header {
      height: 167px;
      margin-top: 10px;
    }
    .separator-wrapper {
      height: 10px;
    }
  }
}
</style>
