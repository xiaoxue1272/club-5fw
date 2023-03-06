<script setup lang="ts">
import './common/transition.css'
import {ref} from 'vue'
import {
  NConfigProvider,
  NGlobalStyle,
  NMenu,
  darkTheme,
  NButton,
  NSwitch,
  NGrid,
  NGridItem,
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutSider,
} from 'naive-ui'
import dateZhCN from "naive-ui/es/locales/date/zhCN"
import zhCN from 'naive-ui/es/locales/common/zhCN'
import AppMenuOptions from './common/appMenu.ts'

const theme = ref(null)

const collapsed = ref(true)

function switchTheme(flag: boolean) {
  if (flag) {
    theme.value = darkTheme
  } else {
    theme.value = null
  }
}




</script>

<template>
  <n-config-provider :theme="theme"
                     :date-locale="dateZhCN" :locale="zhCN">
    <n-global-style/>
    <n-layout>
      <n-layout-header class="main-top" bordered>
        <n-grid
                collapsed
                cols="3 1000:7">
          <n-grid-item offset="0 1000:1" span="0 1000:1" class="grid-item">
            <img class="top-logo" src="./assets/vue.svg" alt=""/>
          </n-grid-item>
          <n-grid-item class="grid-item" span="0 1000:3">
            <n-menu mode="horizontal" class="main-menu"
                    dropdown-placement="top"
                    :options="AppMenuOptions"/>
          </n-grid-item>
          <n-grid-item class="grid-item">
            <n-switch @update:value="switchTheme">
              <template #unchecked>
                深色
              </template>
              <template #checked>
                浅色
              </template>
            </n-switch>
          </n-grid-item>
          <n-grid-item class="grid-item" offset="1 1000:0">
            <n-button quaternary round type="primary">
              登录
            </n-button>
          </n-grid-item>
        </n-grid>
      </n-layout-header>
      <n-layout-content>
        <n-layout has-sider>
          <n-layout-sider
            bordered
            collapse-mode="width"
            :collapsed-width="0"
            width="50%"
            :collapsed="collapsed"
            show-trigger="bar"
            @collapse="collapsed = true"
            @expand="collapsed = false"
            class="main-left-layout-sider">
          <n-grid
              collapsed
              :collapsed-rows="11"
              :cols="1" style="height: 100%">
            <n-grid-item class="grid-item">
              <img src="./assets/vue.svg" alt/>
            </n-grid-item>
            <n-grid-item/>
            <n-grid-item/>
            <n-grid-item class="grid-item">
              <n-menu
                  :collapsed="collapsed"
                  :collapsed-width="64"
                  :options="AppMenuOptions"
                  class="main-menu"
              />
            </n-grid-item>
            <n-grid-item/>
            <n-grid-item/>
            <n-grid-item/>
            <n-grid-item/>
            <n-grid-item/>
            <n-grid-item/>
            <n-grid-item/>
          </n-grid>
        </n-layout-sider>
          <n-layout>
            <router-view #="{ Component, route }">
              <transition name="router">
                <component :is="Component" :key="route.path" />
              </transition>
            </router-view>
          </n-layout>
        </n-layout>
      </n-layout-content>
    </n-layout>
  </n-config-provider>
</template>

<style>

.main-top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 99999;
}
@media (min-width: 1000px) {
  .main-left-layout-sider {
    display: none;
  }
}
@media (max-width: 1000px) {
  .main-left-layout-sider {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    height: 100%;
  }
}
@media (max-width: 999px) {
  .top-logo {
    display: none;
  }
}
.main-menu {
  font-size: 16px;
  font-weight: bold;
}
.grid-item {
  margin: auto
}
</style>
