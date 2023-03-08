<script setup>
import { NModal, NCard } from 'naive-ui';
const props = defineProps(['component'])

</script>

<template>
  <n-modal auto-focus
         close-on-esc
         :block-scroll="false">
    <n-card>
      <component :is="component"/>
    </n-card>
  </n-modal>
</template>
