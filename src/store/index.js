import {createStore} from 'vuex'
import {getItem, setItem} from "../utils/storage";

const TOKEN_KEY = 'TOKEN'
const store = createStore({
    state: {
        // user: null //
        // user: JSON.parse(window.localStorage.getItem(TOKEN_KEY))
        user: (getItem(TOKEN_KEY))
    },
    mutations: {
        setUser(state, data) {
            state.user = data
            // window.localStorage.setItem(TOKEN_KEY, state.user)// 转成字符串格式
            // window.localStorage.setItem(TOKEN_KEY, JSON.stringify(state.user))
            setItem(TOKEN_KEY, state.user)
        }
    }
})
export default store
