<template>
    <div id="screen-container" ref="screenRef">
        <template v-if="ready">
            <slot></slot>
        </template>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { debounce } from '../utils/index'

const props = defineProps({
    options: {
        type: Object,
        default: null
    }
})

const screenRef = ref()
// 大屏宽高
const width = ref(0)
const height = ref(0)
// 视口宽高
const originalWidth = ref(0)
const originalHeight = ref(0)

// 初始化宽高
const initSize = () => {
    return new Promise((resolve) => {
        nextTick(() => {
            if (props.options && props.options.width && props.options.height) {
                width.value = props.options.width
                height.value = props.options.height
            } else {
                width.value = screenRef.value.clientWidth
                height.value = screenRef.value.clientHeight
            }
            if (!originalWidth.value || !originalHeight.value) {
                originalWidth.value = window.screen.width
                originalHeight.value = window.screen.height
            } 
            resolve()
        })
    })
}
// 更新宽高
const updateSize = () => {
    if (width.value && height.value) {
        screenRef.value.style.width = `${width.value}px`
        screenRef.value.style.height = `${height.value}px`
    } else {
        screenRef.value.style.width = `${originalWidth.value}px`
        screenRef.value.style.height = `${originalHeight.value}px`
    }
}
// 压缩比
const updateScale = () => {
    // 获取body视口尺寸
    const currentWidth = document.body.clientWidth
    const currentHeight = document.body.clientHeight
    // 获取大屏最终的宽高
    const realWidth = width.value || originalWidth.value
    const realHeight = height.value || originalHeight.value
    console.log(currentHeight, realHeight)
    // 宽高压缩比
    const widthScale = currentWidth / realWidth;
    const heightScale = currentHeight / realHeight;
    screenRef.value.style.transform = `scale(${widthScale}, ${heightScale})`
}
// 监听窗口变化
const onResize = async (e) => {
    console.log('e', e)
    await initSize()
    updateScale()
}
let observer = null
// 监听dom样式变化
const observerDomResize = () => {
    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
    observer = new MutationObserver(onResize)
    observer.observe(screenRef.value, { attributes: true, attributeFilter: ['style'], attributeOldValue: true })
}
// 卸载监听observer
const removeMutationObserver = () => {
    if (observer) {
        observer.disconnect()
        observer.takeRecords()
        observer = null
    }
}
// 页面是否加载完成
const ready = ref(false)
onMounted(async () => {
    await initSize()
    updateSize()
    updateScale()
    window.addEventListener('resize', debounce(100, onResize))
    observerDomResize()
    ready.value = true
})
onUnmounted(() => {
    window.removeEventListener('resize', onResize)
    removeMutationObserver()
})
</script>

<style scoped>
#screen-container {
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    transform-origin: left top;
    z-index: 999;
}
</style>
