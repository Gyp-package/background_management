import http from '../../utils/request'

// 请求首页数据
export const getData=()=>{
    // 返回一个promise对象
    return http.get('/home/getData')
    // .then可以得到他返回的一个结果
}


// 获取列表数据
export const getUser = (params) => {
    console.log(params, 'params')
    // 返回用户列表
    return http.get('/user/getUser', params)
}

// 新增，post中存放数据是data,get是params
export const addUser = (data) => {
    return http.post('/user/add', data)
}

// 编辑
export const editUser = (data) => {
    return http.post('/user/edit', data)
}

// 删除
export const delUser = (data) => {
    return http.post('/user/del', data)
}

// 向后台暴露密码数据并获取响应接口
export const getMenu = (data) => {
    return http.post('/permission/getMenu', data)
}