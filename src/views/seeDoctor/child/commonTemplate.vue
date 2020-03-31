<template>
  <div>
    <li v-for="(item,index) in commonJson" :key="index">
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
  </div>
</template>

<script>
export default {
  name: "commonTemplate",
  data() {
    return {
      commonJson: [
        {
          name: "日常喝水",
          ref: [],
          checkboxGroup: [
            {
              value: "很多"
            },
            {
              value: "很少"
            },
            {
              value: "常口渴不喜喝水"
            },
            {
              value: "常口渴并喝水"
            }
          ]
        },
        {
          name: "口中感觉",
          ref: [],
          checkboxGroup: [
            {
              value: "苦"
            },
            {
              value: "热"
            },
            {
              value: "麻"
            },
            {
              value: "粘"
            },
            {
              value: "酸"
            },
            {
              value: "淡"
            },
            {
              value: "晨起口苦"
            },
            {
              value: "嘴唇干燥"
            }
          ]
        },
        {
          name: "胃口感觉",
          ref: [],
          checkboxGroup: [
            {
              value: "胃口多"
            },
            {
              value: "胃口差"
            },
            {
              value: "吃多容易饿"
            },
            {
              value: "想吃吃不下"
            }
          ]
        },
        {
          name: "胃口状况",
          ref: [],
          checkboxGroup: [
            {
              value: "打嗝"
            },
            {
              value: "反酸"
            },
            {
              value: "胀气"
            },
            {
              value: "口气"
            },
            {
              value: "恶心"
            },
            {
              value: "食道烧酌"
            },
            {
              value: "胃烧心"
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
              value: "偏多次"
            },
            {
              value: "次数少"
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
              value: "小便涩痛"
            },
            {
              value: "尿热烫"
            },
            {
              value: "尿血"
            },
            {
              value: "尿味重"
            }
          ]
        },
        {
          name: "入睡情况",
          ref: [],
          checkboxGroup: [
            {
              value: "入睡难"
            },
            {
              value: "睡眠深"
            },
            {
              value: "睡眠浅"
            },
            {
              value: "周期性失眠"
            },
            {
              value: "经常失眠"
            }
          ]
        },
        {
          name: "有做梦吗",
          ref: [],
          checkboxGroup: [
            {
              value: "有时梦多"
            },
            {
              value: "梦少"
            },
            {
              value: "无梦"
            }
          ]
        },
        {
          name: "精神状态",
          ref: [],
          checkboxGroup: [
            {
              value: "白天犯困"
            },
            {
              value: "午后犯困"
            },
            {
              value: "饭后犯困"
            },
            {
              value: "疲倦"
            },
            {
              value: "嗜睡"
            },
            {
              value: "睡觉流口水"
            }
          ]
        },
        {
          name: "情绪偏向",
          ref: [],
          checkboxGroup: [
            {
              value: "怒"
            },
            {
              value: "悲伤"
            },
            {
              value: "烦躁"
            },
            {
              value: "抑郁"
            },
            {
              value: "忘事"
            },
            {
              value: "焦虑"
            },
            {
              value: "喜热闹"
            },
            {
              value: "喜安静"
            }
          ]
        },
        {
          name: "身体感觉",
          ref: [],
          checkboxGroup: [
            {
              value: "怕冷"
            },
            {
              value: "怕热"
            },
            {
              value: "怕风"
            },
            {
              value: "忽冷忽热"
            },
            {
              value: "上身热下身冷"
            },
            {
              value: "下午有潮热"
            }
          ]
        },
        {
          name: "手脚感觉",
          ref: [],
          checkboxGroup: [
            {
              value: "手脚偏冷"
            },
            {
              value: "手脚偏热"
            },
            {
              value: "手指头冷"
            },
            {
              value: "手脚心热烫"
            },
            {
              value: "正常"
            }
          ]
        },
        {
          name: "出汗情况",
          ref: [],
          checkboxGroup: [
            {
              value: "易出汗"
            },
            {
              value: "不出汗"
            },
            {
              value: "手心出汗"
            },
            {
              value: "半身出汗"
            },
            {
              value: "头部出汗"
            },
            {
              value: "睡觉盗汗"
            }
          ]
        },
        {
          name: "头咽感觉",
          ref: [],
          checkboxGroup: [
            {
              value: "头痛"
            },
            {
              value: "眩晕"
            },
            {
              value: "咽干"
            },
            {
              value: "咽痒"
            },
            {
              value: "咽痛"
            },
            {
              value: "鼻塞"
            },
            {
              value: "清涕"
            },
            {
              value: "浊涕"
            },
            {
              value: "呼吸发热"
            },
            {
              value: "视力模糊"
            },
            {
              value: "眼干涩"
            }
          ]
        },
        {
          name: "咳嗽和痰",
          ref: [],
          checkboxGroup: [
            {
              value: "咳嗽"
            },
            {
              value: "喘"
            },
            {
              value: "痰少"
            },
            {
              value: "痰多"
            },
            {
              value: "黄痰"
            },
            {
              value: "白痰"
            },
            {
              value: "黄白痰"
            },
            {
              value: "痰粘稠"
            },
            {
              value: "多沫"
            }
          ]
        },
        {
          name: "胸腹感觉",
          ref: [],
          checkboxGroup: [
            {
              value: "心慌"
            },
            {
              value: "心悸"
            },
            {
              value: "胸闷"
            },
            {
              value: "胸胀"
            },
            {
              value: "胃痛"
            },
            {
              value: "胃胀"
            },
            {
              value: "下腹硬"
            },
            {
              value: "颈项拘紧"
            }
          ]
        },
        {
          name: "生活习惯",
          ref: [],
          checkboxGroup: [
            {
              value: "辛辣"
            },
            {
              value: "嗜酒"
            },
            {
              value: "三餐不规律"
            },
            {
              value: "久坐"
            },
            {
              value: "房事过频"
            },
            {
              value: "频繁手淫"
            },
            {
              value: "熬夜"
            },
            {
              value: "抽烟"
            }
          ]
        }
      ]
    };
  },
  mounted() {},
  methods: {},
  computed: {
    commonText() {
      let str = "";
      for (let i = 0; i < this.commonJson.length; i++) {
        if (this.commonJson[i].ref.length > 0) {
          str += this.commonJson[i].name + ":";
          str += this.commonJson[i].ref.toString() + "\n";
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
</style>