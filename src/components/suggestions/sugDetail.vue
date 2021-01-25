<template>
  <div class="py-2">
    <v-row no-gutters>
      <v-btn plain class="pl-0">
        <v-icon large color="light-blue darken-3">mdi-chevron-left</v-icon>
      </v-btn>
      <span class="text-body-2 title">代表建议</span>
    </v-row>
    <v-card class="mx-4 my-2 pa-2">
      <v-row no-gutters class="mb-3">
        <v-col cols="2">
          <v-icon large color="light-blue darken-3">mdi-account-box-outline</v-icon>
        </v-col>
        <v-col>
          <div class="text-body-2">{{suggestionDetail.name}}</div>
        </v-col>
      </v-row>
      <v-row no-gutters class="mb-3">
        <v-col cols="2">
          <v-icon large color="yellow darken-3">mdi-currency-usd</v-icon>
        </v-col>
        <v-col>
          <div class="text-body-2">{{suggestionDetail.description}}</div>
        </v-col>
      </v-row>
      <v-btn outlined color="indigo darken-3">
        反馈
      </v-btn>
    </v-card>
    <v-expansion-panels multiple class="elevation-0">
      <v-expansion-panel class="mb-2 elevation-0">
        <v-expansion-panel-header>
          医院（Leading）
        </v-expansion-panel-header>
        <v-expansion-panel-content class="elevation-0">
          <v-card v-for="(hospital,index) in suggestionDetail.hospitals" :key="hospital.name + index" class="my-2 pa-4">
            <v-row no-gutters class="mb-2">
              <v-col cols="2">
                <v-icon color="light-blue darken-3">mdi-hospital-building</v-icon>
              </v-col>
              <v-col>
                <div class="text-body-2 mb-2">{{hospital.name}}</div>
                <div class="text-body-2">医生建议{{hospital.hospitalSug}}</div>
              </v-col>
              <v-col cols="1" @click="onOpenHospitalSug">
                <v-icon class="ma-0 pa-o">mdi-chevron-right</v-icon>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-chip
              v-for="label in hospital.labels"
              :key="label.name"
              small
              :color="label.color"
              outlined
              class="ma-1"
              >
                <v-avatar left>
                  <v-icon small>mdi-tag</v-icon>
                </v-avatar>
                <span class="text-caption">{{label.desc}}</span>
              </v-chip>
            </v-row>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel class="mb-2 elevation-0">
        <v-expansion-panel-header>
          医院（Rising）
        </v-expansion-panel-header>
        <v-expansion-panel-content class="elevation-0">
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel class="mb-2 elevation-0">
        <v-expansion-panel-header>
        医院（Emerging）
        </v-expansion-panel-header>
        <v-expansion-panel-content class="elevation-0">
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  data: () => ({
    suggestionDetail:{
      name:'顾渊',
      description:'销售指标达标（MTD）低于平均60% vs 65%',
      hospitals:[
        {
          name:'长海医院',
          hospitalSug:2,
          labels:[
            {
              desc:'销量不佳',
              color:'red darken-3'
            },
            {
              desc:'进院异常',
              color:'indigo darken-3'
            },
            {
              desc:'市场份额下滑',
              color:'amber accent-3'
            },
            {
              desc:'资源覆盖不合理',
              color:'green darken-1'
            },
            {
              desc:'医生观念变化',
              color:'purple darken-3'
            }
          ]
        },
        {
          name:'静安区中心医院',
          hospitalSug:1,
          labels:[
            {
              desc:'资源覆盖不合理',
              color:'green darken-1'
            },
            {
              desc:'医生观念变化',
              color:'purple darken-3'
            }
          ]
        },
        {
          name:'华山医院',
          hospitalSug:1,
          labels:[
            {
              desc:'进院异常',
              color:'indigo darken-3'
            },
            {
              desc:'市场份额下滑',
              color:'amber accent-3'
            }
          ]
        },
      ]
    }
  }),
  methods:{
    onOpenHospitalSug() {
      this.$router.push('hospitalSug')
    }
  }
}
</script>

<style scoped>
.title{
  position:absolute;
  left:50%;
  transform: translateX(-50%);
}
</style>