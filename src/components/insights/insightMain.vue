<template>
  <div class="insight">
    <v-tabs
      v-model="tab"
      background-color="blue-grey lighten-3"
      class="rounded-0 insight-tab"
      centered
      dark
      fixed-tabs
      height="30"
      icons-and-text
      @change="onTabChange">
        <v-tab href="#tab-1">
          区域
        </v-tab>
        <v-tab href="#tab-2">
          医院
        </v-tab>
        <v-tab href="#tab-3">
          医生
        </v-tab>
        <v-tab href="#tab-4">
          代表
        </v-tab>
      </v-tabs>
      <div class="detail-view">
        <district-insight v-if="tab == 'tab-1'"></district-insight>
        <hospital-insight v-if="tab == 'tab-2'"></hospital-insight>
      </div>
  </div>
</template>

<script>
import districtInsight from '../insights/districtInsight';
import hospitalInsight from '../insights/hospitalInsight';
export default {
data:() => ({
  searchTxt:"",
  tab:null
}),
components:{
  districtInsight, hospitalInsight
},
methods:{
  onTabChange(){}
}
}
</script>

<style scoped>
.insight{
  width: 100%;
}
.insight-tab{
  position: fixed;
  top: 0;
  z-index: 1000;
}
.detail-view{
  position: absolute;
  width: 100%;
  top:30px;
  height: 100%;
  overflow: scroll;
}
</style>