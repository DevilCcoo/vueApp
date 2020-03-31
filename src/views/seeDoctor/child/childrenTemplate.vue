<template>
  <div>
    <ul class="paste">
      <li v-for="(item,index) in childrenJson" :key="index">
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
  name: "childrenTemplate",
  data() {
    return {
      childrenJson: [
        {
          name: "体温",
          ref: [],
          checkboxGroup: [
            {
              value: "高热-超过39度"
            },
            {
              value: "发热"
            },
            {
              value: "发冷"
            },
            {
              value: "正常"
            }
          ]
        },
        {
          name: "手脚冷热",
          ref: [],
          checkboxGroup: [
            {
              value: "发热"
            },
            {
              value: "发冷"
            },
            {
              value: "正常"
            }
          ]
        },
        {
          name: "咳嗽",
          ref: [],
          checkboxGroup: [
            {
              value: "轻"
            },
            {
              value: "重"
            },
            {
              value: "无"
            }
          ]
        },
        {
          name: "是否有痰",
          ref: [],
          checkboxGroup: [
            {
              value: "黄痰"
            },
            {
              value: "白痰"
            },
            {
              value: "无"
            }
          ]
        },
        {
          name: "饮食情况",
          ref: [],
          checkboxGroup: [
            {
              value: "较少"
            },
            {
              value: "较多"
            },
            {
              value: "正常"
            }
          ]
        },
        {
          name: "饮水情况",
          ref: [],
          checkboxGroup: [
            {
              value: "较少"
            },
            {
              value: "较多"
            },
            {
              value: "正常"
            }
          ]
        },
        {
          name: "精神状况",
          ref: [],
          checkboxGroup: [
            {
              value: "好"
            },
            {
              value: "一般"
            },
            {
              value: "差"
            }
          ]
        },
        {
          name: "睡眠情况",
          ref: [],
          checkboxGroup: [
            {
              value: "好"
            },
            {
              value: "一般"
            },
            {
              value: "差"
            }
          ]
        },
        {
          name: "出汗情况",
          ref: [],
          checkboxGroup: [
            {
              value: "多"
            },
            {
              value: "少"
            },
            {
              value: "正常"
            }
          ]
        },
        {
          name: "大便频率",
          ref: [],
          checkboxGroup: [
            {
              value: "一天一次"
            },
            {
              value: "一天几次"
            },
            {
              value: "几天一次"
            },
            {
              value: "长期便秘"
            }
          ]
        },
        {
          name: "大便形状",
          ref: [],
          checkboxGroup: [
            {
              value: "球状"
            },
            {
              value: "细条状"
            },
            {
              value: "不成形"
            },
            {
              value: "正常"
            }
          ]
        },
        {
          name: "大便质地",
          ref: [],
          checkboxGroup: [
            {
              value: "偏干"
            },
            {
              value: "偏稀"
            },
            {
              value: "黏马桶"
            },
            {
              value: "腹泻"
            },
            {
              value: "正常"
            }
          ]
        },
        {
          name: "大便颜色",
          ref: [],
          checkboxGroup: [
            {
              value: "黄"
            },
            {
              value: "黑"
            },
            {
              value: "白"
            },
            {
              value: "便血"
            },
            {
              value: "青"
            }
          ]
        },
        {
          name: "大便情况",
          ref: [],
          checkboxGroup: [
            {
              value: "放屁多"
            },
            {
              value: "放屁臭"
            },
            {
              value: "大便很臭"
            },
            {
              value: "大便有灼热感"
            },
            {
              value: "大便不爽"
            },
            {
              value: "正常"
            }
          ]
        },
        {
          name: "小便情况",
          ref: [],
          checkboxGroup: [
            {
              value: "次数偏多"
            },
            {
              value: "次数偏少"
            },
            {
              value: "尿急"
            },
            {
              value: "遗尿"
            },
            {
              value: "尿不尽"
            },
            {
              value: "小便时涩痛"
            },
            {
              value: "尿热烫"
            },
            {
              value: "尿血"
            },
            {
              value: "尿味道大"
            },
            {
              value: "正常"
            }
          ]
        },
        {
          name: "小便颜色",
          ref: [],
          checkboxGroup: [
            {
              value: "黄"
            },
            {
              value: "浓茶色"
            },
            {
              value: "淡黄"
            },
            {
              value: "红"
            },
            {
              value: "黑"
            },
            {
              value: "青"
            }
          ]
        }
      ],
      result: []
    };
  },
  mounted() {},
  methods: {
    getChildrenText() {
      let str = "";
      for (let i = 0; i < this.childrenJson.length; i++) {
        if (this.childrenJson[i].ref.length > 0) {
          str += this.childrenJson[i].name + ":";
          str += this.childrenJson[i].ref.toString() + "\n";
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