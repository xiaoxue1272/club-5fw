<script setup lang="ts">
import {LogInOutline} from "@vicons/ionicons5";
import { NPopover, NIcon, NButton } from 'naive-ui';
import { ref, h } from "vue";

const showLoginModal = ref(false)

const component = h('span', '你好')

</script>

<template>
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
  <modal v-model:show="showLoginModal" :component="component"/>
</template>