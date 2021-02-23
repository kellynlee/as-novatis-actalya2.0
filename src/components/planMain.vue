<template>
  <div class="plan-page">
    <v-expansion-panels multiple class="mb-3">
    <paper :title="'医院'">
      <v-progress-linear value="15" rounded height="20" color="green darken-1">
      <strong>15%</strong>
      </v-progress-linear>
          <v-card v-for="(hospital, index) in hospitals" :key="hospital.id" class="pa-3 mb-2" transition="fade-transition">
            <v-row no-gutters class="d-flex">
              <v-col cols="2">
                <v-icon>mdi-hospital-building</v-icon>
              </v-col>
              <v-col> 
                <v-row no-gutters>
                  <div class="text-body-2">{{hospital.hospitalName}}</div>
                  <v-spacer></v-spacer>
                  <span class="text-caption red--text text--darken-3">{{hospital.label}}</span>
                </v-row>
                <div class="text-body-2 red--text text--darken-3" >{{hospital.segment}}</div>
                <div class="text-body-2">{{hospital.description}}</div>
              </v-col>
              <v-col cols="1" class="align-self-center">
                <v-icon>mdi-chevron-right</v-icon>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-btn plain color="green darken-3" @click="onConfirm(index, hospitals)">
                <v-icon>mdi-check-bold</v-icon>
                已跟进
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn plain color="light-blue darken-3" @click="onConfirm(index, hospitals)">
                <v-icon>mdi-check-bold</v-icon>
                已完成
              </v-btn>
            </v-row>
          </v-card>
    </paper>
    <paper :title="'医生'">
      <v-card v-for="(doctor,index) in doctors" :key="doctor.id" class="pa-3" transition="fade-transition">
            <v-row no-gutters>
              <v-col cols="2">
                <v-icon color="green darken-3">mdi-doctor</v-icon>
              </v-col>
              <v-col>
                <v-row no-gutters>
                  <div class="text-body-2">{{doctor.doctorName}}</div>
                  <v-spacer></v-spacer>
                  <v-chip
                    small
                    color="indigo"
                    outlined
                  >
                    <v-avatar left>
                      <v-icon small>mdi-tag</v-icon>
                    </v-avatar>
                    <span class="text-caption">{{doctor.label}}</span>
                  </v-chip>
                </v-row>
                <div class="text-caption">{{doctor.category}}</div>
                <div class="text-caption red--text text--darken-3" >{{doctor.segment}}</div>
                <div class="text-body-2">{{doctor.description}}</div>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-btn plain color="green darken-3" @click="onConfirm(index, doctors)">
                <v-icon>mdi-check-bold</v-icon>
                已跟进
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn plain color="light-blue darken-3" @click="onConfirm(index, doctors)">
                <v-icon>mdi-check-bold</v-icon>
                已完成
              </v-btn>
            </v-row>
          </v-card>
    </paper>
    </v-expansion-panels>
  </div>
</template>

<script>
import paper from './cards/paper';
export default {
  data: () => ({
    hospitals:[
    {
      hospitalName:'长海医院',
      label:'讲者覆盖不足',
      description:'该医院5为重点医生60天未担任讲者，请跟进',
      segment:'Leading',
      id:1
    },
    {
      hospitalName:'静安区中心医院',
      label:'医生观念变化',
      description:'该医院2个医生诺适得观念变化\n颜伟-5医生-A3\n白静-10医生-A2',
      segment:'Leading',
      id:2
    }
  ],
  doctors:[
    {
      doctorName:'白静',
      label:'观念',
      description:'根据CI-DEME观念问卷填写，该医生目前分级为T1，观念为认可激光治疗应该座位CIDME治疗的一线选择，可在拜访时传递一下关键信息：\n核心临床研究证实在提升实力方面，aVEGF显著由于激光，各大权威指南推荐\naVEGF为CIDME患者一线治疗选择',
      segment:'10医生',
      category:'眼科',
      id:1
    },
  ]
  }),
  components:{
    paper
  },
  methods:{
    onConfirm(index, confirmObj) {
      confirmObj.splice(index,1)
    }
  }
}
</script>

<style scoped>
.plan-page {
  width: 100%;
}
</style>