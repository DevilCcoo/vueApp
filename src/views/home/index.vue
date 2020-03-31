<template>
  <div class="main">
    <van-nav-bar title="晴好" />
    <div>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="@/assets/images/share/icon_banner_1.png" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/images/share/icon_banner_3.png" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="list-con">
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <div @click="toDetail">
            <h2>{{item.title}}</h2>
            <p>{{item.con}}</p>
          </div>
          <dl class="img-list" @click="imagePreview(item.images)">
            <dd v-for="(itemImg,indexImg) in item.images" :key="indexImg">
              <img :src="itemImg" />
            </dd>
          </dl>
          <div class="list-con-bt">
            <span>{{item.author}}</span>
            <span v-if="item.isRead>0">阅读{{item.isRead}}</span>
          </div>
        </li>
      </ul>
    </div>
    <van-image-preview v-model="show" :images="images"></van-image-preview>
    <div class="add-share" @click="addShare">
      <van-icon name="plus" color="#fff" />
    </div>
  </div>
</template>
<script>
export default {
  name: "share",
  data() {
    return {
      show: false,
      images: [],
      list: [
        {
          title: "新冠肺炎疫情是一次重大公共卫生事件，也是一次典型突发应急事件",
          con:
            "不仅会对人们的生命安全和身体健康造成伤害，影响到正常的工作生活。在这个安全和健康造成伤害，影响到正常的工作生活。在这个安全和身身体健康造成伤害，影响到正常的工作生活。在这个特殊时期，保持心理健康尤为重要。因此，我们在做好疫情防控的同时，也要注意及时做好心理调节和防护。",
          author: "晴好客服",
          images: [
            "http://www.zhideedu.com/UploadFiles/img_1_1562462416_1570114741_26.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585041939952&di=9ad10841b71f4b9245bb99c143167c2c&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Ftranslate%2F700%2Fw500h1000%2F20180511%2FW9xW-haichra0464962.jpg",
            "http://01.minipic.eastday.com/20170712/20170712155220_e62f5c581ab45d41669aafb0045144ef_4.jpeg"
          ],
          isRead: "52"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    //预览图片
    imagePreview(data) {
      this.show = true;
      this.images = data;
    },
    //进入详情
    toDetail() {
      this.$router.push({
        path: "/details"
      });
    },
    //添加分享
    addShare() {
      this.$router.push({
        path: "/addShare"
      });
    }
  },
  computed: {}
};
</script>
<style lang="less" scoped>
.main {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  /deep/ .van-nav-bar {
    background-color: #1989fa;
    .van-nav-bar__title {
      color: #fff;
    }
    .van-icon,
    .van-nav-bar__text {
      color: #fff;
    }
  }
  .my-swipe .van-swipe-item {
    font-size: 0;
    img {
      width: 100%;
      height: 3rem;
    }
  }
}
.list-con {
  position: absolute;
  left: 0;
  right: 0;
  top: 4rem;
  bottom: 1rem;
  overflow-y: auto;
  ul {
    padding: 0;
    margin: 0;
    li {
      margin: 0;
      padding: 0.2rem 0.3rem;
      border-bottom: solid 1px #eee;
      h2 {
        margin: 0;
        font-size: 0.28rem;
        padding-bottom: 0.1rem;
      }
      p {
        color: #666;
        font-size: 0.24rem;
        margin: 0;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        line-height: 0.4rem;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .img-list {
        width: 90%;
        padding: 0.1rem 0;
        display: flex;
        margin: 0;
        flex-wrap: wrap;
        dd {
          font-size: 0;
          margin: 0;
          padding: 0.1rem 0.2rem 0.1rem 0;
          width: 1.2rem;
          height: 1.2rem;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
      }
      .list-con-bt {
        span {
          font-size: 0.24rem;
          color: #999;
          margin-right: 0.2rem;
        }
      }
    }
    li:last-child {
      border: 0;
    }
  }
}

.add-share {
  position: fixed;
  right: 0.4rem;
  bottom: 1.4rem;
  background: #1989fa;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  font-size: 0.52rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
