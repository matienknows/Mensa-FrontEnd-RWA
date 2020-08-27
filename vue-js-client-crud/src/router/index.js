import Vue from 'vue';
import VueRouter from 'vue-router';
import MealTableComponent from "@/components/MealTableComponent";
import MealTableWeekComponent from "@/components/MealTableWeekComponent";

Vue.use(VueRouter)

const routes = [
    {
        path: '/meatTable',
        name: 'MealTableComponent',
        component: MealTableComponent,
    },
    {
        path: '/weekly/:id',
        name: 'MealTableWeekComponent',
        component: MealTableWeekComponent,
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router

