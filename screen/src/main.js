import { createApp } from 'vue'
import App from './App.vue'
import VueCountTo from './components/VueCountTo/vue-countTo.vue'

createApp(App).component('CountTo', VueCountTo).mount('#app')
