import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from "./store";
import {BootstrapVue} from 'bootstrap-vue'
import http from './http-common'
//import AuthenticationService from "@/service/AuthenticationService";

Vue.prototype.http = axios
Vue.config.productionTip = false

Vue.use(BootstrapVue)

const vm =new Vue({
    store,
    router,
    render: h => h(App)
})
 const token = localStorage.getItem('token')
    console.log("token", token)
   http.interceptors.request.use(
    (config) => {
        if (token) {
            config.headers.Authorization = token
        }
        return config
    }
);

    vm.$mount('#app')
