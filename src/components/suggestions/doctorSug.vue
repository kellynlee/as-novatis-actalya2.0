<template>
  <div class="py-2">
    <v-row no-gutters>
      <v-btn plain class="pl-0">
        <v-icon large color="light-blue darken-3">mdi-chevron-left</v-icon>
      </v-btn>
      <span class="text-body-2 title">医生建议</span>
    </v-row>
    <v-card class="mx-4 my-2 pa-4">
      <v-row no-gutters>
        <v-col cols="2">
          <v-icon color="light-blue darken-3">mdi-hospital-building</v-icon>
        </v-col>
        <v-col>
          <div class="text-body-1">{{doctorSug.hospitalName}}</div>
        </v-col>
      </v-row>
    </v-card>
    <v-card v-for="(doctor,index) in doctorSug.doctors" :key="index" class="mx-4 my-2 pa-4">
      <v-row no-gutters class="mb-2">
        <v-col cols="2">
          <v-icon color="green darken-3">mdi-doctor</v-icon>
        </v-col>
        <v-col>
          <v-row no-gutters>
            <div class="text-body-1">{{doctor.name}}</div>
            <v-spacer></v-spacer>
            <v-chip
              small
              :color="doctor.tagColor"
              outlined
              class="ma-1"
              >
                <v-avatar left>
                  <v-icon small>mdi-tag</v-icon>
                </v-avatar>
                <span class="text-caption">{{doctor.tag}}</span>
              </v-chip>
          </v-row>
          <div class="text-body-2 mb-2">{{doctor.department}}</div>
          <div class="text-caption red--text text--darken-2">{{doctor.category}}</div>
          <div class="text-body-2 mb-2">{{doctor.desc}}</div>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-btn plain>
          <v-icon>mdi-information-outline</v-icon>
          洞察
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn plain>
          <v-icon>mdi-format-list-bulleted</v-icon>
          加入待办
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn plain @click="onFeedback">
          <v-icon>mdi-forum</v-icon>
          反馈
        </v-btn>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    doctorSug:{
      hospitalName:'长海医院',
      doctors:[
        {
          name:'颜伟',
          department:'眼科',
          category:'5医生',
          tag:'观念',
          tagColor:'purple darken-3',
          desc:'根据CI-DME观念问卷填写，该医生目前分级为T.........',
        },
        {
          name:'白静',
          department:'眼科',
          category:'10医生',
          tag:'观念',
          tagColor:'purple darken-3',
          desc:'根据CI-DME观念问卷填写，该医生目前分级为T.........',
        },
        {
          name:'赵海龙',
          department:'眼科',
          category:'5医生',
          tag:'讲者覆盖',
          tagColor:'indigo darken-3',
          desc:'该医生被标注为重点医生，距离上次做讲者已有60天.......',
        }
      ]
    }
  }),
  methods:{
    onOpenDoctorSug() {
      this.$router.push('doctorSug')
    },
    onFeedback() {
      this.$router.push('feedback')
    },
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