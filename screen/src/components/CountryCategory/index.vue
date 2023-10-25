<template>
    <div class="country-category">
      <div
        class="category"
        v-for="(item, index) in categoryData" :key="item"
        @click="click(index)"
        @mouseenter="mouseIn(index)"
        @mouseleave="mouseOut(index)"
      >
        <div
          class="selected"
          v-if="index === selected"
          :style="{background: color[0]}"
        >
          {{item}}
        </div>
        <div
          class="hovered"
          v-else-if="index === hover"
          :style="{background: color[1]}"
        >
          {{item}}
        </div>
        <div v-else>{{item}}</div>
      </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
    categoryData: {
        type: Array
    },
    color: {
        type: Array,
        default() {
            return ['rgb(140, 160, 173)', 'rgb(80, 80, 80)']
        }
    }
})

const selected = ref(0)
const click = (index) => {
    selected.value = index
}

const hover = ref(-1)
const mouseIn = (index) => {
    hover.value = index
}
const mouseOut = () => {
    hover.value = -1
}
let task
onMounted(() => {
    task = setInterval(() => {
        if (selected.value + 1 > props.categoryData.length - 1) {
            selected.value = 0
        } else {
            selected.value++
        }
    }, 2000)
})
onUnmounted(() => {
    task && clearInterval(task)
})
</script>

<style lang="scss" scoped>
  .country-category {
    display: flex;
    width: 100%;
    height: 100%;

    .category {
      flex: 1;
      background: rgb(53, 57, 65);
      font-size: 24px;
      color: rgb(144, 160, 174);

      .hovered {
        background: rgb(80, 80, 80);
      }

      .selected {
        background: rgb(140, 160, 173);
        color: #fff;
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>