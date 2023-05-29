import axios from 'axios'
const http = axios.create({
    // 通用请求的地址前缀
    baseURL: '/api',
    timeout: 10000//超时时间
})

// 添加一个请求拦截器
http.interceptors.request.use(function (config) {
    // 在发送请求之前做一些事情
    return config;
}, function (error) {
    // 做一些请求错误
    return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
    // 使用响应数据做一些事情
    return response;
},
    function (error) {
        // 使用响应错误做一些事情
        return Promise.reject(error);
    })

export default http;
