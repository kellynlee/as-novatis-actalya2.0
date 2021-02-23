<template>
  <div class="mb-2">
    <v-expansion-panels multiple class="mb-3">
      <paper :title="'业绩总览'">
        <single-card v-for="(sale, index) in sales" :key="index" :cardData="sale"></single-card>
      </paper>
      <paper :title="'市场动态'">
        <single-card v-for="(marketData, index) in marketDatas" :key="index" :cardData="marketData"></single-card>
      </paper>
      <paper :title="'客户总览'">
        <single-card v-for="(client, index) in clients" :key="index" :cardData="client"></single-card>
      </paper>
      <paper :title="'客户覆盖'">
        <double-card v-for="(coveredClient, index) in coveredClients" :key="index" :cardData="coveredClient"></double-card>
      </paper>
      <paper :title="'代表智能小诺使用情况'">
        <single-card v-for="(repUsage, index) in repUsages" :key="index" :cardData="repUsage"></single-card>
      </paper>
      <paper :title="'市场活动'">
        <v-card v-for="(marketActivity, index) in marketActivities" :key="index" class="pa-3 mb-3" >
          <v-row no-gutters class="mb-2">
            <v-col cols="2">
              <v-icon large :color="marketActivity.color">{{marketActivity.icon.iconName}}</v-icon>
            </v-col>
            <v-col>
              <div class="text-subtitle-1">{{marketActivity.activitySubTitle}}</div>
              <div class="text-subtitle-1 font-weight-medium">{{marketActivity.activityTitle}}</div>
              <div class="text-body-2">{{marketActivity.rep}}</div>
            </v-col>
          </v-row>
          <v-row justify="end" class="pr-2 pb-2">
            <div class="text-caption">{{marketActivity.date}}</div>
          </v-row>
        </v-card>
      </paper>
      <paper :title="'进院总览'">
        <single-card v-for="(enteredHospital, index) in enteredHospitals" :key="index" :cardData="enteredHospital"></single-card>
      </paper>
    </v-expansion-panels>
  </div>
</template>

<script>
import singleCard from '../cards/singleDataCard';
import paper from '../cards/paper';
import doubleCard from '../cards/doubleDataCard';
export default {
  data:() => ({
    sales:[
      {
        icon:{
          iconName:'$vuetify.icons.check'
        },
        mainContent:'95%',
        subTitle:'MTD销售达成率'
      },
      {
        icon:{
          iconName:'$vuetify.icons.check'
        },
        mainContent:'23%',
        subTitle:'QTD销售增长率'
      },
      {
        icon:{
          iconName:'$vuetify.icons.check'
        },
        mainContent:'8/40',
        subTitle:'QTD销售排名'
      },
    ],
    marketDatas:[
      {
        icon:{
          iconName:'$vuetify.icons.check'
        },
        mainContent:'35%',
        subTitle:'近三月市场份额'
      },
      {
        icon:{
          iconName:'$vuetify.icons.check'
        },
        mainContent:'2%',
        subTitle:'近三月市场份额环比'
      },
      {
        icon:{
          iconName:'$vuetify.icons.check'
        },
        mainContent:'65%',
        subTitle:'近三月诺朗比'
      },
      {
        icon:{
          iconName:'$vuetify.icons.check'
        },
        mainContent:'6%',
        subTitle:'近三月诺朗环比'
      },
      {
        icon:{
          iconName:'$vuetify.icons.check'
        },
        mainContent:'80%',
        subTitle:'新增新患达成率'
      }],
    clients:[
      {
        icon:{
          iconName:'$vuetify.icons.check'
        },
        mainContent:'650',
        subTitle:'目标客户数'
      },
      {
        icon:{
          iconName:'$vuetify.icons.check'
        },
        mainContent:'240',
        subTitle:'重点客户数'
      }
    ],
    coveredClients:[
      {
        icon:{
          iconName:'$vuetify.icons.check'
        },
        mainContent:'960 / 200',
        mainDesc:'重点客户/目标客户',
        subContent:'MTD客户会议数'
      },
      {
        icon:{
          iconName:'$vuetify.icons.check'
        },
        mainContent:'48 / 130',
        mainDesc:'重点客户/目标客户',
        subContent:'MTD客户会议覆盖率'
      },
      {
        icon:{
          iconName:'$vuetify.icons.check'
        },
        mainContent:'960 / 200',
        mainDesc:'重点客户/目标客户',
        subContent:'MTD客户讲者担任数'
      },
      {
        icon:{
          iconName:'$vuetify.icons.check'
        },
        mainContent:'40% / 40%',
        mainDesc:'重点客户/目标客户',
        subContent:'MTD客户讲者覆盖率'
      }
    ],
    repUsages:[
      {
        icon:{
          iconName:'$vuetify.icons.check'
        },
        mainContent:'80%',
        subTitle:'小诺互动率'
      },
      {
        icon:{
          iconName:'$vuetify.icons.check'
        },
        mainContent:'45%',
        subTitle:'建议执行率'
      },
    ],
    marketActivities:[
      {
        icon:{
          iconName:'$vuetify.icons.check'
        },
        activitySubTitle:'遇见大咖--过敏（晏晓明）',
        activityTitle:'过敏性结膜炎的鉴别真诊断及治疗',
        rep:'凌肖',
        date:'2020年12月18号 16:30-17:00'
      },
      {
        icon:{
          iconName:'$vuetify.icons.check'
        },
        activitySubTitle:'会诊时刻',
        activityTitle:'CI-DME患者抗VEGF首选治疗',
        rep:'潘亚珠',
        date:'2020年12月14日 17:30-18:00'
      },
      {
        icon:{
          iconName:'$vuetify.icons.check'
        },
        activitySubTitle:'会诊时刻-糖白篇',
        activityTitle:'糖白共识详解',
        rep:'林一伟',
        date:'2020年12月13日 17:3-=18:00'
      }
    ],
    enteredHospitals:[
      {
        icon:{
          iconName:'$vuetify.icons.check'
        },
        mainContent:'19/23',
        subTitle:'进院目标'
      },
      {
        icon:{
          iconName:'$vuetify.icons.check'
        },
        mainContent:'4',
        subTitle:'待进院'
      },
    ]
  }),
  components:{
    singleCard,paper,doubleCard
  }
}
</script>

<style>

</style>