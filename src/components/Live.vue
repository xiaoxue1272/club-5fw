<script setup>
import {NMenu} from "naive-ui";
import LiveMenuOptions from "../ts/components/liveMenu.ts";

</script>

<template>
  <div style="padding-top: 5%">
    <n-menu mode="horizontal" style="font-size: 20px" class="horizontal-menu-live-home" :options="LiveMenuOptions"/>
    <div style="padding-top: 3%">
      <router-view/>
    </div>
  </div>
</template>

<style scoped>


</style>