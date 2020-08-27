import Vue from 'vue';
import VueRouter from 'vue-router';
import MealTableComponent from "@/components/MealTableComponent";
import MealTableWeekComponent from "@/components/MealTableWeekComponent";

Vue.use(VueRouter)

const routes = [
    {
        path: '/MeatTable',
        name: 'MeatTable',
        component: MealTableComponent,
    },
    {
        path: '/Weekly',
        name: 'Weekly',
        component: MealTableWeekComponent,
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router

