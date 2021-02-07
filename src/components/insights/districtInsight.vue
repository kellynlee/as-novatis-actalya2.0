<template>
  <div class="mb-2">
    <v-card class="ma-2 pb-2" elevation="0" color="blue-grey lighten-5">
      <v-card-title>
        销售总览
      </v-card-title>
      <v-card v-for="(sale, index) in sales" :key="index" class="pa-3 mb-2 mx-2" >
        <v-row no-gutters class="mb-2">
          <v-col cols="2">
            <v-icon large :color="sale.color">{{sale.icon}}</v-icon>
          </v-col>
          <v-col offset="2">
            <div class="text-h5">{{sale.num}}</div>
          </v-col>
        </v-row>
        <v-row justify="end" class="pr-2 pb-2">
          <div class="text-body-2">{{sale.desc}}</div>
        </v-row>
      </v-card>
    </v-card>
    <v-card class="ma-2 pb-2" elevation="0" color="blue-grey lighten-5">
      <v-card-title>
        客户总览
      </v-card-title>
        <v-card v-for="(client, index) in clients" :key="index" class="pa-3 mb-2 mx-2" >
          <v-row no-gutters class="mb-2">
            <v-col cols="2">
              <v-icon large :color="client.color">{{client.icon}}</v-icon>
            </v-col>
            <v-col offset="2">
              <div class="text-h5">{{client.num}}</div>
            </v-col>
          </v-row>
          <v-row justify="end" class="pr-2 pb-2">
            <div class="text-body-2">{{client.desc}}</div>
          </v-row>
        </v-card>
    </v-card>
    <v-card class="ma-2 pb-2" elevation="0" color="blue-grey lighten-5">
      <v-card-title>
        客户覆盖
      </v-card-title>
      <v-card v-for="(coveredClient, index) in coveredClients" :key="index" class="pa-3 mb-2 mx-2" >
        <v-row no-gutters class="mb-2">
          <v-col cols="2">
            <v-icon large :color="coveredClient.color">{{coveredClient.icon}}</v-icon>
          </v-col>
          <v-col offset="1">
            <div class="text-h5">{{coveredClient.num}}</div>
            <div class="text-caption">{{coveredClient.numDesc}}</div>
          </v-col>
        </v-row>
        <v-row justify="end" class="pr-2 pb-2">
          <div class="text-body-2">{{coveredClient.desc}}</div>
        </v-row>
      </v-card>
    </v-card>
    <v-card class="ma-2 pb-2" elevation="0" color="blue-grey lighten-5">
      <v-card-title>
        代表智能小诺使用情况
      </v-card-title>
        <v-card v-for="(repUsage, index) in repUsages" :key="index" class="pa-3 mb-2 mx-2" >
          <v-row no-gutters class="mb-2">
            <v-col cols="2">
              <v-icon large :color="repUsage.color">{{repUsage.icon}}</v-icon>
            </v-col>
            <v-col offset="2">
              <div class="text-h5">{{repUsage.num}}</div>
            </v-col>
          </v-row>
          <v-row justify="end" class="pr-2 pb-2">
            <div class="text-body-2">{{repUsage.desc}}</div>
          </v-row>
        </v-card>
    </v-card>
    <v-card class="ma-2 pb-2" elevation="0" color="blue-grey lighten-5">
      <v-card-title>
        客户总览
      </v-card-title>
        <v-card v-for="(marketActivity, index) in marketActivities" :key="index" class="pa-3 mb-2 mx-2" >
          <v-row no-gutters class="mb-2">
            <v-col cols="2">
              <v-icon large :color="marketActivity.color">{{marketActivity.icon}}</v-icon>
            </v-col>
            <v-col offset="1">
              <div class="text-subtitle-1">{{marketActivity.activitySubTitle}}</div>
              <div class="text-subtitle-1 font-weight-medium">{{marketActivity.activityTitle}}</div>
              <div class="text-body-2">{{marketActivity.rep}}</div>
            </v-col>
          </v-row>
          <v-row justify="end" class="pr-2 pb-2">
            <div class="text-caption">{{marketActivity.date}}</div>
          </v-row>
        </v-card>
    </v-card>
    <v-card class="ma-2 pb-2" elevation="0" color="blue-grey lighten-5">
      <v-card-title>
        进院总览
      </v-card-title>
        <v-card v-for="(enteredHospital, index) in enteredHospitals" :key="index" class="pa-3 mb-2 mx-2" >
          <v-row no-gutters class="mb-2">
            <v-col cols="2">
              <v-icon large :color="enteredHospital.color">{{enteredHospital.icon}}</v-icon>
            </v-col>
            <v-col offset="2">
              <div class="text-h5">{{enteredHospital.num}}</div>
            </v-col>
          </v-row>
          <v-row justify="end" class="pr-2 pb-2">
            <div class="text-body-2">{{enteredHospital.desc}}</div>
          </v-row>
        </v-card>
    </v-card>
  </div>
