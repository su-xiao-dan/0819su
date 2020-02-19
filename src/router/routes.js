import Home from '../pages/Home/Home.vue'
import Sort from '../pages/Sort/Sort.vue'
import Buy from '../pages/Buy/Buy.vue'
import Car from '../pages/Car/Car.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'

export default [
    //注册路由
    {
        path: '/home',
        component: Home,
        meta : {
            isShowFooter : true
        }
    },
    {
        path: '/sort',
        component: Sort,
        meta: {
            isShowFooter: true
        }
    },
    {
        path: '/buy',
        component: Buy,
        meta: {
            isShowFooter: true
        }
    },
    {
        path: '/car',
        component: Car,
        meta: {
            isShowFooter: true
        }
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/search',
        component: Search
    },
    {
        path : '/',
        redirect : '/home'
    }
]