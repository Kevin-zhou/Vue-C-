const baseUrl= "http://192.168.16.241/mapi/cvsm";
const mallUrl= "http://192.168.16.241";

const api = {
    // 登录注册忘记密码管理
    login: {
        login: { url: "/sysLogin/login", method: "post" }
    },
    //盘点
    shelfStocktake:{
        getShelfStocktakeList:{url:'/shelfStocktake/getShelfStocktakeListById',method:"get"}
    },
    //补货
    shelfReplenishment:{
        shelfReplenishmentList:{url:'/shelfReplenishment/getShelfReplenishmentListById',method:"get"}
    },
     wxConfigLogin:{
         wxConfig:{ url: "/cvsportal/payapi/wxpay/createJsapiSignature", method: "post","ip":"mall" }
     }
}


window['__api'] = { api: api, base: baseUrl, mall: mallUrl }


//-----------------------------------------------------------------
import axios from "axios";

let token;
// 超时时间
axios.defaults.timeout = 5000
// http请求拦截器
axios.interceptors.request.use(config => {
    if (!token) {
        const data = __session.getItem('accessToken') || null;
        token = data;
    }
    if (token) {
        config.headers.token = token;
    }
   console.log(config);
    return config
}, error => {
    __toast.open('加载超时');
    return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => {// 响应成功关闭loading
    return data
}, error => {
    __toast.open('网络异常');
    return Promise.reject(error)
})
