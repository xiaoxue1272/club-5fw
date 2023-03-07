<template>
  <router-view #="{ Component }">
    <transition name="view">
      <component :is="Component"/>
    </transition>
  </router-view>
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
</style>
