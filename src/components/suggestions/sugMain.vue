<template>
  <div class="sug-page ma-4">
    <div class="text-heading-6 mb-2">智能建议</div>
    <v-card v-for="suggestion in suggestions" class="pa-3 mb-2"  :key="suggestion.id">
      <v-row no-gutters>
        <v-col cols="2">
          <v-icon large color="light-blue darken-3">mdi-account-box-outline</v-icon>
        </v-col>
        <v-col>
          <div class="text-body-2">{{suggestion.name}}</div>
          <div class="text-body-2">{{suggestion.description}}</div>
        </v-col>
        <v-col cols="1" @click="onOpenDetail(suggestion)">
          <v-icon small class="ma-0 pa-o">mdi-chevron-right</v-icon>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  data:()=> ({
    suggestions:[
      {
        name:'顾渊',
        description:'销售指标达标（MTD）低于平均60% vs 65%',
        id:1
      },
      {
        name:'曾婷',
        description:'该销售代表QTD（季度累计月均）销量环比下降5%',
        id:2
      },
      {
        name:'宋茜',
        description:'该销售代表QTD（季度累计月均）销量环比下降4%',
        id:3
      },
      {
        name:'张心笛',
        description:'该销售代表QTD（季度累计月均）销量环比增长低于全国水平（5% vs. 6%）',
        id:4
      }
    ]
  }),
  methods:{
    onOpenDetail(sug) {
      this.$router.push({
        name:'suggestionDetail',
        params:{
          id:sug.id
        }
      })
    }
  }
}
</script>

<style>

</style>