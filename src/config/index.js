/*
 * @Author: chneY 
 * @Date: 2020-03-31 14:31:30 
 * @Last Modified by: chenY
 * @Last Modified time: 2020-03-31 14:33:00
 */
export default {
    /**
     * @description Request api base url.
     */
    baseUrl: {
        dev: "http://tgdev-apigw.hrocloud.com:8099/api/v1",
        pro: "",
    },
    /**
     * @description Request pub_pubf_upload base url.
     * 
     */
    basePubUploadUrl: {
        dev: "http://tgdev-apigw.hrocloud.com:9709/upload?groupId=0",
        pro: "",
    },
    /**
     * @description Request pub_prvf_upload base url.
     * 
     */
    basePrvUploadUrl: {
        dev: "http://tgdev-apigw.hrocloud.com:9709/upload?groupId=1",
        pro: "",
    },
    /**
     * @description Request pub_pubf_down base url.
     * 
     */
    basePubDownUrl: {
        dev: "http://tgdev-apigw.hrocloud.com:8088/",
        pro: "",
    },
    /**
     * @description Request pub_prvf_down base url.
     * 
     */
    basePrvDownUrl: {
        dev: "http://tgdev-apigw.hrocloud.com:9709/file?",
        pro: "",
    },
    /**
     * @description domain.
     * 
     */
    domain: "www.hrocloud.com",
    /**
     * @description clientId.
     * 
     */
    clientId: "1000",
    /**
     * @description clientPass.
     * 
     */
    clientPass: "6cc1c430aed64d3bb8516011195a5b56",
    /**
     * @description applicationId.
     * 
     */
    applicationId: '59',
    /**
     * @description Index page name.
     */
    homePage: "myProject",

    /**
     * @description Public image base url.
     */
    imageBaseUrl: "",

    /**
     * @description Cookie's expire date, default 7 days. 
     */
    cookieExpires: 7,
}