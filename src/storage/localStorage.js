/*!
 * @author atongmu <zhounianlai@teacher.com.cn>
 * date 11/07/2019
 * description localStorage function.
 */

const localStorageList = [];

const get = (key) => {
    return localStorage.getItem(key);
};

const set = (key, value) => {
    localStorage.setItem(key, value);
};

const remove = key => {
    localStorage.removeItem(key);
};

const clear = () => {
    window.localStorage.clear();
};

export default {
    get,
    set,
    remove,
    clear,
    localStorageList
};