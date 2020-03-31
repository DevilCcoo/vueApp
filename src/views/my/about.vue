<template>
  <div class="main">
    <van-sticky>
      <van-nav-bar title="金庚晴好" left-text="返回" left-arrow @click-left="goBack" />
    </van-sticky>
    <div class="main-con">
      <div class="user-info">
        <img src="@/assets/images/login/logo_default.png" alt="logo" />
        <span>当前版本：v3.0.0</span>
      </div>
      <section>
        <p>晴好科技（北京）有限公司（以下简称晴好科技）创立于2016年，初衷是致力于让世界每个人都能享受简单、有效、便宜的智慧健康服务。晴好成长四年来，始终坚持四个原则：寻找好医、服务基层、迭代研发、构建体系，努力推动实现中医服务完整、有效的闭合体验。</p>
        <p>晴好科技首创“3S（Smart to Skill to Service）”中医健康服务模式，将中医智慧具体化为规范的诊断技术，再联合优秀中医团队通过对基层医生技术赋能，构建全链条、系统化、数字化问诊流程，可以为大众提供“简便廉验“健康服务。</p>
      </section>
      <p class="footer">
        远景：让每个人都享受基于中医智慧的健康服务
        <br />使命：让健康更简单、更有效、更便宜
        <br />座右铭：上晴好，好健康
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {};
  },
  created() {},
  computed: {},
  mounted() {},
  methods: {
    goBack() {
      this.$router.back();
    }
  }
};
</script>

<style lang="less" scoped>
.main {
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
  .user-info {
    overflow: hidden;
    padding-top: 0.8rem;
    text-align: center;
  }
  .user-info img {
    width: 1.8rem;
    border-radius: 0.2rem;
    overflow: hidden;
  }
  .user-info span {
    color: #b7b7b7;
    display: block;
    font-size: 0.24rem;
    margin-top: 0.1rem;
  }
  .main-con section {
    margin: 0;
    line-height: 0.64rem;
    font-size: 0.32rem;
    word-wrap: break-word;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    text-align: justify;
    padding: 0.3rem 0;
  }
  .main-con section p {
    padding: 0 0.4rem;
  }
  .footer {
    line-height: 0.64rem;
    font-size: 0.32rem;
    margin: 0;
    padding: 0 0.4rem 0.4rem 0.4rem;
  }
}
</style>