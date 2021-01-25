<template>
  <div class="py-2">
    <v-row no-gutters>
      <v-btn plain class="pl-0">
        <v-icon large color="light-blue darken-3">mdi-chevron-left</v-icon>
      </v-btn>
      <span class="text-body-2 title">医院建议</span>
    </v-row>
    <v-card class="mx-4 my-2 pa-2">
      <v-row no-gutters >
        <v-col cols="2">
          <v-icon color="light-blue darken-3">mdi-hospital-building</v-icon>
        </v-col>
        <v-col>
          <div class="text-body-1">{{hospitalSug.name}}</div>
        </v-col>
      </v-row>
    </v-card>
    <v-card v-for="(sugTag,index) in hospitalSug.sugTags" :key="index" class="mx-4 my-2 pa-4">
      <v-row no-gutters class="mb-2">
        <v-col cols="2">
          <v-icon>mdi-tag</v-icon>
        </v-col>
        <v-col>
          <div :class="'text-body-2 mb-2 '+sugTag.color">{{sugTag.title}}</div>
          <div class="text-body-2">{{sugTag.desc}}</div>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-btn plain>
          <v-icon>mdi-format-list-bulleted</v-icon>
          加入待办
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn plain>
          <v-icon>mdi-forum</v-icon>
          反馈
        </v-btn>
      </v-row>
    </v-card>
    <v-card class="mx-4 my-2 pa-4">
      <v-row no-gutters>
        <v-col cols="2">
          <v-icon color="light-blue darken-3">mdi-hospital-building</v-icon>
        </v-col>
        <v-col>
          <div class="text-body-1">医院洞察</div>
        </v-col>
        <v-col cols="1" @click="onOpenDoctorSug">
          <v-icon class="ma-0 pa-o">mdi-chevron-right</v-icon>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="mx-4 my-2 pa-4">
      <v-row no-gutters>
        <v-col cols="2">
          <v-icon color="light-blue darken-3">mdi-hospital-building</v-icon>
        </v-col>
        <v-col>
          <div class="text-body-1">医生建议</div>
        </v-col>
        <v-col cols="1">
          <v-icon class="ma-0 pa-o">mdi-chevron-right</v-icon>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    hospitalSug:{
      name:'长海医院',
      sugTags:[
        {
          title:'医生观念变化',
          color:'purple--text text--darken-3',
          desc:'该医院2个医生诺适得观念发生变化\n颜伟-5医生-A3\n白静-10医生-A2'
        },
        {
          title:'讲者覆盖不足',
          color:'green--text text--darken-1',
          desc:'该医院5位重点医生60天未担任讲者，请跟进'
        },
        {
          title:'会议覆盖不足',
          color:'green--text text--darken-1',
          desc:'该医院2位重点医生30天未参加会议，请跟进'
        },
        {
          title:'进院异常',
          color:'indigo--text text--darken-3',
          desc:'该医院进院后一直未进货，请考虑跟进拜访，迈出成功第一步哟'
        }
      ]
    }
  }),
  methods:{
    onOpenDoctorSug() {
      this.$router.push('doctorSug')
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