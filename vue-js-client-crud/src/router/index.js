import Vue from 'vue';
import VueRouter from 'vue-router';
import MealComponent from "@/components/MealComponent";
import MealTableWeekComponent from "@/components/MealTableWeekComponent";
import MealTableWeekAddComponent from "@/components/MealTableWeekAddComponent";
import MealUpdateComponent from "@/components/MealUpdateComponent";
import MealTableWeekUpdateComponent from "@/components/MealTableWeekUpdateComponent";
import MealTableWeekDeleteComponent from "@/components/MealTableWeekDeleteComponent";
import MealAddComponent from "@/components/MealAddComponent";
import LandingComponent from "@/components/LandingComponent";


Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        component: LandingComponent,
    },
    {
        path: '/meal',
        component: MealComponent,
    },
    {   path: '/meal/add',
        name:'MealAddComponent',
        component: MealAddComponent,
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
        path: '/weekly',
        name: 'MealTableWeekComponent',
        component: MealTableWeekComponent,
    },
    {
        path: '/mealtable/add',
        name: 'MealTableWeekAdd',
        component: MealTableWeekAddComponent,
    },
    {
        path: '/mealtable/update',
        name: 'MealTableWeekUpdate',
        component: MealTableWeekUpdateComponent,
    },
    {
        path: '/mealtable/delete',
        name: 'MealTableWeekDelete',
        component: MealTableWeekDeleteComponent,
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router

