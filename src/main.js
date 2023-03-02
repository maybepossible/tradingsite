import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'

const app = createApp(App)

// 全局配置 axios 的请求根路径
//axios.defaults.baseURL固定写法
// axios.defaults.baseURL = 'http://192.168.0.106:8080'
// 把 axios 挂载到 Vue.prototype 上，供每个 .vue 组件的实例直接使用
//$http可自己命名（建议使用$http）
// createApp.prototype.$http = axios

app.use(store).use(router).mount('#app')
