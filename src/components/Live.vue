<script setup>
import {NMenu} from "naive-ui";
import LiveMenuOptions from "../ts/components/liveMenu.ts";

</script>

<template>
  <div style="padding-top: 5%">
    <n-menu mode="horizontal" style="font-size: 20px" class="horizontal-menu-live-home" :options="LiveMenuOptions"/>
    <div style="padding-top: 3%">
      <router-view #="{ Component }">
        <keep-alive exclude="room">
          <transition name="live-view" mode="out-in">
            <component :is="Component"/>
          </transition>
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>
<style scoped>
.live-view-enter-active,
.live-view-leave-active {
  transition: all 0.5s ease-out;
}
.live-view-enter-from,
.live-view-leave-to {
  transform: translateX(30px);
  opacity: 0;
}

</style>