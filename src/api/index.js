import ajax from './ajax'

//获取值得买导航部分接口
export const getCateLists = ()=> ajax({
    url: '/topic/v1/know/navWap.json'
})

export const getCateNavList = ()=> ajax({
    url: '/getCateNavList'
})

export const getCateList = ()=> ajax({
    url: '/getCateList'
})