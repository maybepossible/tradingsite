import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)

// 从 @element-plus/icons-vue 中导入所有图标并进行全局注册
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 全局配置 axios 的请求根路径
//axios.defaults.baseURL固定写法
// axios.defaults.baseURL = 'http://192.168.0.106:8080'
// 把 axios 挂载到 Vue.prototype 上，供每个 .vue 组件的实例直接使用
//$http可自己命名（建议使用$http）
// createApp.prototype.$http = axios

app.use(store).use(router).mount('#app')
