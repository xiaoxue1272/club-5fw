<script setup lang="ts">

import {NH1, NH2, NImage, NPopover} from "naive-ui";
</script>


/**
* 查看在线状态 (谁在播 谁在看)
* http://124.221.83.106:8090/stat/livestat
*/

<template>
  <n-h1>Live Home</n-h1>

  <n-image src="../../../public/live logo.jpg" width="400" :show-toolbar="false"></n-image>

  <n-popover  trigger="hover">
    <template #trigger>
      <n-h2>谁在播, 谁在看?</n-h2>
    </template>
    <n-h2>扌喿 亻乍 亻尔</n-h2>
  </n-popover>
</template>

<style scoped>

</style>