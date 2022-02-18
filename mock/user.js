import Mock from 'mockjs'

const login = {
    url: "/api/user/login",
    method: "post",
    response: ({body}) => {
        const {username, password} = body

        if (username !== 'admin' || password !== '123456') {
            return {
                code: 400,
                message: "账号或密码错误"
            }
        }

        return {
            code: 0,
            message: "登录成功",
            token: `${Mock.Random.guid()}.${Mock.Random.guid()}.${Mock.Random.guid()}`
        }
    }
}

const info = {
    url: "/api/user/info",
    method: "get",
    response: ({header, query}) => {

        const token = header['X-Token'] || false

        if(!token) {
            return {
                code: 401,
                message: "账号未登录"
            }
        }

        const {id} = query

        if(!id || !/\d/.test(id)) {
            return {
                code: 401,
                message: "账号异常"
            }
        }

        return {
            code: 0,
            message: "登录成功",
            data: {
                id: parseInt(id),
                username: 'admin'
            }
        }
    }
}

export default [
    login, info
]
