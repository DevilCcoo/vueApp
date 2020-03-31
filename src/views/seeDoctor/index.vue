<template>
  <div class="main">
    <!-- <van-sticky> </van-sticky> -->
    <van-nav-bar title="问诊" />
    <div class="item-user-con">
      <ul :class="{'height-auto':arrowBloon==false}">
        <!-- <li class="cur">
          <div class="item-con">安妮</div>
        </li>-->
        <li>
          <div class="add-con" @click="addUser">
            <div class="icon-add">
              <van-icon name="plus" color="#fff" />
            </div>
            <span>患者</span>
          </div>
        </li>
      </ul>

      <!-- <div class="btn-tool">
        <van-icon name="arrow-down" @click="arrowDown" v-show="arrowBloon" />
        <van-icon name="arrow-up" @click="arrowUp" v-show="!arrowBloon " />
      </div>-->

      <div class="item-user-info">
        暂无问诊单
        <!-- 安妮的问诊单
        <van-button plain type="info" size="mini" style="margin-left:10px" @click="lookRes">查看结果</van-button>-->
      </div>
    </div>

    <div class="login-form">
      <h3 class="login-title">
        既往病史
        <span>(可多选)</span>
      </h3>
      <div class="tag-sort">
        <ul>
          <li
            :class="{'cur':item.type!=''}"
            v-for="(item,index) in tagSort"
            :key="index"
            @click="selectTag(item,index)"
          >
            <div class="item-con">{{item.value}}</div>
          </li>
          <li>
            <div class="item-add">
              <van-field v-model="text" @blur="blur" @focus="focus" :placeholder="textholde" />
            </div>
          </li>
        </ul>
      </div>
      <h3 class="login-title">过敏史、遗传史、手术史</h3>
      <div class="message">
        <van-field
          rows="1"
          autosize
          v-model="message"
          type="textarea"
          maxlength="100"
          placeholder="如：花粉过敏、曾做过阑尾炎手术室等"
          show-word-limit
        />
      </div>
      <h3 class="login-title">
        上传舌象
        <span>(请参照示例)</span>
      </h3>
      <ul class="she-con">
        <li style="margin:0">
          <img src="@/assets/images/seeDoctor/sx1.png" alt="logo" />
        </li>
        <li>
          <img src="@/assets/images/seeDoctor/sx2.png" alt="logo" />
        </li>
      </ul>
      <van-uploader
        v-model="fileList"
        :after-read="afterRead"
        @delete="beforeDelete"
        :accept="'image/*'"
        capture="camera"
        :max-count="2"
      />
      <h3 class="login-title">病状描述</h3>
      <div class="message">
        <van-field
          rows="2"
          autosize
          v-model="message"
          type="textarea"
          maxlength="10000"
          placeholder="请详细填写，方便医生更好的了解您的病情"
          show-word-limit
        />
      </div>
      <h4>根据病状请选择相应的信息</h4>
      <female-template ref="femaleTemplate" />
      <!-- <van-tabs v-model="activeName" swipeable @click="tabTemplate">
        <van-tab title="女性问诊" name="femaleTemplate">
          <female-template ref="femaleTemplate" />
        </van-tab>
        <van-tab title="男性问诊" name="maleTemplate">
          <male-template ref="maleTemplate" />
        </van-tab>
        <van-tab title="男科问诊" name="andrologyTemplate">
          <andrology-template ref="andrologyTemplate" />
        </van-tab>
        <van-tab title="小儿问诊" name="childrenTemplate">
          <children-template ref="childrenTemplate" />
        </van-tab>
      </van-tabs>-->
      <div class="save-con">
        <van-button block type="info" @click="save">提交</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import {
  FemaleTemplate,
  MaleTemplate,
  AndrologyTemplate,
  ChildrenTemplate
} from "./child/index.js";
export default {
  name: "addInfo",
  data() {
    return {
      activeName: "femaleTemplate",
      message: "",
      clearTrue: true,
      arrowBloon: true,
      generalText: "",
      result: [],
      fileList: [],
      newFileList: [],
      resFileList: [],
      fileCon: [],
      text: "",
      textholde: "+添加既往病史",
      tagSort: [
        {
          type: "",
          key: "无",
          value: "无"
        },
        {
          type: "",
          key: "高血压",
          value: "高血压"
        },
        {
          type: "",
          key: "高血脂",
          value: "高血脂"
        },
        {
          type: "",
          key: "高血糖",
          value: "高血糖"
        },
        {
          type: "",
          key: "脑梗",
          value: "脑梗"
        },
        {
          type: "",
          key: "脑溢血",
          value: "脑溢血"
        },
        {
          type: "",
          key: "心脏病",
          value: "心脏病"
        },
        {
          type: "",
          key: "肿瘤",
          value: "肿瘤"
        },
        {
          type: "",
          key: "肝病",
          value: "肝病"
        }
      ]
    };
  },
  components: {
    FemaleTemplate,
    MaleTemplate,
    AndrologyTemplate,
    ChildrenTemplate
  },
  created() {},
  methods: {
    //返回
    goBack() {
      this.$router.back();
    },
    //添加患者
    addUser() {
      this.$router.push({
        path: "/addUser"
      });
    },
    //患者 箭头交互
    arrowDown() {
      this.arrowBloon = false;
    },
    //患者 箭头交互
    arrowUp() {
      this.arrowBloon = true;
    },
    //疾病史 选择
    selectTag(item, index) {
      if (item.type != "") {
        console.log(index + 1, "index-1");
        item.type = "";
      } else {
        console.log(index + 1, "index");
        item.type = index + 1;
      }
    },
    //疾病史 获取焦点 交互
    focus() {
      this.textholde = "";
    },
    //疾病史 失去焦点 交互
    blur() {
      this.textholde = "+添加既往病史";
      if (this.text != "") {
        this.tagSort.push({
          type: "",
          key: this.text,
          value: this.text
        });
        this.text = "";
      }
      console.log(this.tagSort, "this.tagSort");
    },
    //当前类型模版
    tabTemplate(name) {
      this.activeName = name;
    },
    //文件上传 删除操作
    beforeDelete(file, detail) {
      this.newFileList.splice(detail.index, 1);
    },
    //文件上传 上传至服务器
    afterRead(file) {
      this.newFileList.push(file.file);
    },
    /**
     * @description 问诊参数
     * @param {String} title 标题
     * @param {String} message 正文
     * @param {String} keyword 关键词
     */
    getParams() {
      if (this.activeName === "andrologyTemplate") {
        this.generalText =
          this.$refs.andrologyTemplate.getAndrologyText() + this.message;
      }
      if (this.activeName === "childrenTemplate") {
        this.generalText =
          this.$refs.childrenTemplate.getChildrenText() + this.message;
      }
      if (this.activeName === "maleTemplate") {
        this.generalText =
          this.$refs.maleTemplate.getCommonText() + this.message;
      }
      if (this.activeName === "femaleTemplate") {
        this.generalText =
          this.message + this.$refs.femaleTemplate.getFemaleText();
      }
      const data = {
        pid: this.userInfo.id,
        shepng1: "",
        shepng2: "",
        general: this.generalText,
        to: this.expertInfo
      };

      let formData = new FormData();
      formData.append("png", this.newFileList[0]);
      formData.append("png", this.newFileList[1]);
      this.$toast({
        type: "loading",
        duration: 0,
        forbidClick: true,
        message: "正在保存..."
      });
    },
    //校验舌象、疾病史、过敏史、病状描述
    checkParams() {
      if (this.newFileList.length !== 2) {
        this.$notify({
          type: "warning",
          duration: 1500,
          message: "请按照示例上传舌象"
        });
        return false;
      }

      if (!this.message) {
        this.$notify({
          type: "warning",
          duration: 1500,
          message: "请输入病况"
        });
        return false;
      }
      return true;
    },
    //问诊提交
    save() {
      this.$router.push({
        path: "/chat"
      });
    },
    //查看问诊结果
    lookRes() {
      this.$router.push({
        path: "/chat"
      });
    }
  },
  computed: {
    userInfo() {
      return this.$store.state.user.userInfo;
    },
    expertInfo() {
      return this.$store.state.user.expertInfo;
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
  .item-user-con {
    padding: 10px 15px;
    position: absolute;
    left: 0;
    right: 0;
    top: 45px;
    z-index: 10;
    border-bottom: solid 1px #f3f3f3;
    .item-user-info {
      padding-top: 5px;
      font-size: 12px;
      display: flex;
      align-items: center;
    }
    .btn-tool {
      position: absolute;
      right: 15px;
      top: 14px;
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
          height: 37px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          color: #666;
          padding: 0 10px;
          background: #f3f3f3;
        }
        .add-con {
          width: 37px;
          height: 37px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-flow: column;
          background: #1989fa;
          overflow: hidden;
          .icon-add {
            font-size: 14px;
            line-height: 10px;
          }
          span {
            font-size: 10px;
            color: #fff;
            line-height: 10px;
          }
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
  .save-con {
    padding: 10px 0px;
  }
}
.login-form {
  padding: 0px 15px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 50px;
  top: 130px;
  overflow-y: auto;
  h4 {
    margin: 0;
    font-weight: normal;
    font-size: 14px;
    color: #999;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .tag-sort {
    ul {
      overflow: hidden;
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
        }
        .item-con {
          border: solid 1px #f3f3f3;
        }
        .item-add {
          border: dashed 1px #f00;
          width: 104px;
          position: relative;

          /deep/ .van-cell {
            padding: 0px 0px 0px 10px;
            height: 32px;
            line-height: 32px;
            font-size: 12px;
          }
        }
      }
      li.cur {
        .item-con {
          color: #1989fa;
          border: solid 1px #1989fa;
        }
      }
    }
  }
}
.message {
  /deep/.van-cell {
    background-color: #f3f3f3;
  }
}
.showTabs {
  padding: 15px 0px;
}
.login-title {
  font-size: 14px;
  font-weight: normal;
  margin: 0;
  padding: 5px 0;
  span {
    color: #999;
    font-size: 12px;
  }
}

.she-con {
  font-size: 0px;
  height: 80px;
  float: right;
  li {
    display: inline;
    margin-left: 5px;
    img {
      width: 80px;
    }
  }
}
</style>
