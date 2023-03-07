<script setup lang="ts">
import {LogInOutline} from "@vicons/ionicons5";
import { NPopover, NIcon, NButton, NModal, NCard } from 'naive-ui';
import {ref} from "vue";

const showLoginModal = ref(false)
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
  <n-modal v-model:show="showLoginModal"
           auto-focus
           close-on-esc
           :block-scroll="false">
    <n-card>你好</n-card>
  </n-modal>
</template>