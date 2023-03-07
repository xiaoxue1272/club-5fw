<script setup lang="ts">
import layoutHeader from './layout/LayoutHeader.vue'
import layoutContent from './layout/LayoutContent.vue'
import {ref} from 'vue'
import {
  NConfigProvider,
  NGlobalStyle,
  NLayout,
  GlobalTheme,
  darkTheme,
} from 'naive-ui'
import dateZhCN from "naive-ui/es/locales/date/zhCN"
import zhCN from 'naive-ui/es/locales/common/zhCN'

const theme = ref<GlobalTheme | null>(null)

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
      <router-link to="/home">home</router-link>
      <layout-content/>
    </n-layout>
  </n-config-provider>
</template>

<style>
.main-menu {
  font-size: 16px;
  font-weight: bold;
}
.grid-item {
  margin: auto;
}
</style>
