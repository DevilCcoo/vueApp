/*
 * @Author: chneY 
 * @Date: 2020-03-31 14:31:55 
 * @Last Modified by: chenY
 * @Last Modified time: 2020-03-31 16:49:09
 */

export default [{
        path: "/",
        name: "",
        title: "登录",
        redirect: '/login',
        component: () =>
            import("@/views/login/login.vue")
    },
    {
        path: "/login",
        name: "login",
        title: "登录",
        component: () =>
            import("@/views/login/login.vue")
    },
    {
        path: "/tabPage",
        name: "tabPage",
        redirect: "/tabPage/tabPage",
        title: "老电工首页",
        desc: "",
        meta: {
            keepAlive: true
        },
        component: () =>
            import("@/views/tabPage/tabPage.vue"),
        children: [{
                path: "home",
                name: "home",
                title: "首页",
                component: () =>
                    import("@/views/home/index.vue")
            },
            {
                path: "my",
                name: "my",
                title: "我的",
                meta: {
                    keepAlive: true
                },
                component: () =>
                    import("@/views/my/index.vue"),
            }
        ]
    }, {
        path: "/addUser",
        name: "addUser",
        title: "添加患者",
        component: () =>
            import("@/views/seeDoctor/addUser.vue")
    },
    // {
    //     path: "/chat",
    //     name: "chat",
    //     title: "问诊结果",
    //     component: () =>
    //         import("@/views/seeDoctor/chat.vue")
    // },
    // {
    //     path: "/addShare",
    //     name: "addShare",
    //     title: "添加分享",
    //     component: () =>
    //         import("@/views/share/addShare.vue")
    // },
    // {
    //     path: "/details",
    //     name: "details",
    //     title: "分享详情",
    //     component: () =>
    //         import("@/views/share/details.vue")
    // },
    // {
    //     path: "/comment",
    //     name: "comment",
    //     title: "全部评论",
    //     component: () =>
    //         import("@/views/share/comment.vue")
    // },
    // {
    //     path: "/about",
    //     name: "about",
    //     title: "关于晴好",
    //     desc: "关于晴好",
    //     meta: {
    //         access: false,
    //         keepAlive: true
    //     },
    //     component: () =>
    //         import("@/views/my/about.vue"),
    // },
    {
        path: "/agreement",
        name: "agreement",
        title: "用户协议",
        desc: "用户协议",
        meta: {
            access: false,
            keepAlive: true
        },
        component: () =>
            import("@/views/my/agreement.vue"),
    }
]