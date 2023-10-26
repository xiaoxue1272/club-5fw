<script setup lang="ts">

import flvJs from "flv.js"
import {onMounted} from "vue";


onMounted(() => {
  let livePlayer = document.getElementById("livePlayer");
  if (!flvJs.isSupported()) {
    livePlayer.style.display = "none"
  }

  console.log(livePlayer)
  let flvPlayer =  flvJs.createPlayer({
    type: 'flv',
    cors: true,
    url: 'http://124.221.83.106:7001/live/' + "参数" +'.flv'
  });
  flvPlayer.attachMediaElement(<HTMLMediaElement>livePlayer)
  flvPlayer.load()
  flvPlayer.play()
})

// export default {
//   mounted() {
//     let livePlayer = document.getElementById("live_player");
//     if (!flvJs.isSupported()) {
//       livePlayer.style.display = "none"
//     }
//     console.log(livePlayer)
//     let flvPlayer =  flvJs.createPlayer({
//       type: 'flv',
//       cors: true,
//       url: 'http://live.5fw.club:7001/live/tiangou.flv'
//     });
//     flvPlayer.attachMediaElement(<HTMLMediaElement>livePlayer)
//     flvPlayer.load()
//     flvPlayer.play()
//   }
// }

</script>


/**
* 直播流
* http://124.221.83.106:7001/live/[参数,就是 Control里的room=的那个].flv
*/

<template>
  <h1>room</h1>
  <video id="livePlayer" controls autoplay/>
</template>

<style scoped>

</style>