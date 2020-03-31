<template>
  <div class="bg">
    <!-- <van-sticky> </van-sticky> -->
    <van-nav-bar title="问诊消息" left-text="返回" left-arrow @click-left="goBack" />
    <div class="item-user-con">
      <ul :class="{'height-auto':arrowBloon==false}">
        <li class="cur">
          <div class="item-con">安妮</div>
        </li>
        <li>
          <div class="item-con">张琳娜</div>
        </li>
        <li>
          <div class="item-con">张琳娜</div>
        </li>
        <li>
          <div class="item-con">张琳娜</div>
        </li>
        <li>
          <div class="item-con">张琳娜</div>
        </li>
        <li>
          <div class="item-con">张琳娜</div>
        </li>
        <li>
          <div class="item-con">张琳娜</div>
        </li>
      </ul>

      <div class="btn-tool">
        <van-icon name="arrow-down" @click="arrowDown" v-show="arrowBloon" />
        <van-icon name="arrow-up" @click="arrowUp" v-show="!arrowBloon " />
      </div>

      <div class="item-user-info">安妮的诊疗记录</div>
    </div>
    <div class="chat-con">
      <div class="item left">
        <img class="header-img" src="@/assets/images/login/logo_default.png" />
        <div class="message">
          <span>问诊单</span> 提交成功
        </div>
      </div>
      <div class="chart-timer">2019-5-17</div>
      <div class="item right">
        <img class="header-img" src="@/assets/images/seeDoctor/pic.jpg" />
        <div class="message">
          <ul>
            <li>主诉:{{res.zhusu}}</li>
            <li>现病史:{{res.bing1}}</li>
            <li>既往史:{{res.bing2}}</li>
            <li>药物过敏史:{{res.bing3}}</li>
            <li>个人及家族史:{{res.bing4}}</li>
            <li>基本体格检查:{{res.mark1}}</li>
            <li>辅助检查结果:{{res.mark4}}</li>
            <li>处理:{{res.mark3}}</li>
            <li>初步诊断:{{res.mark2}}</li>
            <li>处方:{{res.chufangmsg}}</li>
            <li>医嘱、备注:{{res.yizhu}}</li>
          </ul>
        </div>
      </div>
      <div class="item left">
        <img class="header-img" src="@/assets/images/login/logo_default.png" />
        <div class="message">多少钱</div>
      </div>

      <div class="item right">
        <img class="header-img" src="@/assets/images/seeDoctor/pic.jpg" />
        <div class="message">
          <ul>
            <li>主诉:{{res.zhusu}}</li>
            <li>现病史:{{res.bing1}}</li>
            <li>既往史:{{res.bing2}}</li>
            <li>药物过敏史:{{res.bing3}}</li>
            <li>个人及家族史:{{res.bing4}}</li>
            <li>基本体格检查:{{res.mark1}}</li>
            <li>辅助检查结果:{{res.mark4}}</li>
            <li>处理:{{res.mark3}}</li>
            <li>初步诊断:{{res.mark2}}</li>
            <li>
              处方:猫儿眼10g,人参10g
              <div class="order-con">
                <dl>
                  <dt>诊费 66 元</dt>
                  <dd>
                    <van-icon name="alipay" size="24" color="#1989fa" />
                    <van-button type="info" plain size="mini">去支付</van-button>
                  </dd>
                </dl>
              </div>
            </li>
            <li>医嘱、备注:{{res.yizhu}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="chat-tool">
      <van-field v-model="value" placeholder="请输入" />
      <van-button type="info" size="small">发送</van-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "chat",
  data() {
    return {
      value: "",
      arrowBloon: true,
      res: {
        zhusu: "咳嗽",
        bing1: "无",
        bing2: "无",
        bing3: "无",
        bing4: "无",
        mark1: "无",
        mark2: "咳嗽",
        mark3: "咳嗽",
        mark4: "咳嗽",
        chufangmsg: "咳嗽",
        yizhu: "咳嗽"
      }
    };
  },

  created() {},
  methods: {
    arrowDown() {
      this.arrowBloon = false;
    },
    arrowUp() {
      this.arrowBloon = true;
    },
    tabTemplate(name) {
      this.activeName = name;
    },

    save() {},
    goBack() {
      this.$router.back();
    }
  },
  computed: {}
};
</script>
<style lang="less" scoped>
.bg {
  /deep/ .van-nav-bar {
    background-color: #1989fa;
    .van-nav-bar__title {
      color: #fff;
    }
    .van-nav-bar__text:active {
      background-color: #1989fa;
    }
    .van-icon,
    .van-nav-bar__text {
      color: #fff;
    }
  }
  .item-user-con {
    padding: 10px 15px;
    background: #fff;
    position: absolute;
    left: 0;
    right: 0;
    top: 45px;
    z-index: 10;
    border-bottom: solid 1px #eee;
    .item-user-info {
      padding-top: 5px;
      font-size: 12px;
      span {
        color: #1989fa;
        padding: 0px 5px;
      }
    }
    .btn-tool {
      position: absolute;
      right: 15px;
      top: 14px;
      background: #fff;
      padding: 5px 7px;
    }
    ul {
      overflow: hidden;
      height: 37px;
      li {
        float: left;
        margin-right: 10px;
        margin-bottom: 5px;
        .item-con {
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          color: #666;
          padding: 0 10px;
          background: #f3f3f3;
        }
      }
      li.cur {
        .item-con {
          background: #1989fa;
          color: #fff;
        }
      }
    }
    ul.height-auto {
      height: auto;
    }
  }
}
.chat-con {
  padding: 5px 15px 0px 15px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 45px;
  top: 125px;
  background: #fff;
  overflow-y: auto;
  .item {
    display: flex;
    margin-bottom: 10px;
  }
  .left {
    flex-direction: row;
  }
  .right {
    flex-direction: row-reverse;
  }
  .right .message {
    margin-right: 10px;
  }
  .left .message {
    margin-left: 10px;
  }
  .header-img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  .message {
    border-radius: 10px;
    display: flex;
    background: #efefef;
    min-height: 25px;
    padding: 5px 10px;
    align-items: center;
    font-size: 12px;
    .order-con {
      width: 100%;
      dl {
        padding: 5px;
        border: solid 1px #1989fa;
        background: #fff;
        margin: 5px 0;
        dt {
          margin: 0;
        }
        dd {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 0px;
        }
      }
    }
  }
}

.chat-tool {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0px;
  background: #fff;
  border-top: solid 1px #f3f3f3;
  display: flex;
  padding: 4px 6px 0px 6px;
  height: 40px;
  box-sizing: border-box;
  /deep/ .van-cell {
    line-height: 28px;
    font-size: 12px;
    padding: 0 0 0 10px;
    height: 30px;
    margin-right: 5px;
    background: #f3f3f3;
  }
  //  flex: 1;
}
.chart-timer {
  text-align: center;
  color: #666;
  padding-bottom: 10px;
  font-size: 12px;
}
</style>
