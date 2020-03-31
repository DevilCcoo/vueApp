<template>
  <ul class="paste">
    <li v-for="(item,index) in femaleJson" :key="index">
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
import { commonJson, femaleJson } from "./textTemplate.js";
export default {
  name: "femaleTemplate",
  data() {
    return {
      femaleJson: ""
    };
  },
  mounted() {},
  created() {
    this.femaleJson = commonJson.commonJson.concat(femaleJson.femaleJson);
  },
  methods: {
    getFemaleText() {
      let str = "";
      for (let i = 0; i < this.femaleJson.length; i++) {
        if (this.femaleJson[i].ref.length > 0) {
          str += this.femaleJson[i].name + ":";
          str += this.femaleJson[i].ref.toString() + "\n";
        }
      }
      return str;
    }
  }
};
</script>

<style lang="less" scoped>
.paste {
  li {
    width: 100%;

    overflow: hidden;
    h3 {
      font-size: 12px;
      margin-top: 0px;
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