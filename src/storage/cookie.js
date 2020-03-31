/*!
 * @author atongmu <zhounianlai@teacher.com.cn>
 * date 11/07/2019
 * description cookie function.
 */

import JsCookie from "js-cookie";

const set = (key, value, payload) => {
    if (payload) {
        JsCookie.set(key, value, payload);
    } else {
        JsCookie.set(key, value);
    }
};

const get = (key, payload) => {
    if (payload) {
        return JsCookie.get(key, payload);
    } else {
        return JsCookie.get(key);
    }
};

const remove = (key, payload) => {
    if (payload) {
        JsCookie.remove(key, payload);
    } else {
        JsCookie.remove(key);
    }
};

export default {
    set,
    get,
    remove,
};