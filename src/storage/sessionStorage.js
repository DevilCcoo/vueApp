/*!
 * @author atongmu <zhounianlai@teacher.com.cn>
 * date 11/07/2019
 * description sessionStorage function.
 */

const sessionStorageList = ["loginType"];

const set = (key, value) => {
    sessionStorage.setItem(key, value);
};

const get = key => {
    return sessionStorage.getItem(key);
};

const remove = key => {
    sessionStorage.removeItem(key);
};

const clear = () => {
    window.sessionStorage.clear();
};

export default {
    set,
    get,
    remove,
    clear,
    sessionStorageList
};