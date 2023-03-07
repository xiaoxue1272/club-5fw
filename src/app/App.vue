<script setup lang="ts">
import {ref} from 'vue'
import {
  NConfigProvider,
  NGlobalStyle,
  NLayout,
  darkTheme,
} from 'naive-ui'
import dateZhCN from "naive-ui/es/locales/date/zhCN"
import zhCN from 'naive-ui/es/locales/common/zhCN'
import LayoutHeader from "./layout/LayoutHeader.vue";
import LayoutContent from "./layout/LayoutContent.vue";

const theme = ref(null)

function switchTheme(flag: boolean) {
  if (flag) {
    theme.value = darkTheme
  } else {
    theme.value = null
  }
}

</script>

<template>
  <n-config-provider :theme="theme" :date-locale="dateZhCN" :locale="zhCN">
    <n-global-style/>
    <n-layout>
      <layout-header :switch-theme="switchTheme"/>
      <layout-content/>
    </n-layout>
  </n-config-provider>
</template>

<style>
.main-menu {
  font-size: 20px;
}
.grid-item {
  margin: auto;
}
</style>
