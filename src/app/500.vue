<script setup lang="ts">

import {NResult} from "naive-ui";
</script>

<template>
  <n-result class="global-result-page" size="huge" status="500" title="500 服务器错误" description="生活总归带点荒谬">
    <template #footer>
      <h2>你行你来敲?</h2>
    </template>
  </n-result>
</template>

<style scoped>

</style>