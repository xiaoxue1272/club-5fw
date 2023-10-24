<script setup>
import {
  NH1,
  NH2,
  NH3,
  NImage,
  NPopover,
} from "naive-ui";

</script>

<template>
  <div>

    <n-h1><b>CN 5FW</b></n-h1>

    <n-popover trigger="hover">
      <template #trigger>
        <n-image :preview-disabled="true" class="top-logo" src="/5fw.svg"/>
      </template>
      <span>CN 5FW</span>
    </n-popover>

    <n-h2><del>这里是什么都没有的首页</del></n-h2>

    <n-h2>
      <b>
        5Fw Esports简称5Fw。是一家来自中国的电子游戏俱乐部，2020年组建。该俱乐部已涉足少女前线、碧蓝航线、明日方舟、彩虹六号围攻等多个游戏领域。
      </b>
    </n-h2>
    <n-h3>
      <b>
        <del>Location: 青岛市残疾人体育中心</del>
      </b>
    </n-h3>

<!--    <p>-->
<!--      Check out-->
<!--      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"-->
<!--        >create-vue</a-->
<!--      >, the official Vue + Vite starter-->
<!--    </p>-->
<!--    <p>-->
<!--      Install-->
<!--      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>-->
<!--      in your IDE for a better DX-->
<!--    </p>-->
<!--    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>-->
  </div>
</template>
<style>
@media (max-width: 999px) {
  .top-logo {
    display: none;
  }
}
</style>
