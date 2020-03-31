<template>
  <div class="main">
    <van-sticky>
      <van-nav-bar title="全部评论" left-arrow @click-left="goBack" />
    </van-sticky>

    <div class="main-con">
      <div class="item">
        <img class="header-img" src="@/assets/images/login/logo_default.png" />
        <div class="message">
          <span class="title">阿童木</span>
          <p class="text">勇敢地寻求心理援助如果感到过度焦虑、恐慌、紧张，或产生失眠、头痛等精神、身体不适</p>
          <div class="tool">
            2020-03-24
            <span>删除</span>
          </div>
        </div>
      </div>

      <div class="item">
        <img class="header-img" src="@/assets/images/login/logo_default.png" />
        <div class="message">
          <span class="title">阿童木</span>
          <p class="text">勇敢地眠、头痛等精神、身体不适</p>
          <div class="tool">2020-03-24</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "comment",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    goBack() {
      this.$router.back();
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
  .main-con {
    padding: 0 0.3rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 1rem;
    overflow-y: auto;
    background: #fff;
    .item {
      display: flex;
      padding: 0.2rem 0;
      flex-direction: row;
      border-bottom: solid 1px #f3f3f3;
    }
    .header-img {
      width: 0.6rem;
      height: 0.6rem;
      border-radius: 50%;
    }
    .message {
      border-radius: 0.2rem;
      display: flex;
      align-items: center;
      font-size: 0.24rem;
      margin-left: 0.2rem;
      flex-flow: wrap;
      .title {
        color: #1989fa;
      }
      .text {
        color: #333;
        padding: 0.1rem 0;
        margin: 0;
        width: 100%;
      }
      .tool {
        color: #999;
        span {
          color: #666;
          padding: 0 0.1rem;
        }
      }
    }
  }
}
</style>
