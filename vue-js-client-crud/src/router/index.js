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
import LoginComponent from "@/components/LoginComponent";
import LogoutComponent from "@/components/LogoutComponent";
import AuthenticationService from "@/service/AuthenticationService";
import PageNotFoundComponent from "@/components/PageNotFoundComponent";


Vue.use(VueRouter)

const routes = [
    {
        path: '/logout',
        name: 'logout',
        component: LogoutComponent,
    },
    {
        path: '/login',
        name: 'login',
        component: LoginComponent,
    },
    {
        path: '/home',
        component: LandingComponent,
    },
    {
        path: '/meal',
        name: 'meal',
        component: MealComponent,
        /*beforeEnter: (to, from, next) => {
            if (this.$store.state.userStatus == false) {
                next(false);
            } else {
                next();
            }
        }*/
    },
    {
        path: '/meal/add',
        name: 'MealAddComponent',
        component: MealAddComponent,
    },
    {
        path: '/meal/:id/update',
        name: 'MealUpdateComponent',
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
    },
    {
        path: '*',
        name: 'PageNotFound',
        component: PageNotFoundComponent,
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    if (to.name !== 'login' && AuthenticationService.isUserLoggedIn() == false) next({name: 'login'})
    else next()
})


export default router

