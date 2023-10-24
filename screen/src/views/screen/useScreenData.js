import { onMounted, onUnmounted, ref } from 'vue'
import { getMapData, getUserData } from '../../api'

const color = ['rgb(116,166,49)', 'rgb(190,245,99)', 'rgb(202,252,137)', 'rgb(251,253,142)']

let task = null

const killTask = () => {
    if (task) {
        clearInterval(task)
    }
}

function getNowTime() {
    const now = new Date()
    return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
}

export const totalUser = ref()
export const averageAge = ref()

const createData = async ({ userData, ageData, deviceData, realTimeOrder }) => {
    userData.value = await getUserData()
    userData.value.age.forEach((item, index) => {
        if (ageData.value[index]) {
        ageData.value[index] = {
            startValue: ageData.value[index].value,
            value: item.value,
            axis: item.key,
            color: color[index]
        }
        ageData.value = [...ageData.value]
        } else {
        ageData.value.push({
            startValue: 0,
            value: item.value,
            axis: item.key,
            color: color[index]
        })
        }
    })
    deviceData.value = {
        totalDevices: userData.value.totalDevices,
        devices: userData.value.devices
    }
    realTimeOrder.value = {
        date: [...realTimeOrder.value.date, getNowTime()],
        data: [...realTimeOrder.value.data, userData.value.realTimeOrder]
    }
    totalUser.value.updateStartVal()
    averageAge.value.update()
}

const screenReady = ({
    ready,
    userData,
    ageData,
    deviceData,
    mapData,
    realTimeOrder
}, { once }) => {
    setTimeout(async () => {
        ready.value = true
        mapData.value = await getMapData()
        await createData({
            userData,
            ageData,
            deviceData,
            realTimeOrder
        })
    }, 1000)
    if (!once) {
        task = setInterval(async () => {
            await createData({
                userData,
                ageData,
                deviceData,
                realTimeOrder
            })
        }, 5000)
    }
}

export function useScreenData({ once }) {
    const ready = ref(false)
    const userData = ref({
        today: 0,
        averageAge: 0
    })
    const ageData = ref([])
    const deviceData = ref({})
    const mapData = ref({})
    const realTimeOrder = ref({ date: [], data: [] })

    onMounted(() => screenReady({
        ready,
        userData,
        ageData,
        deviceData,
        mapData,
        realTimeOrder
    }, { once }))
    onUnmounted(killTask)
    return {
        ready,
        userData,
        ageData,
        deviceData,
        mapData,
        realTimeOrder
    }
}