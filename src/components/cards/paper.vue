<template>
    <v-expansion-panel>
      <v-expansion-panel-header class="elevation-0 paper-title">
      {{title}}
      </v-expansion-panel-header>
      <v-expansion-panel-content class="paper-content">
        <slot></slot>
      </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
export default {
  name:'paper',
  data: () => ({
  }),
  props:{
    title: {
      type:String
    }
  }
}
</script>

<style scoped>
.paper-title {
  padding: 12px;
  font-size: 20px;
}
</style>