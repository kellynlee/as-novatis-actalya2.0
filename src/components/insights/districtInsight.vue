<template>
  <div>
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
        销售总览
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
        销售总览
      </v-card-title>
      <v-card v-for="(coveredClient, index) in coveredClients" :key="index" class="pa-3 mb-2 mx-2" >
        <v-row no-gutters class="mb-2">
          <v-col cols="2">
            <v-icon large :color="coveredClient.color">{{coveredClient.icon}}</v-icon>
          </v-col>
          <v-col offset="2">
            <div class="text-h5">{{coveredClient.num}}</div>
            <div class="text-caption">{{coveredClient.numDesc}}</div>
          </v-col>
        </v-row>
        <v-row justify="end" class="pr-2 pb-2">
          <div class="text-body-2">{{coveredClient.desc}}</div>
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
  ]
}),
}
</script>

<style>

</style>