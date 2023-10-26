<script setup lang="ts">

import {NResult} from "naive-ui";
</script>

<template>
  <n-result
      class="global-result-page"
      status="403"
      title="403 禁止访问"
      description="总有些门是对你关闭的"
  >
    <template #footer>
      <h2>你可以走了</h2>
    </template>
  </n-result>
</template>

<style scoped>

</style>