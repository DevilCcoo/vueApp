<template>
    <div class="main">
        <div class="logo_bg">
            <img src="@/assets/images/login/login_bg.png"
                 alt="logo" />
        </div>
        <div class="main-form">
            <!-- <van-field ref="mobile"
                       @click="input('mobile')"
                       v-model.trim="mobile"
                       name="mobile"
                       placeholder="请输入手机号"
                       type="tel"
                       clearable />
            <van-field ref="tel"
                       @click="input('tel')"
                       v-model.trim="code"
                       name="code"
                       type="tel"
                       clearable
                       placeholder="请输入验证码">
                <van-button hairline
                            plain
                            v-if="showtime===null"
                            slot="button"
                            @click="sendCode"
                            size="small"
                            type="info">发送验证码</van-button>
                <van-button v-else
                            slot="button"
                            plain
                            hairline
                            disabled
                            size="small"
                            type="info">{{showtime}}</van-button>
            </van-field> -->
            <div class="login_box">
                <div class="login_input">
                    <img src="@/assets/images/login/login_user.png"
                         alt="">
                    <input type="text"
                           value="">
                </div>
                <div class="login_input">
                    <img src="@/assets/images/login/login_pwd.png"
                         alt="">
                    <input type="password"
                           value="">
                </div>
            </div>
            <button> 登录</button>
        </div>
        <div class="save-con">
            <van-button block
                        type="info"
                        @click="save">登录(自动注册)</van-button>
        </div>
    </div>
</template>

<script>
import { checkMobileformat } from "@/libs/tools";
export default {
    name: "login",
    data () {
        return {
            code: "",
            mobile: "",
            // 计时器,注意需要进行销毁
            timeCounter: null,
            // null 则显示按钮 秒数则显示读秒
            showtime: null
        };
    },
    computed: {},
    created () { },
    methods: {
        //强制输入框获取焦点
        input (type) {
            this.$refs[type].focus();
        },
        //校验手机号、短信验证码
        checkParams () {
            if (!this.mobile) {
                this.$notify({
                    type: "warning",
                    duration: 1500,
                    message: "请输入手机号!"
                });
                return false;
            }
            if (!checkMobileformat(this.mobile)) {
                this.$notify({
                    type: "warning",
                    duration: 1500,
                    message: "请输入正确的手机号!"
                });
                return false;
            }
            if (!this.code || this.code.length != 4) {
                this.$notify({
                    type: "warning",
                    duration: 1500,
                    message: "请输入验证码!"
                });
                return false;
            }
            return true;
        },
        //发送验证码
        sendCode () {
            // if (!this.mobile) {
            //     this.$notify({
            //         type: "warning",
            //         duration: 1500,
            //         message: "请输入手机号!"
            //     });
            //     return false;
            // }
            // this.countDown(30);
            // let data = {
            //     vo: JSON.stringify({ phone: this.mobile })
            // };
            this.$api.getNoteCode().then(res => {
                console.log(res, "res")
            }).catch((res) => {

            })
        },
        // 倒计时 显示处理
        countDownText (s) {
            this.showtime = `${s}s后重新获取`;
        },
        // 倒计时 效果 60秒 不需要很精准
        countDown (times) {
            const self = this; // 时间间隔 1秒
            const interval = 1000;
            let count = 0;
            self.timeCounter = setTimeout(countDownStart, interval);
            function countDownStart () {
                if (self.timeCounter == null) {
                    return false;
                }
                count++;
                self.countDownText(times - count + 1);
                if (count > times) {
                    clearTimeout(self.timeCounter);
                    self.showtime = null;
                } else {
                    self.timeCounter = setTimeout(countDownStart, interval);
                }
            }
        },
        /**
         * @description 登录参数
         * @param {String} phone 手机号
         * @param {String} code 验证码
         */
        getParams () {
            const data = {
                phone: this.mobile,
                code: this.code
            };
            return data;
        },
        //登录提交
        save () {
            //登录参数校验执行函数
            //   if (!this.checkParams()) {
            //     return;
            //   }
            //获取登录参数
            let getData = this.getParams();
            console.log(getData, "getData");
            let data = {
                vo: JSON.stringify(getData)
            };

            this.$router.replace({
                path: "/tabPage/share"
            });
        }
    }
};
</script>

<style lang="less" scoped>
.main {
    width: 100%;
    height: 100%;
    position: relative;
    // background: url("~@/assets/images/login/login_bg.png") no-repeat 100% 100%;
    // padding: 552px 150px 651px;
    .logo_bg {
        width: 100%;
        height: 925px;
        position: absolute;
        img {
            width: 100%;
            height: 925px;
        }
    }
    // .login_box
    // background: url("~@/assets/images/login/login_bg.png") no-repeat;
    .main-form {
        background-color: #fff;
        border-radius: 10px;
        padding: 552px 150px 651px;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }
    // .save-con {
    //     padding: 0.32rem;
    // };;;;
}
</style>