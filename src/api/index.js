import apiList from './main.js';
const install = function (Vue) {
    if (install.installed) return
    install.installed = true

    // 定义属性到Vue原型中
    Object.defineProperties(Vue.prototype, {
        $api: {
            get() {
                return apiList
            }
        },
    })
}

export default {
    install
}