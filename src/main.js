/*
 * @Description: 
 * @Author: 于振友
 * @Date: 2023-08-07 17:30:16
 * @LastEditors: 于振友
 * @LastEditTime: 2023-08-07 18:02:59
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/default.scss'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons'


const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}


app.use(store).use(router).mount('#app')
