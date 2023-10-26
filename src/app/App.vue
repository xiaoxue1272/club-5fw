<script setup lang="ts">
import {
  NConfigProvider,
  NGlobalStyle,
  useOsTheme,
} from 'naive-ui'
import dateZhCN from "naive-ui/es/locales/date/zhCN"
import zhCN from 'naive-ui/es/locales/common/zhCN'
// import LayoutContent from "./layout/LayoutContent.vue";
import {switchTheme, theme} from "../ts/common/basic"
// import LayoutHeader from "./layout/LayoutHeader.vue";
import MainLayout from "./layout/MainLayout.vue";
import {onMounted} from "vue";

onMounted(() => {
  if (useOsTheme().value == "dark") {
    switchTheme(true)
  }
})

// const themeOverrides = ref<null | GlobalThemeOverrides>(null)


</script>

<template>
  <n-config-provider :theme="theme" :date-locale="dateZhCN" :locale="zhCN">
    <n-global-style/>
<!--    <n-layout>-->
<!--      <layout-header :switch-theme="switchTheme"/>-->
<!--      <layout-content/>-->
<!--    </n-layout>-->
    <main-layout :switch-theme="switchTheme"/>
  </n-config-provider>
</template>

<style>
.grid-item {
  margin: auto;
}
.model-inner-card {
  padding: 0 30px 30px;
  text-align: center;
  width: 20%;
}
@media(max-width: 1100px) {
  .model-inner-card {
    width: 50%;
  }
}
@media(max-width: 450px) {
  .model-inner-card {
    width: 100%;
  }
}
</style>
