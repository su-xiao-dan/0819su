import Home from '../pages/Home/Home.vue'
import Sort from '../pages/Sort/Sort.vue'
import Buy from '../pages/Buy/Buy.vue'
import Car from '../pages/Car/Car.vue'
import Profile from '../pages/Profile/Profile.vue'

export default [
    //注册路由
    {
        path: '/home',
        component: Home
    },
    {
        path: '/sort',
        component: Sort
    },
    {
        path: '/buy',
        component: Buy
    },
    {
        path: '/car',
        component: Car
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path : '/',
        redirect : '/home'
    }
]