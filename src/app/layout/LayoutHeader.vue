<script setup lang="ts">
import {
  NPopover,
  NMenu,
  NSwitch,
  NGrid,
  NGridItem,
  NLayoutHeader,
  NLayout,
  NIcon,
  NButton,
} from 'naive-ui'
import AppMenuOptions from '../../ts/common/appMenu'
import {LogInOutline} from "@vicons/ionicons5";


import { ref } from "vue";

const showLoginModal = ref(false)

import Login from "../login/login.vue";


defineProps(['switchTheme'])

</script>

<template>
  <n-layout-header class="main-top" bordered>
    <n-layout class="main-top-container">
      <n-grid collapsed
              style="height: inherit"
            cols="2 1000:7">
        <n-grid-item offset="0 1000:1" span="0 1000:1" class="grid-item">
        </n-grid-item>
        <n-grid-item class="grid-item" span="0 1000:3">
          <n-menu mode="horizontal" class="main-menu"
                  dropdown-placement="top"
                  :options="AppMenuOptions"/>
        </n-grid-item>
        <n-grid-item class="grid-item">
          <n-switch @update:value="switchTheme">
            <template #unchecked>
              🌙
            </template>
            <template #checked>
              ☀️
            </template>
          </n-switch>
        </n-grid-item>
        <n-grid-item class="grid-item">
          <n-popover trigger="hover">
            <template #trigger>
              <n-button round style="vertical-align: middle"
                        :bordered="false"
                        @click="showLoginModal = true">
                <n-icon size="30">
                  <log-in-outline/>
                </n-icon>
              </n-button>
            </template>
            <span>登录</span>
          </n-popover>
            <login v-model:show="showLoginModal"/>
        </n-grid-item>
      </n-grid>
    </n-layout>
  </n-layout-header>
</template>

<style>
.main-top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
</style>