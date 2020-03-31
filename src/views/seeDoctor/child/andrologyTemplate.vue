<template>
  <div>
    <ul class="paste">
      <li v-for="(item,index) in andrologyJson" :key="index">
        <h3>{{item.name}}</h3>
        <van-checkbox-group v-model="item.ref" :name="item.name">
          <van-checkbox
            v-for="(checkbox,i) in item.checkboxGroup"
            :key="i"
            :name="checkbox.value"
            shape="square"
          >{{checkbox.value}}</van-checkbox>
        </van-checkbox-group>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "andrologyTemplate",
  data() {
    return {
      andrologyJson: [
        {
          name: "性功能",
          ref: [],
          checkboxGroup: [
            {
              value: "早泄"
            },
            {
              value: "阳痿"
            },
            {
              value: "勃起不坚"
            },
            {
              value: "晨勃消失"
            },
            {
              value: "频繁遗精"
            },
            {
              value: "频繁滑精"
            },
            {
              value: "正常"
            }
          ]
        },
        {
          name: "男科问题",
          ref: [],
          checkboxGroup: [
            {
              value: "不育"
            },
            {
              value: "前列腺炎"
            },
            {
              value: "附睾炎"
            },
            {
              value: "睾丸炎 "
            },
            {
              value: "尿道炎"
            },
            {
              value: "正常"
            }
          ]
        }
      ]
    };
  },
  mounted() {},
  methods: {
    getAndrologyText() {
      let str = "";
      for (let i = 0; i < this.andrologyJson.length; i++) {
        if (this.andrologyJson[i].ref.length > 0) {
          str += this.andrologyJson[i].name + ":";
          str += this.andrologyJson[i].ref.toString() + "\n";
        }
      }
      return str;
    }
  }
};
</script>

<style lang="less" scoped>
.paste {
  padding: 10px;
  background-color: #fff;
  li {
    width: 100%;
    overflow: hidden;
    h3 {
      font-size: 14px;
      margin-top: 5px;
      margin-bottom: 10px;
    }
    /deep/ .van-checkbox {
      margin-bottom: 10px;
      color: #666;
      font-size: 14px;
      margin-right: 10px;
      float: left;
    }
  }
}
</style>