/*
 * @Description:
 * @Date: 2022-09-03 15:34:43
 * @LastEditors: siwenfeng
 * @LastEditTime: 2022-09-05 09:25:32
 */
import { createApp } from 'vue'
import pinia from '@/stores/index'
import '@/theme/index.scss'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import mitt from 'mitt'

const app = createApp(App)

app.use(pinia).use(router).use(ElementPlus).mount('#app')
app.config.globalProperties.mittBus = mitt()
