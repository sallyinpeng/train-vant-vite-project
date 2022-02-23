import {createApp} from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import router from './router'
import './styles/index.css'
import store from './store'
// import dayjs from 'dayjs'


createApp(App).use(Vant).use(router).use(store).mount('#app')

