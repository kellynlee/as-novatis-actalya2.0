<template>
  <div class="mb-2">
    <v-card class="ma-2 pb-2" elevation="0" color="blue-grey lighten-5">
      <v-card-title>
        医院
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-text-field>
            <v-icon
            slot="append">
              mdi-magnify
            </v-icon>
            Search
            </v-text-field>
          </v-col>
        </v-row>
        <v-row justify="end">
          <v-btn plain>
            <v-icon>
              mdi-filter
            </v-icon>
          </v-btn>
        </v-row>
        <v-card v-for="(hospital,index) in hospitals" :key="index">
          <v-card-text>
            <v-row no-gutters>
              <v-col cols="2">
                <v-icon>
                  mdi-hospital-building
                </v-icon>
              </v-col>
              <v-col>
                <div>{{hospital.name}}</div>
                <span :class="hospital.categoryColor">{{hospital.category}}</span>
                <span>{{hospital.user}}</span>
              </v-col>
              <v-spacer></v-spacer>
              <v-btn plain></v-btn>
            </v-row>
            <v-row no-gutters>
              <v-col cols="4"></v-col>
              <v-col cols="4"></v-col>
              <v-col cols="4"></v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data:() => ({
    hospitals:[
      {
        name:'长海医院',
        category:'Leading',
        categoryColor:'red--text text--darken-3',
        user:'顾渊',
        MTD:'60%',
        QTD:'12%',
        market:'12%',
        id:1
      },
      {
        name:'静安区中心医院',
        category:'Leading',
        categoryColor:'red--text text--darken-3',
        user:'曾婷',
        MTD:'75%',
        QTD:'12%',
        market:'12%'
      },
      {
        name:'华山医院',
        category:'Rising',
        categoryColor:'yellow--text text--darken-3',
        user:'张心笛',
        MTD:'80%',
        QTD:'12%',
        market:'12%'
      },
      {
        name:'长康医院',
        category:'Rising',
        categoryColor:'yellow--text text--darken-3',
        user:'宋茜',
        MTD:'85%',
        QTD:'12%',
        market:'12%'
      },
      {
        name:'上海肿瘤医院',
        category:'Emerging',
        categoryColor:'green--text text--darken-3',
        user:'席宁',
        MTD:'30%',
        QTD:'12%',
        market:'12%'
      }
    ]
  }),
  methods:{
    onSearch() {}
  }
}
</script>

<style>

</style>