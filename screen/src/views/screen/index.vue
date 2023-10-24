<template>
  <div class="home">
    <div class="loading-text" v-if="loading">数据加载中...</div>
    <container :options="{ width: 3840, height: 2160 }" v-else>
      <div class="header">
        <top-header />
      </div>
      <div class="separator-wrapper">
        <separator />
      </div>
      <div class="center">
        <div class="left">
          <div class="left1">
            <total-user
              :today-user="userData.userToday"
              :growth-last-day="+userData.userGrowthLastDay || 0"
              :growth-last-month="+userData.userGrowthLastMonth || 0"
            />
          </div>
          <div class="left2">
            <average-age
              :age-data="ageData"
              :avg-age="+userData.averageAge || 0"
              ref="averageAge"
            />
          </div>
        </div>
      </div>
    </container>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Container from "../../components/container/index.vue";
import TopHeader from "../../components/TopHeader/index.vue";
import Separator from "../../components/Separator/index.vue";
import TotalUser from "../../components/TotalUser/index.vue";
import AverageAge from "../../components/AverageAge/index.vue";
import { averageAge, useScreenData } from "./useScreenData.js";

const loading = ref(true);
const { ready, userData, ageData, deviceData, realTimeOrder, mapData } = useScreenData({ once: true });

setTimeout(() => {
  loading.value = false;
}, 1000);
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
    .center {
      flex: 1;
      display: flex;

      .left {
        flex: 0 0 860px;
        display: flex;
        flex-direction: column;
        width: 860px;
        height: 100%;
        margin: 0 10px;
        box-sizing: border-box;
        background: rgb(60, 61, 64);

        .left1,
        .left2,
        .left3,
        .left4,
        .left5,
        .left6 {
          padding-bottom: 20px;
        }

        .left1 {
          height: 300px;
        }

        .left2 {
          height: 320px;
        }

        .left3 {
          height: 280px;
        }

        .left4 {
          height: 230px;
        }

        .left5 {
          height: 360px;
        }

        .left6 {
          height: 360px;
        }
      }
    }
  }
}
</style>
