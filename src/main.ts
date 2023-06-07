import { createApp } from 'vue'
import App from './App.vue'

import '@fontsource/dm-sans/400.css'
import './style.css'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
