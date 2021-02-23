<template>
  <v-card class="pt-5 pb-2 pl-5 pr-3 my-3 rounded-lg card" elevation="0">
    <v-row no-gutters class="d-flex align-center">
      <v-col cols="2" class="icon-container">
          <v-icon>{{cardData.icon.iconName}}</v-icon>
      </v-col>
      <v-col>
          <div class="text-h5 mainContent">{{cardData.mainContent}}</div>
      </v-col>
    </v-row>
    <div class="text-caption subTitle">{{cardData.subTitle}}</div>
  </v-card>
</template>

<script>
export default {
  name:'singleCard',
  data: () => ({}),
  props: {
    cardData:{
      type:Object
    }
  }
}
</script>

<style scoped>
  .card{
    border: 1px solid rgba(0,0,0,0.12);
  }
  .title{
    text-align: center;
  }
  .icon-container {
    position: absolute;
  }
  .mainContent{
    text-align: center;
  }
  .subTitle{
    text-align: end;
  }
</style>