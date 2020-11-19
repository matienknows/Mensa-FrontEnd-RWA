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
    },

    getters: {
        amount: state => {
            return state.amountWeekMealTables
        },
        getUserStatus(state) {
            return state.userStatus
        },
    },

    mutations: {
        setAmountWeekMealTables(state, payload) {
            state.amountWeekMealTables = payload.newAmount
        },
        setUserStatus(state, payload) {
            state.userStatus = payload;
        },
    },

    actions: {}
});