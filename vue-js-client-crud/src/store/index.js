//this is the second index.js file which responsible for centralized data sharing

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        amountWeekMealTables:'',
    },
    getters: {
        amount: state => {
            return state.amountWeekMealTables
        }
    },
    mutations: {
        setAmountWeekMealTables(state, payload) {
            state.amountWeekMealTables = payload.newAmount
        }
    },
    actions: {}
});