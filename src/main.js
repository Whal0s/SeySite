import { createApp } from 'vue'
import { createVfm } from 'vue-final-modal'
import './styles.scss'
import App from './App.vue'
import 'vue-final-modal/style.css'

const useVfm = createVfm();
createApp(App).use(useVfm).mount('#app')