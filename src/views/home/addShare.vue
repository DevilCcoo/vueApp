<template>
  <div class="main">
    <van-sticky>
      <van-nav-bar title="添加分享" left-text="返回" left-arrow @click-left="goBack" />
    </van-sticky>
    <div class="main-form">
      <dl>
        <dd>
          <van-field placeholder="类型">
            <ul slot="button" class="sort-btn">
              <li
                v-for="(item,index) in sort"
                :class="{'cur':type==index}"
                :key="index"
                @click="choose(index)"
              >{{item.name}}</li>
            </ul>
          </van-field>
        </dd>
        <dd>
          <van-field v-model="title" placeholder="标题" />
        </dd>
        <dd>
          <van-field v-model="message" rows="5" autosize type="textarea" placeholder="正文" />
        </dd>
        <dd>
          <van-field v-model="keyword" placeholder="关键词" />
        </dd>
        <dd v-show="type===3">
          <van-field v-model="url" center clearable placeholder="转载地址 如http:www.baidu.com">
            <!-- <van-button hairline plain slot="button" @click="paste" size="small" type="info">粘贴</van-button> -->
          </van-field>
        </dd>
        <dd>
          <van-uploader
            v-model="fileList"
            :after-read="afterRead"
            @delete="beforeDelete"
            :accept="'image/*'"
            :max-count="4"
          />
        </dd>
      </dl>
      <div class="save-con">
        <van-button block type="info" @click="save">提交</van-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "addShare",
  data() {
    return {
      message: "",
      url: "",
      title: "",
      keyword: "",
      type: "",
      sort: [
        { name: "验方" },
        { name: "病症" },
        { name: "医案" },
        { name: "转载" }
      ],
      fileList: [],
      newFileList: [],
      resFileList: []
    };
  },
  mounted() {},
  methods: {
    //顶部返回
    goBack() {
      this.$router.back();
    },
    //类型选择
    choose(index) {
      this.type = index;
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
     * @description 添加分享参数
     * @param {String} title 标题
     * @param {String} message 正文
     * @param {String} keyword 关键词
     */
    getParams() {
      const data = {
        title: this.title,
        message: this.message,
        keyword: this.keyword,
        url: this.url
      };
      return data;
    },
    //校验标题、正文、关键词
    checkParams() {
      if (!this.title) {
        this.$notify({
          type: "warning",
          duration: 1500,
          message: "请填写标题"
        });
        return false;
      }
      if (!this.message) {
        this.$notify({
          type: "warning",
          duration: 1500,
          message: "请输入正文"
        });
        return false;
      }
      return true;
    },
    //分享保存
    save() {
      //参数校验执行函数
      if (!this.checkParams()) {
        return;
      }
      let data = this.getParams();

      // this.$router.push({
      //   path: "/tabPage/share"
      // });
    }
  },
  computed: {}
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
  .main-form {
    /deep/ .van-cell {
      // border: solid 1px #f3f3f3;
      background: #f6f6f6;
    }
    .sort-btn {
      float: left;
      li {
        float: left;
        padding: 0.06rem 0.28rem;
        font-size: 0.28rem;
        border-radius: 0.1rem;
        margin-left: 0.2rem;
      }
      li.cur {
        background: #1989fa;
        color: #fff;
      }
    }
    dl {
      margin: 0;
      dd {
        margin: 0.2rem 0.3rem;
      }
    }
    .save-con {
      padding: 0.2rem 0.32rem;
    }
  }
}
</style>