</template>

<script>
export default {
data:() => ({
  sales:[
    {
      icon:'mdi-check',
      color:'yellow darken-3',
      num:'95%',
      desc:'MTD销售达成率'
    },
    {
      icon:'mdi-chart-line',
      color:'green darken-3',
      num:'23%',
      desc:'QTD销售增长率'
    },
    {
      icon:'mdi-format-list-numbered',
      color:'red darken-3',
      num:'8/40',
      desc:'QTD销售排名'
    },
  ],
  clients:[
    {
      icon:'mdi-account',
      color:'blue darken-3',
      num:'650',
      desc:'目标客户数'
    },
    {
      icon:'mdi-account',
      color:'blue darken-3',
      num:'240',
      desc:'重点客户数'
    }
  ],
  coveredClients:[
    {
      icon:'mdi-account-settings',
      color:'cyan lighten-3',
      num:'960 / 200',
      numDesc:'重点客户/目标客户',
      desc:'MTD客户会议数'
    },
    {
      icon:'mdi-account',
      color:'cyan lighten-3',
      num:'48 / 130',
      numDesc:'重点客户/目标客户',
      desc:'MTD客户会议覆盖率'
    },
    {
      icon:'mdi-account-settings',
      color:'cyan lighten-3',
      num:'960 / 200',
      numDesc:'重点客户/目标客户',
      desc:'MTD客户讲者担任数'
    },
    {
      icon:'mdi-account',
      color:'cyan lighten-3',
      num:'40% / 40%',
      numDesc:'重点客户/目标客户',
      desc:'MTD客户讲者覆盖率'
    }
  ],
  repUsages:[
    {
      icon:'mdi-account',
      color:'blue darken-3',
      num:'80%',
      desc:'小诺互动率'
    },
    {
      icon:'mdi-account',
      color:'blue darken-3',
      num:'45%',
      desc:'建议执行率'
    },
  ],
  marketActivities:[
    {
      icon:'mdi-calendar-month-outline',
      color:'purple darken-3',
      activitySubTitle:'遇见大咖--过敏（晏晓明）',
      activityTitle:'过敏性结膜炎的鉴别真诊断及治疗',
      rep:'凌肖',
      date:'2020年12月18号 16:30-17:00'
    },
    {
      icon:'mdi-calendar-month-outline',
      color:'purple darken-3',
      activitySubTitle:'会诊时刻',
      activityTitle:'CI-DME患者抗VEGF首选治疗',
      rep:'潘亚珠',
      date:'2020年12月14日 17:30-18:00'
    },
    {
      icon:'mdi-calendar-month-outline',
      color:'purple darken-3',
      activitySubTitle:'会诊时刻-糖白篇',
      activityTitle:'糖白共识详解',
      rep:'林一伟',
      date:'2020年12月13日 17:3-=18:00'
    },
    {
      icon:'mdi-calendar-month-outline',
      color:'purple darken-3',
      activitySubTitle:'遇见大咖--干眼（龚岚）',
      activityTitle:'干眼与睑缘炎的鉴别',
      rep:'曾婷',
      date:'2020年12月13日 17:00-17:30'
    },
    {
      icon:'mdi-calendar-month-outline',
      color:'purple darken-3',
      activitySubTitle:'遇见大咖--过敏（邓世靖）',
      activityTitle:'重点过敏性结膜炎诊疗分享',
      rep:'宋茜',
      date:'2020年12月12日 16:30-17:00'
    }
  ],
  enteredHospitals:[
    {
      icon:'mdi-hospital-building',
      color:'indigo lighten-11',
      num:'19/23',
      desc:'进院目标'
    },
    {
      icon:'mdi-hospital-building',
      color:'indigo lighten-1',
      num:'4',
      desc:'待进院'
    },
  ]
}),
}
</script>

<style>

</style>