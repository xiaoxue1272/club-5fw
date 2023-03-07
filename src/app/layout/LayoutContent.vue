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
import AppMenuOptions from '../../common/appMenu'

import View from '../View.vue'

const collapsed = ref(true)

</script>
<template>
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
            <n-grid-item/>
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
          <view/>
        </n-layout>
      </n-layout>
    </n-layout-content>
</template>
<style scoped>
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
</style>