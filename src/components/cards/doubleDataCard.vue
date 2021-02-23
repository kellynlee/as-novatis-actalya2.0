<template>
  <v-card class="py-3 pl-5 pr-3 mb-3 card" elevation="0">
    <v-row no-gutters class="d-flex align-center">
      <v-col cols="2" class="icon-container">
        <v-icon>{{cardData.icon.iconName}}</v-icon>
    </v-col>
    <v-col>
      <v-row no-gutters>
        <v-col class="main-content">
          <div style="font-size:22px" >{{cardData.mainContent}}</div>
          <div style="font-size:10px">{{cardData.mainDesc}}</div>
        </v-col>
      </v-row>
      <v-row no-gutters justify="end" class="sub-content">
        <div style="font-size:10px">{{cardData.subContent}}</div>
      </v-row>
    </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data: () => ({

  }),
  props:{
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
.icon-container {
  position: absolute;
}
.main-content{
  text-align: center;
}
.sub-content{
  text-align: end;
}
</style>