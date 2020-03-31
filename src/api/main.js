/*!
 * @author atongmu <zhounianlai@teacher.com.cn>
 * date 11/07/2019
 * description The Project of user data request list.
 */

import {
    httpJson
} from "@/libs/http";
import {
    encrypt
} from "@/libs/utils";
import config from "@/config/index";
const {
    clientId,
    clientPass,
    basePrvUploadUrl
} = config;
// 手机号登录
export const login = {
    url: "auth/login",
    method: "post",
    isLoading: false
}
/**
 *  获取图形验证码
 *
 * @returns
 */
const getNoteCode = () => {
    let params = {
        _mt: "verifycode.requestCaptcha",
        clientId: clientId,
        clientPass: clientPass,
        clientIp: "127.0.0.1"
    };
    let requestData = {
        data: params,
        level: 'None'
    };
    let data = encrypt(requestData.level, requestData.data);
    return httpJson({
        url: "verifycode.requestCaptcha",
        method: "get",
        isLoading: true
    }, params)
}
/*
 * 获取后台数据的公用方法
 * 安全级别None
 * params 为对象
 * */
export const getDataLevelNone = (params) => {
    const requestData = {
        data: params,
        level: "None"
    };
    const data = encrypt(requestData.level, requestData.data);
    return httpJson({
        method: 'post',
        isLoading: true
    }, data)
};
/*
 * 获取后台数据的公用方法
 * 安全级别UserLogin
 * params 为对象
 * */
export const getDataLevelUserLogin = (params) => {
    const requestData = {
        data: params,
        level: "UserLogin",
    };
    //params.companyId = store.state.user.companyId;
    const data = encrypt(requestData.level, requestData.data);
    return httpJson({
        method: 'post',
        isLoading: true
    }, data)
}
/*
 * 获取后台数据的公用方法
 * 安全级别UserLogin
 * 需要data形式传入
 * params 为对象
 * */
export const getDataLevelUserLoginNew = (params) => {
    const requestData = {
        data: params,
        level: "UserLogin",
    };

    const data = encryptNew(requestData.level, requestData.data);
    return httpJson({
        method: 'post',
        isLoading: true
    }, data)
}
/*
 * 上传文件到私有云
 * params 为对象
 * */
export const uploadFile = (data) => {
    return httpMultipart({
        method: 'post',
        url: basePrvUploadUrl,
        data: data,
    })
}
// const getCurrentProjectInfo = (params) => {
//     return httpJson({
//         url: "projectInfoApp/getCurrentProjectInfo",
//         method: "get",
//         isLoading: true
//     }, params)
// };

const apiList = {
    // getCurrentProjectInfo,
    getNoteCode
}

export default apiList