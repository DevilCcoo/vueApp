<template>
  <div class="user-con">
    <van-nav-bar title="添加患者" left-text="返回" left-arrow @click-left="goBack" />

    <div class="user-form">
      <div class="avatar">
        <img src="@/assets/images/login/logo_default.png" alt="logo" />
        <span>更换头像</span>
      </div>
      <van-field
        @click="input('name')"
        ref="name"
        v-model.trim="nameVal"
        label="姓名"
        clearable
        placeholder="请输入姓名"
      />
      <van-field @click="input('sex')" ref="sex" name="radio" label="性别">
        <template #input>
          <van-radio-group v-model="radio">
            <van-radio style="margin-right:20px" name="1">男</van-radio>
            <van-radio name="2">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        @click="input('age')"
        ref="age"
        v-model.trim="age"
        label="年龄"
        type="tel"
        clearable
        placeholder="请输入年龄"
      />
      <van-field
        @click="input('height')"
        ref="height"
        v-model.trim="height"
        label="身高"
        type="tel"
        clearable
        placeholder="请输入身高"
      >
        <template #button>cm</template>
      </van-field>
      <van-field
        @click="input('weight')"
        ref="weight"
        v-model.trim="weight"
        label="体重"
        type="tel"
        clearable
        placeholder="请输入体重"
      >
        <template #button>kg</template>
      </van-field>
      <van-field
        @click="input('tel')"
        ref="tel"
        v-model.trim="tel"
        label="手机"
        type="tel"
        clearable
        placeholder="请输入手机号"
      />
      <van-field
        @click="input('address')"
        ref="address"
        v-model.trim="address"
        label="住址"
        type="tel"
        clearable
        placeholder="住址"
      />
    </div>

    <div class="save-con">
      <van-button block type="info" @click="save">保存</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "addUser",
  data() {
    return {
      age: "",
      nameVal: "",
      radio: "1",
      weight: "",
      height: "",
      tel: "",
      address: ""
    };
  },

  methods: {
    //强制输入框获取焦点
    input(type) {
      this.$refs[type].focus();
    },
    checkParams() {
      if (!this.nameVal) {
        this.$notify({
          type: "warning",
          duration: 1500,
          message: "请输入姓名"
        });
        return false;
      }
      if (!this.age) {
        this.$notify({
          type: "warning",
          duration: 1500,
          message: "请输入年龄"
        });
        return false;
      }
      return true;
    },
    getParams() {
      const data = {
        age: this.age,
        name: this.nameVal,
        sex: this.radio
      };
      return data;
    },
    save() {
      this.$router.push({
        path: "/tabPage/addWz"
      });
      // if (!this.checkParams()) {
      //   return;
      // }
      // let data = {
      //   vo: JSON.stringify(this.getParams())
      // };

      // this.$toast({
      //   type: "loading",
      //   duration: 0,
      //   forbidClick: true,
      //   message: "正在保存..."
      // });

      // this.$httpForm(addUser2, data).then(result => {
      //   if (result.status === 1) {
      //     this.$store.commit("SET_USER_INFO", result.user);
      //     this.$toast().clear();
      //     this.$router.push({
      //       path: "/patient"
      //     });
      //   } else {
      //     this.$store.commit("SET_USER_INFO", "");
      //     this.$toast(result.msg);
      //     setTimeout(function() {
      //       this.$router.push({
      //         path: "/login"
      //       });
      //     }, 3000);
      //   }
      // });
    },
    goBack() {
      this.$router.back();
    }
  }
};
</script>

<style lang="less" scoped>
.user-con {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow-y: auto;
  background: #fff;
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
  .user-form {
    background-color: #fff;
    /deep/.van-cell {
      padding: 0 16px;
      .van-field__label {
        line-height: 44px;
      }
      .van-field__control {
        height: 44px;
      }
      .van-radio-group {
        display: flex;
      }
    }
    .avatar {
      text-align: center;
      padding-top: 30px;
      padding-bottom: 20px;
      font-size: 0;
      span {
        display: block;
        padding-top: 5px;
        font-size: 14px;
      }
      img {
        width: 74px;
        height: 74px;
        border: 2px solid #fff;
        overflow: hidden;
      }
    }
    .other-info {
      padding-top: 20px;
    }
  }
  .save-con {
    padding: 16px;
  }
}
</style>