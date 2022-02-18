import axios from 'axios'
import {getItem} from './storage'

const request = axios.create({
    baseURL: '/api'
})

// request interceptor
const TOKEN_KEY = 'TOKEN'
request.interceptors.request.use(
    config => {
        // do something before request is sent

        // if (store.getters.token) {
        // let each request carry token
        // ['X-Token'] is a custom headers key
        // please modify it according to the actual situation
        config.headers['X-Token'] = getItem(TOKEN_KEY)
        // }
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

export default request
