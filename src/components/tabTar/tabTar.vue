<template>
    <div class="tabTar">
        <van-tabbar v-model="active"
                    fixed>
            <van-tabbar-item icon="wap-home-o"
                             name="home"
                             replace
                             to="/tabPage/home">首页</van-tabbar-item>
            <!-- <van-tabbar-item icon="smile-comment-o" name="addWz" replace to="/tabPage/addWz">问诊</van-tabbar-item> -->
            <!-- <van-tabbar-item icon="chat-o" name="chat" replace to="/tabPage/chat">消息</van-tabbar-item> -->
            <van-tabbar-item icon="contact"
                             name="my"
                             replace
                             to="/tabPage/my">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    name: "tabTar",
    data () {
        return {
            active: "home"
        };
    },
    watch: {
        $route (to) {
            this.getActiveRouter(to.name);
        }
    },
    created () {
        this.getActiveRouter(this.$route.name);
    },
    methods: {
        getActiveRouter (routerName) {
            this.active = routerName;
        }
    }
};
</script>