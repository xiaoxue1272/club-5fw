<script setup lang="ts">
import {ref} from 'vue'
import {
  NMenu,
  NGrid,
  NGridItem,
  NLayout,
  NLayoutContent,
  NLayoutSider,
} from 'naive-ui'
import AppMenuOptions from '../../ts/common/appMenu'

const collapsed = ref(true)

</script>

<template>
  <n-layout>
    <n-layout-content>
      <n-layout has-sider>
        <n-layout-sider
            bordered
            collapse-mode="width"
            width="40%"
            :collapsed="collapsed"
            show-trigger="bar"
            @collapse="collapsed = true"
            @expand="collapsed = false"
            class="main-left-layout-slider">
          <n-grid
              collapsed
              :collapsed-rows="8"
              :cols="1" style="height: 100%">
            <n-grid-item/>
            <n-grid-item/>
            <n-grid-item>
              <h2 v-if="!collapsed">CN⚡5FW</h2>
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
        <n-layout>
          <router-view class="layout-router-view" #="{ Component }">
            <transition name="view" mode="out-in">
              <component :is="Component"/>
            </transition>
          </router-view>
        </n-layout>
      </n-layout>
    </n-layout-content>
  </n-layout>
</template>

<style scoped>
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
  .main-left-layout-slider {
    display: none;
  }
}
@media (max-width: 1000px) {
  .main-left-layout-slider {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    height: 100%;
  }
}

</style>