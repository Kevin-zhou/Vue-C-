import axios from "axios";
import mIndicator from '../components/indicator/'
import validators from "../config/validator";

import errorMsg from "../config/error_msg";


class Utils {
    /*
       * 获取URL参数
       */
    GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
    //左trim
    leftTrim(str) {
        return str.replace(/^\s*/, "");//^符号表示从开头即左边进行匹配 
    }
    //右trim
    rightTrim(str) {
        return str.replace(/\s*$/, "");
    }
    //trim
    trim(str) {
        return str.replace(/(^\s*)|(\s*$)/g, "");
    }
    validator(val, reg) {
        return reg.test(val);
    }
    // 非空验证
    emptyCheck(value) {
        return value.trim().length == 0 ? true : false;
    }


    ajax(key, data) {
        const apiData = this.searchApi(__api.api, key);
        apiData.method = apiData.method.toUpperCase();
   
        const ip = apiData.ip != "mall" ? __api.base : __api.mall;
        switch (apiData.method) {
            case 'GET': return this.get(ip + apiData.url, data); break;
            case 'POST': return this.post(ip + apiData.url, data); break;
        }
    }

    get(url, data = '') {
        const _url = url + `${data}`;
        return new Promise(resolve => {
            axios.get(_url).then(res => {
                resolve(res.data || {});
            });
        })
    }
    post(url, data = {}) {
        const _url = url;
        return new Promise(resolve => {
            axios.post(_url, data).then(res => {
                resolve(res.data || {});
            });
        })
    }
    searchApi(api, key) {
        let temp, method, ip;
        const keys = Object.keys(api);

        if (keys.length > 0) {
            keys.forEach(res => {
                const url = api[res][key] ? api[res][key].url : null;
                const params = api[res][key] ? api[res][key].params : null;
                const _method = api[res][key] ? api[res][key].method : null;
                const _ip = api[res][key] ? api[res][key].ip : null;

                if (typeof url == "string") temp = url;
                if (typeof params == "string") temp += params;
                if (typeof _method == "string") method = _method;
                if (typeof _ip == "string") ip = _ip;
            })
            return { url: temp, method: method, ip: ip };
        }
    }

    //时间转换
    time(date) {
        if (!date) return null;
        var _date = new Date(date)
        //计算年
        var year = _date.getFullYear()

        var month = _date.getMonth() + 1;

        var days = _date.getDate();

        //计算出小时数              
        var hours = _date.getHours();

        //计算分钟数 
        var minutes = _date.getMinutes();

        //计算秒数              
        var seconds = _date.getSeconds();


        seconds = seconds >= 10 ? seconds : "0" + seconds;

        minutes = minutes >= 10 ? minutes : "0" + minutes;

        hours = hours >= 10 ? hours : "0" + hours;

        days = days >= 10 ? days : "0" + days;

        month = month >= 10 ? month : "0" + month;

        year = year >= 10 ? year : "0" + year;



        return `${year}-${month}-${days} ${hours}:${minutes}:${seconds}`;
    }
}

class Toast {
    static open(text) {
        const _arguments = Array.prototype.slice.call(arguments);
        let time = 3000,
            callback;

        mIndicator.open({
            text: text
        });

        _arguments.forEach(res => {

            if (typeof res == "function") {
                callback = res;
            }
            if (typeof res == "number") {
                time = res;
            }
        })

        setTimeout(() => {
            mIndicator.close();
            if (callback) callback();
        }, time);

    }

    static close() {
        setTimeout(() => {
            mIndicator.close();
        }, 0)
    }
}

class Loading {
    static open(callback, time, type = 'snake') {
        mIndicator.open({
            spinnerType: type
        });

        if (time) {
            setTimeout(() => {
                mIndicator.close();
            }, time);
        }
    }

    static close() {
        setTimeout(() => {
            mIndicator.close();
        }, 0)
    }
}

// session存储
class Session {
    static setItem(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }

    static getItem(key) {
        return JSON.parse(sessionStorage.getItem(key));
    }

    static clearItem(key) {
        sessionStorage.removeItem(key);
    }
}




class Events {
    constructor() {
        this._map = {};
    }
    //事件发布
    publish(event, _data) {
        if (this._map[event]) {
            this._map[event].callback(_data);
        }
    }
    //事件订阅
    subscribe(event, callback) {
        this._map[event] = {};
        this._map[event].callback = callback;
    }

    //解除订阅
    unsubscribe(event) {
        this._map[event] = null;
    }
}


function isLogin() {
    return new Promise(resolve => {
        const data = __session.getItem('accessToken') || {};
        data ? resolve(true) : resolve(false);
    })
}


// 放入全局变量
const utils = new Utils()
window['__utils'] = utils;
window['__session'] = Session;
window['__events'] = new Events();
window['__toast'] = Toast;
window['__loading'] = Loading;
window['__isLogin'] = isLogin;
module.exports = utils;

