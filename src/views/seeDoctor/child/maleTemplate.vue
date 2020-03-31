<template>
  <ul class="paste">
    <li v-for="(item,index) in maleJson" :key="index">
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
</template>

<script>
import { commonJson } from "./textTemplate.js";
export default {
  name: "maleTemplate",
  data() {
    return {
      maleJson: ""
    };
  },
  mounted() {},
  created() {
    this.maleJson = commonJson.commonJson;
  },
  methods: {
    getCommonText() {
      let str = "";
      for (let i = 0; i < this.maleJson.length; i++) {
        if (this.maleJson[i].ref.length > 0) {
          str += this.maleJson[i].name + ":";
          str += this.maleJson[i].ref.toString() + "\n";
        }
      }
      return str;
    }
  }
};
</script>

<style lang="less" scoped>
li {
  width: 100%;
  overflow: hidden;
  h3 {
    font-size: 14px;
    margin-top: 10px;
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
</style>