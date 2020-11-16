//this is the second index.js file which responsible for centralized data sharing

import Vue from "vue";
import Vuex from "vuex";
import { BootstrapVue } from 'bootstrap-vue'

Vue.use(Vuex);
Vue.use(BootstrapVue)

export default new Vuex.Store({
    state: {
        amountWeekMealTables:'',
        isUserLoggedIn: false,
        basicAuthHeader: '',
    },
    getters: {
        amount: state => {
            return state.amountWeekMealTables
        },
        userStatus: state => {
            return state.isUserLoggedIn
        },
        getBasicAuthHeader: state => {
            return state.basicAuthHeader
        }
    },
    mutations: {
        setAmountWeekMealTables(state, payload) {
            state.amountWeekMealTables = payload.newAmount
        },
        setUserStatus(state, status) {
            state.isUserLoggedIn = status;
        },
        setBasicAuthHeader(state, payload) {
            state.basicAuthHeader = payload.newHeader
        },
    },
    actions: {}
});