//this is the second index.js file which responsible for centralized data sharing
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({

    plugins: [createPersistedState({
        storage: window.sessionStorage,
    })],
    state: {
        amountWeekMealTables: '',
        userStatus: false,
        token: localStorage.getItem('token') || '',
        basicAuthHeader: '',
    },
    getters: {
        amount: state => {
            return state.amountWeekMealTables
        },
        getUserStatus(state) {
            return state.userStatus
        },
        getBasicAuthHeader(state) {
            return state.basicAuthHeader
        },
    },
    mutations: {
        setAmountWeekMealTables(state, payload) {
            state.amountWeekMealTables = payload.newAmount
        },
        setUserStatus(state, payload) {
            state.userStatus = payload;
        },
        setBasicAuthHeader(state, payload) {
            state.basicAuthHeader = payload;
        },
    },
    actions: {}
});