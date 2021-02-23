<template>
  <div
  class="d-flex align-end">
    <div class="header">
      <span>{{title}}</span>
      <div class="prodName">
        <span>诺适得</span>
      </div>
    </div>
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
      background-color="#4F74C3"
      class="rounded-0"
      centered
      dark
      fixed-tabs
      height="56"
      icons-and-text
      @change="onTabChange">
        <v-tab href="#tab-1">
          待办<v-icon>$vuetify.icons.todo</v-icon>
        </v-tab>
        <v-tab href="#tab-2">
          建议<v-icon>$vuetify.icons.info</v-icon>
        </v-tab>
        <v-tab href="#tab-3">
          洞察<v-icon>$vuetify.icons.suggestion</v-icon>
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
    showSug:false,
    title:'待办'
  }),
  components:{
    planPage, insightPage, sugPage
  },
  mounted() {
    this.$refs.mainContainer.style.height = window.innerHeight - 112 + "px"
  },
  methods:{
    onTabChange() {
      if (this.tab == "tab-1") {
        this.showPlan = true
        this.title = '待办';
      } else {
        this.showPlan = false
      }
      if (this.tab == "tab-2") {
        this.showSug = true;
        this.title = '建议'
      } else {
        this.showSug = false;
      }
      if (this.tab == "tab-3") {
        this.showInsight = true;
        this.title = '洞察'
      } else {
        this.showInsight = false;
      }
    }
  }
}
</script>

<style scoped>
.nav-bar{
  position:absolute;
  width: 100%;
  bottom: 0;
}
.header{
  width: 100%;
  height: 3.5rem;
  background-color: #4F74C3;
  color: #ffffff;
  position: fixed;
  top: 0;
  z-index: 10000;
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 20px;
  box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.3);
}
.prodName {
  position: absolute;
  right: 12px;
  font-size: 14px;
}
.main-container {
  overflow: scroll;
  position: absolute;
  top: 56px;
  width: 100%;
}
</style>
