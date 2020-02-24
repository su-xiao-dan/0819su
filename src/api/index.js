import ajax from './ajax'

//获取值得买导航部分接口
export const getBuyList = () => ajax({
    url: '/getBuyList'
})

//获取值得买导航部分接口
export const getBuyListItem = () => ajax({
    url: '/getBuyListItem'
})


//获取分类左侧导航数据
export const getCateNavList = ()=> ajax({
    url: '/getCateNavList'
})

//获取分类右侧数据
export const getCateList = ()=> ajax({
    url: '/getCateList'
})