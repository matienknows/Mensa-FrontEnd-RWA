import Vue from 'vue';
import VueRouter from 'vue-router';
import MealComponent from "@/components/MealComponent";
import MealTableWeekComponent from "@/components/MealTableWeekComponent";
import MealTableWeekAddComponent from "@/components/MealTableWeekAddComponent";
import MealUpdateComponent from "@/components/MealUpdateComponent";


Vue.use(VueRouter)

const routes = [
    {
        path: '/meal',
        component: MealComponent,
    },
    {   path: '/meal/:id/update',
        name:'MealUpdateComponent',
        component: MealUpdateComponent,
    },
    {
        path: '/meal/:id',
        name: 'MealComponent',
        component: MealComponent,
    },
    {
        path: '/weekly/:id',
        name: 'MealTableWeekComponent',
        component: MealTableWeekComponent,
    },
    {
        path: '/week/add',
        name: 'MealTableWeekAdd',
        component: MealTableWeekAddComponent,
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router

