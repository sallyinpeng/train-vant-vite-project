// 封装用户请求的模块
import request from '../utils/request'

export const login = (data) => {
    return request({
        method: 'POST',
        url: '/user/login',
        data,
    })
}

// 封装用户自己完整的信息
export const getUserInfo = (id) => {
    return request({
        method: 'GET',
        url: 'user/info',
        params: {userId: id},
        headers: {
            Authorization: `Bearer ${store.state.user.myToken}`
        }
    })
}

// 获取用户频道列表数据
export const getUserChannels =() =>{
    return request({
        method: 'GET',
        url: 'user/channels'
    })
}
