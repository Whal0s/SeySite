import { createApp } from 'vue'
import './styles.scss'
import App from './App.vue'

createApp(App).component('vue-picture-swipe', vue3PictureSwipe).mount('#app')