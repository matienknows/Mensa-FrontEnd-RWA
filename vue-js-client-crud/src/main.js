import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from "./store";
import { BootstrapVue } from 'bootstrap-vue'


Vue.prototype.http = axios
Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
