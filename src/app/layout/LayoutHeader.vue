<script setup lang="ts">
import {
  NMenu,
  NButton,
  NSwitch,
  NGrid,
  NGridItem,
  NLayoutHeader,
  NLayout,
} from 'naive-ui'
import AppMenuOptions from '../../common/appMenu'

defineProps(['switchTheme'])

</script>

<template>
  <n-layout-header class="main-top" bordered>
    <n-layout class="main-top-container">
      <n-grid collapsed 
            cols="2 1000:7">
          <n-grid-item offset="0 1000:1" span="0 1000:1" class="grid-item">
            <img class="top-logo" src="../../assets/vue.svg" alt=""/>
          </n-grid-item>
          <n-grid-item class="grid-item" span="0 1000:3">
            <n-menu mode="horizontal" class="main-menu"
                    dropdown-placement="top"
                    :options="AppMenuOptions"/>
          </n-grid-item>
          <n-grid-item class="grid-item">
            <n-switch :round="false" size="large" @update:value="switchTheme">
              <template #unchecked>
                深色
              </template>
              <template #checked>
                浅色
              </template>
            </n-switch>
          </n-grid-item>
          <n-grid-item class="grid-item">
            <n-button quaternary round type="primary">
              登录
            </n-button>
          </n-grid-item>
      </n-grid>
    </n-layout>
  </n-layout-header>
</template>

<style scoped>
.main-top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 10%;
  z-index: 99999;
}
.main-top-container{
  top: 20%;
  height: inherit 30%;
  width: 100%;
}
@media (max-width: 999px) {
  .top-logo {
    display: none;
  }
}
</style>