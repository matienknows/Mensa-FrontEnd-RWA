import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from "./store";
import {BootstrapVue} from 'bootstrap-vue'
import http from './http-common'


Vue.prototype.http = axios
Vue.config.productionTip = false

Vue.use(BootstrapVue)

const vm = new Vue({
    store,
    router,
    render: h => h(App)
})

const token = localStorage.getItem('token')

if (token) {
    http.interceptors.request.use(
        (config) => {
            config.headers.Authorization = token
            return config
        }
    );
}

vm.$mount('#app')
