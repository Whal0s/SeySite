import { createApp } from 'vue'
import './styles.scss'
import App from './App.vue'

const useVfm = createVfm();
createApp(App).use(useVfm).mount('#app')