<template>
  <div class="personal-info">
    <div class="cover">
      <div class="avatar">
        <img src="@/assets/images/login/logo_default.png" alt="logo" />
      </div>
      <div class="name t-c">周念来</div>
      <div class="mobile t-c">15591898280</div>
    </div>
    <div class="personal-action">
      <div class="personal-action-content">
        <van-cell-group>
          <van-cell title="我的支付" is-link to />
          <van-cell title="我的分享" is-link to />
          <van-cell title="我的收藏" is-link to />
          <van-cell title="用户协议" is-link to="/agreement" />
          <van-cell title="金庚晴好" is-link to="/about" />
        </van-cell-group>
      </div>
      <div class="save-con">
        <van-button block type="info" @click="logout">退出账号</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "personal-info",
  data() {
    return {
      info: {
        avatar: "",
        name: "",
        show: true
      }
    };
  },
  computed: {
    mobile() {
      return this.$store.state.user.mobilePhone;
    }
  },
  mounted() {},
  methods: {
    logout() {
      this.$router.push({
        path: "/login"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.personal-info {
  .cover {
    height: 4.98rem;
    background-image: url("~@/assets/images/personalInfo/cover_bg.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .avatar {
      text-align: center;
      padding-top: 0.8rem;
      padding-bottom: 0.2rem;
      font-size: 0;
      img {
        width: 1.48rem;
        height: 1.48rem;
        border: 2px solid #fff;
        border-radius: 100%;
        overflow: hidden;
      }
    }
    .name {
      font-size: 0.32rem;
      padding-bottom: 0.1rem;
      color: #fff;
    }
    .mobile {
      font-size: 0.24rem;
      color: #fff;
    }
  }
  .personal-action {
    // width: calc(100% - 20px);
    position: absolute;
    top: 3.6rem;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0;
    background: #fff;
    .personal-action-content {
      width: 100%;
      background: #fff;
    }
    .save-con {
      position: absolute;
      left: 0.4rem;
      right: 0.4rem;
      bottom: 1.6rem;
      background: #fff;
    }
  }
  .button-box {
    text-align: center;
    margin: 0.3rem 0;
  }
}
</style>