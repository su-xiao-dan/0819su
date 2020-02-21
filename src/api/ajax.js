//引入
import axios from 'axios'
import qs from 'qs'
import router from '../router'

//生成Axios的伪实例，instance不是真正new Axiosx，但是拥有axios实力的所有属性和方法
const instance = axios.create({
    //会自动添加到当前url前边
    baseURL: '/api'
})

//请求拦截器，理解：即将发送请求的时候，将请求拦截下来，对当前的请求进行批量处理，如:添加token，修改请求的参数
instance.interceptors.request.use(config => {
    // config包含当前请求的所有参数信息：method，url，data
    // 修改post请求的请求参数格式：默认的参数格式是json对象格式{a:xxx,b:yyy}，当前服务器能处理的是url-encoding，如：a=xxx&b=yyy
    config.data = qs.stringify(config.data) //stringify方法将json对象格式 ==> url encoding形式

    //携带token的方式 1.cookie   2.请求头   3.请求参数
    let token = localStorage.getItem('token_key')
    if (config.headers.needToken) {
        if (token) {
            config.headers.authorization = token
        } else { //没有token的情况下，没必要自动登录
            throw Error('请先登录')
        }
    }
    return config
})

//设置响应拦截器
instance.interceptors.response.use(
    response => response.data,
    error => {
        //请求没有真正发出去，在请求拦截器报的错
        if (!error.response) {
            alert(error.message)
            //跳转至登录页
            //router.currentRouter 代表的是当前的路由信息对象
            if (router.currentRoute.path !== '/login') {
                router.replace('/login')
            }
        } else { //发送请求后获取错误信息对象
            if (error.response.status === 401) {
                alert('token过期，请重新登录')
                //跳转至登录页
                if (router.currentRoute.path !== '/login') {
                    router.replace('/login')
                }
            } else if (error.response.status === 404) {
                alert('请求资源未找到')
            } else {
                alert('请求错误')
            }
        }
        //手动返回一个状态为初始化的promise
        return new Promise(() => {})
    }
)

export default instance