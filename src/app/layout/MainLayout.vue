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
  NLayoutSider,
  NScrollbar,
  NImage,
  NLayoutFooter,
} from 'naive-ui'
import AppMenuOptions from '../../ts/common/menu'
import {LogInOutline} from "@vicons/ionicons5";
import { ref } from "vue";
import Login from "../login/login.vue";

const showLoginModal = ref(false)
const collapsed = ref(true)

defineProps(['switchTheme'])

</script>

<template>
  <n-layout position="absolute">
    <n-layout-header bordered>
      <n-grid collapsed
              cols="2 1000:7">
        <n-grid-item offset="0 1000:1" span="0 1000:1" class="grid-item">
          <n-image :width="30" :height="30" :show-toolbar="false" src="../../../public/5fw.svg"></n-image>
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
    </n-layout-header>
    <n-layout has-sider>
      <n-layout-sider
          bordered
          :collapsed-width="0"
          collapse-mode="transform"
          width="40%"
          :collapsed="collapsed"
          show-trigger="bar"
          @collapse="collapsed = true"
          @expand="collapsed = false"
          class="main-left-layout-sider">
        <n-grid
            collapsed
            :collapsed-rows="8"
            :cols="1" style="height: 100%">
          <n-grid-item/>
          <n-grid-item/>
          <n-grid-item>
            <h2>CN 5FW Club</h2>
          </n-grid-item>
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
        </n-grid>
      </n-layout-sider>
    </n-layout>
    <div v-if="!collapsed" class="main-mask" @click="collapsed = true"/>
    <n-scrollbar trigger="hover" style="height: 90%;">
      <router-view #="{ Component }">
<!--        <keep-alive exclude="live">-->
<!--          -->
<!--        </keep-alive>-->
        <transition name="view" mode="out-in">
          <component :is="Component"/>
        </transition>
      </router-view>
    </n-scrollbar>
    <n-layout-footer style="position: fixed; width: 100%; bottom: 0" bordered>
      <h3>This Web Site Build By Vue3 + Vite + Naive UI, And Provided by 5FW.Club.IT(xuanzikong, tiangou)</h3>
    </n-layout-footer>
  </n-layout>
</template>

<style scoped>
.main-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}
.main-menu {
  font-size: 20px;
  text-align: center;
}
.view-enter-active,
.view-leave-active {
  transition: all 0.5s ease-out;
}
.view-enter-from,
.view-leave-to {
  transform: translateX(30px);
  opacity: 0;
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
    z-index: 9999;
  }
}

</style>