<style>
.v-toolbar-title__placeholder {
  display: flex;
  align-items: center;
}
.v-app-bar.v-toolbar {
  background-color: rgb(189, 148, 227) !important;
}
.v-main {
  background: url('@/assets/bg.png');
  background-repeat: repeat;
  background-size: contain;
}
</style>
<template>
  <v-app>
    <v-app-bar>
      <v-container fluid class="d-flex align-center">
        
        <v-app-bar-title><img src="@/assets/eggplant.png" alt="茄子" style="height: 50px;">茄子鐘</v-app-bar-title>
        <v-btn prepend-icon="mdi-home" to="/">首頁</v-btn>
        <v-btn prepend-icon="mdi-format-list-bulleted" to="/list">事項</v-btn>
        <v-btn prepend-icon="mdi-cog" to="/settings">設定</v-btn>
      </v-container>
    </v-app-bar>
    <v-main>
      <router-view v-slot="{ Component }">
        <keep-alive include="Home">
        <component :is="Component"></component>
        </keep-alive>
      </router-view>
    </v-main>
  </v-app>
  </template>
  
  <script setup>
  </script>
  