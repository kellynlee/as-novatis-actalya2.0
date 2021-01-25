<template>
  <div
  class="d-flex align-end">
    <v-row
    class="ma-0 main-container"
    ref="mainContainer">
    <plan-page v-if="showPlan"></plan-page>
    <sug-page v-if="showSug"></sug-page>
    <insight-page v-if="showInsight"></insight-page>
    </v-row>
    <v-row
    class="ma-0 nav-bar">
      <v-tabs
      v-model="tab"
      background-color="light-blue darken-1"
      class="rounded-0"
      centered
      dark
      fixed-tabs
      height="60"
      icons-and-text
      @change="onTabChange">
        <v-tab href="#tab-1">
          待办<v-icon>mdi-file-table-box-outline</v-icon>
        </v-tab>
        <v-tab href="#tab-2">
          建议<v-icon>mdi-lightbulb-outline</v-icon>
        </v-tab>
        <v-tab href="#tab-3">
          洞察<v-icon>mdi-information-outline</v-icon>
        </v-tab>
      </v-tabs>
      <v-tabs-items 
      v-model="tab"
      >
        <v-tab-item
          v-for="i in 3"
          :key="i"
          :value="'tab-' + i"
        >
        </v-tab-item>
      </v-tabs-items>
    </v-row>
  </div>
</template>

<script>
import planPage from './planMain';
import insightPage from './insights/insightMain';
import sugPage from './suggestions/sugMain';

export default {
  name: 'mainPage',
  data: () => ({
    tab:null,
    showPlan:false,
    showInsight:false,
    showSug:false
  }),
  components:{
    planPage, insightPage, sugPage
  },
  mounted() {
    this.$refs.mainContainer.style.height = window.innerHeight - 60 + "px"
  },
  methods:{
    onTabChange() {
      if (this.tab == "tab-1") {
        this.showPlan = true
      } else {
        this.showPlan = false
      }
      if (this.tab == "tab-2") {
        this.showSug = true;
      } else {
        this.showSug = false;
      }
      if (this.tab == "tab-3") {
        this.showInsight = true;
      } else {
        this.showInsight = false;
      }
    }
  }
}
</script>

<style scoped>
.nav-bar{
  position:fixed;
  width: 100%;
  bottom: 0;
  z-index: 1000;
}
.main-container {
  overflow: scroll;
}
</style>
