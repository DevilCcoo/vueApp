<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="r-box" />
    </transition>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      transitionName: "slide-right"
    };
  },
  watch: {
    $route(to, from) {
      let isBack = this.$router.isBack; //  监听路由变化时的状态为前进还是后退
      if (isBack) {
        this.transitionName = "slide-right";
      } else {
        this.transitionName = "slide-left";
      }
      this.$router.isBack = false;
    }
  }
};
</script>

<style lang="less">
@import url("./assets/css/common.less");
@import url("./assets/css/theme.less");

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: @font-default-color;
}
.r-box {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
.slide-left-enter,
.slide-right-leave-active {
  -webkit-transform: translate(7.5rem, 0);
  transform: translate(7.5rem, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  -webkit-transform: translate(-7.5rem, 0);
  transform: translate(-7.5rem, 0);
}
</style>