<template>
  <van-sticky>
    <div class="common-header" :style="`color: ${color}; background: ${backgroundColor}`">
      <van-row>
        <van-col span="8" class="left-group">
          <div class="go-back-btn" @click="goBack" v-if="backButton">
            <van-icon name="arrow-left" class="icon-arrow-left" size="20" />
            <span class="go-back-text">返回</span>
          </div>
        </van-col>
        <van-col span="8"></van-col>
        <van-col span="8" class="right-group"></van-col>
      </van-row>
    </div>
    <van-popup
      v-model="personalShow"
      position="top"
      :overlay="false"
      closeable
      :style="{ height: '100%' }"
    >
      <personal-info />
    </van-popup>
  </van-sticky>
</template>

<script>
export default {
  name: "common-header",
  props: {
    color: {
      type: String,
      default: "#fff"
    },
    backgroundColor: {
      type: String,
      default: "#3083ff"
    },
    backButton: {
      type: Boolean,
      default: true
    },
    projectListButton: {
      type: Boolean,
      default: true
    },
    personInfoButton: {
      type: Boolean,
      default: true
    },
    isBack: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    $route() {
      this.personalShow = false;
    }
  },
  computed: {
    personalShow: {
      get() {
        return this.$store.state.app.personalShow;
      },
      set(newVal) {
        this.$store.commit("SET_PERSONAL_SHOW", newVal);
      }
    },
    userProjectInfo() {
      return this.$store.state.user.userProjectInfo;
    },
    mobile() {
      return this.$store.state.user.mobilePhone;
    }
  },
  methods: {
    goProjectList() {
      if (!getToken()) {
        remindUserLogin(this);
        return;
      }
      if (!Object.keys(this.userProjectInfo).length) {
        this.$router
          .replace({
            path: "/myProject"
          })
          .catch(error => {
            throw error;
          });
      } else {
        if (this.$route.name !== "studyplanList") {
          this.$router
            .replace({
              path: "/tabPage/studyplanList"
            })
            .catch(error => {
              throw error;
            });
        }
      }
    },

    goPersonInfo() {
      if (getToken() && this.mobile) {
        this.$store.commit("SET_PERSONAL_SHOW", true);
        return;
      }
      remindUserLogin(this);
    },

    goBack() {
      this.$emit("goBackCallback");
      if (this.isBack) {
        this.$router.back();
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../assets/css/theme.less");
.common-header {
  height: 40px;
  width: calc(100% - 30px);
  padding: 0 15px;
  .van-row {
    height: 100%;
    .van-col {
      height: 100%;
      .go-back-text {
        vertical-align: middle;
      }
      .icon-arrow-left {
        vertical-align: middle;
      }
    }
    .left-group {
      line-height: 40px;
      text-align: left;
      .go-back-btn {
        display: inline;
      }
    }
    .right-group {
      line-height: 50px;
      text-align: right;
    }
  }
}
.van-popup--top {
  background-color: @theme-default-gray-bg;
}
</style>
<style lang="less">
.van-popup__close-icon {
  color: #ffffff;
}
</style>
