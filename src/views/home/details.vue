<template>
  <div class="main">
    <van-nav-bar title="分享详情" left-arrow @click-left="goBack" />

    <div class="main-con" @click="blur">
      <h1 class="title">新冠肺炎疫情是一次重大公共卫生事件，也是一次典型突发应急事件</h1>
      <div class="user-info">
        <img src="@/assets/images/login/logo_default.png" />
        <span>晴好</span>
        <span>2020-02-12 阅读量 45</span>
      </div>
      <section>
        <p>新冠肺炎疫情是一次重大公共卫生事件，也是一次典型突发应急事件，它不仅会对人们的生命安全和身体健康造成伤害，而且容易诱发情绪困扰和心理问题，影响到正常的工作生活。在这个特殊时期，保持心理健康尤为重要。因此，我们在做好疫情防控的同时，也要注意及时做好心理调节和防护。</p>
        <p>新冠肺炎疫情是一次重大公共卫生事件，也是一次典型突发应急事件，它不仅会对人们的生命安全和身体健康造成伤害，而且容易诱发情绪困扰和心理问题，影响到正常的工作生活。在这个特殊时期，保持心理健康尤为重要。因此，我们在做好疫情防控的同时，也要注意及时做好心理调节和防护。</p>
        <p>新冠肺炎疫情是一次重大公共卫生事件，也是一次典型突发应急事件，它不仅会对人们的生命安全和身体健康造成伤害，而且容易诱发情绪困扰和心理问题，影响到正常的工作生活。在这个特殊时期，保持心理健康尤为重要。因此，我们在做好疫情防控的同时，也要注意及时做好心理调节和防护。</p>
        <!-- <div class="qh-con-img"></div> -->
      </section>
    </div>
    <div class="fixed-layout">
      <div class="fixed-bt-input" v-show="showInput===false">
        <div class="fixed-bt-input-lt">
          <van-field v-model="message" placeholder="写评论" />
        </div>
        <div class="fixed-bt-input-rt">
          <van-button type="info" @click="send">发表</van-button>
        </div>
      </div>
      <div class="fixed-bt-tools" v-show="showInput">
        <div class="fixed-bt-lt">
          <van-field
            size="small"
            v-model="message"
            left-icon="edit"
            @focus="focus"
            placeholder="写评论"
          />
        </div>
        <div class="fixed-bt-rt">
          <ul>
            <li>
              <van-icon name="chat" @click="comment" info="9" />
            </li>
            <li>
              <van-icon name="star" />
            </li>
            <li>
              <van-icon name="share" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "share-details",
  data() {
    return {
      showInput: true,
      showTextarea: false,
      message: ""
    };
  },
  mounted() {},
  methods: {
    //返回
    goBack() {
      this.$router.back();
    },
    //点击评论图标
    comment() {
      this.$router.push({
        path: "/comment"
      });
    },
    //校验输入文本
    checkParams() {
      console.log(this.message, "this.message");
      if (!this.message) {
        this.$notify({
          type: "warning",
          duration: 1500,
          message: "请填写评论!"
        });
        return false;
      }
      return true;
    },
    //发表
    send() {
      console.log("this.11111");
      //参数校验执行函数
      if (!this.checkParams()) {
        return;
      }
      console.log("123");
      this.$router.push({
        path: "/comment"
      });
    },
    //发表评论获取焦点 隐藏图标 显示输入框
    focus() {
      this.showInput = false;
      // this.showTextarea = true;
    },
    //发表评论获取焦点 隐藏输入框 显示图标
    blur() {
      this.showInput = true;
      // this.showTextarea = false;
    }
  },
  computed: {}
};
</script>

<style lang="less" scoped>
.main {
  margin: 0;
  /deep/ .van-nav-bar {
    background-color: #eee;
    .van-nav-bar__title {
      font-size: 0.34rem;
    }
    .van-nav-bar__arrow {
      font-size: 0.4rem;
    }
    .van-icon {
      color: #333;
    }
  }
  .title {
    font-size: 0.4rem;
    line-height: 0.56rem;
    margin-bottom: 0.3rem;
  }
  .main-con {
    padding: 0 0.3rem;
    position: absolute;
    left: 0;
    right: 0;
    top: 1rem;
    bottom: 1rem;
    overflow-y: auto;
    .user-info {
      overflow: hidden;
      margin-bottom: 0.3rem;
    }
    .user-info img {
      width: 0.9rem;
      height: 0.9rem;
      float: left;
      margin-right: 0.2rem;
      border-radius: 50%;
      overflow: hidden;
    }
    .user-info span {
      color: #b7b7b7;
      display: block;
      font-size: 0.24rem;
      margin-top: 0.1rem;
    }
    p {
      margin: 0;
    }
    section {
      line-height: 2em;
      font-size: 0.32rem;
      word-wrap: break-word;
      -webkit-hyphens: auto;
      -ms-hyphens: auto;
      hyphens: auto;
      text-align: justify;
      padding: 0.2rem 0;
      div {
        height: 0.2rem;
      }
      .qh-con-img img {
        width: 100%;
      }
      .qh-con-video video {
        width: 100%;
      }
      .qh-con-img,
      .qh-con-video {
        padding: 0.2rem 0;
        font-size: 0;
        line-height: 0;
        height: auto;
      }
    }
  }

  .fixed-layout {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding-top: 0.1rem;
    background: #fff;
    border-top: solid 1px #f3f3f3;
    .fixed-bt-input {
      width: 100%;
      padding-bottom: 0.1rem;
      overflow: hidden;
      .fixed-bt-input-lt {
        float: left;
        width: 80%;
        padding-left: 0.1rem;
        /deep/ .van-cell {
          // padding: 0.06rem 0.24rem;
          font-size: 0.24rem;
          background: #eee;
          height: 0.8rem;
          border-radius: 0.04rem;
        }
      }
      .fixed-bt-input-rt {
        float: right;
        padding-right: 0.1rem;
        /deep/ .van-button--normal {
          padding: 0 0.2rem;
          border: 0;
          height: 0.8rem;
          float: right;
        }
      }
    }
    .fixed-bt-tools {
      .fixed-bt-lt {
        float: left;
        width: 50%;
        padding-left: 0.2rem;
        /deep/ .van-cell {
          padding: 0.06rem 0.24rem;
          font-size: 0.24rem;
          background: #eee;
          border-radius: 0.8rem;
          margin-top: 0.03rem;
        }
      }
      .fixed-bt-rt {
        float: right;
        ul {
          float: left;
          li {
            float: left;
            font-size: 0.5rem;
            padding: 0.1rem 0.3rem 0 0.3rem;
          }
        }
      }
    }
  }
}
</style>
