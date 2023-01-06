import axios from 'axios';
import { showMessage } from "./status";   // 引入状态码文件
import { ElMessage } from 'element-plus'
// 设置接口超时时间
axios.defaults.timeout = 6000;

// 请求地址
axios.defaults.baseURL = '/api/';

// 请求拦截
axios.interceptors.request.use( config => {
    // 配置请求头
    config.headers = {
        //'Content-Type':'application/x-www-form-urlencoded',   // 传参方式表单
        'Content-Type': 'application/json;charset=UTF-8',        // 传参方式json
        'token': '80c483d59ca86ad0393cf8a98416e2a1'              // 这里自定义配置，这里传的是token
    };
    return config;
},err => {
    return Promise.reject(err)
})

// 响应拦截
axios.interceptors.response.use( res => {
    return res;
}, err => {
    const { response } = err;
    if(response){
        // 请求已发出，但是不在2xx的范围
        showMessage(response.status);           // 传入响应码，匹配响应码对应信息
        return Promise.reject(response.data);
    }else{
        ElMessage.warning('网络连接异常,请稍后再试!');
    }
}
)
