/*
 * @Author: chneY 
 * @Date: 2020-03-31 16:22:13 
 * @Last Modified by: chenY
 * @Last Modified time: 2020-03-31 17:03:13
 */


import $cookie from "@/storage/cookie";
import $localStorage from "@/storage/localStorage";
import config from "@/config/index";
import md5 from 'js-md5';
const TOKEN_KEY = "_tk";
const {
    cookieExpires,
    domain
} = config;
const ENV = process.env.NODE_ENV;

/**
 * @description 加密.
 */
export const encrypt = (level, params) => {
    /* 删除jqgrid中下一页的时候默认参数中包含上一次的_sig参数 */
    delete params._sig;
    delete params._tk;
    let s = "",
        keys = [];
    for (var k in params) {
        if (k != '_tk') {
            keys.push(k);
        }
    }
    keys.sort();
    for (var i = 0; i < keys.length; i++) {
        s = s + keys[i] + "=" + params[keys[i]];
    }
    s += getHash(level);
    // console.log("显示加密的盐--" + s);
    params._sig = md5(s);
    if (level !== 'None') {
        let token = $localStorage.get(TOKEN_KEY);
        if (token && token !== undefined) {
            params._tk = encodeURI(token);
        }
    }
    return params;
}
/**
 * @description data特殊加密.
 */
export const encryptNew = (level, params) => {
    /* 默认参数中包含上一次的_sig参数 */
    delete params._sig;
    delete params._tk;
    let param = {};

    param.companyId = params.companyId;
    delete params.companyId;

    param.funId = params.funId;
    delete params.funId;

    param._mt = params._mt;
    delete params._mt;

    param._tk = params._tk;
    delete params._tk;

    param.logType = params.logType;
    delete params.logType;

    param.data = JSON.stringify(params);
    let s = "",
        keys = [];
    for (var k in param) {
        if (k != '_tk') {
            keys.push(k);
        }
    }
    keys.sort();
    for (var i = 0; i < keys.length; i++) {
        s = s + keys[i] + "=" + param[keys[i]];
    }
    s += getHash(level);
    //  console.log("显示加密的盐--" + s);
    param._sig = md5(s);
    if (level !== 'None') {
        let token = $localStorage.get(TOKEN_KEY);
        if (token && token !== undefined) {
            param._tk = encodeURI(token);
        }
    }
    return param;
}
/**
 * @description 获取HASH值.
 */
export const getHash = (level) => {
    if (level === 'None') {
        return domain;
    } else {
        return $localStorage.get('webToken');
    }
}
/**
 * @description 获取网页对应标题
 * @param {String} name => 当前路由 name
 * @param {Array} routes => 注册的路由数据
 * @returns 网页标题
 */
export const getWebTitle = (name, routes) => {
    const length = routes.length;
    for (let i = 0; i < length; i++) {
        const element = routes[i];
        if (name === element.name) {
            return element.title;
        } else {
            if (element.children && element.children.length !== 0) {
                if (getWebTitle(name, element.children)) {
                    return getWebTitle(name, element.children);
                }
            }
        }
    }
}

/**
 * @description 设置网页标题
 * @param {String} name => 当前路由名称
 * @param {Object} routers => 当前路由列表数据
 * @param {Object} window => winodw 对象
 */
export const setWebTitle = (name, routers, window) => {
    const webTitle = getWebTitle(name, routers);
    window.document.title = webTitle;
    window.scrollTo(0, 0);
}

/**
 * @description Clear all cookie.
 */
export const cookieRemoveAll = () => {
    $cookie.cookieList.forEach(element => {
        if (ENV === "development") {
            $cookie.remove(element);
        } else {
            if (TOKEN_KEY === element) {
                $cookie.remove(element, {
                    domain: "stu.teacher.com.cn"
                });
            } else {
                $cookie.remove(element);
            }
        }
    });
}