<script setup lang="ts">

import mpegts from "mpegts.js"
import {onMounted, onUnmounted, ref} from "vue";
import {NH1, NGradientText, NModal, NCard, NInput, NButton, FormItemRule, NFormItem} from "naive-ui";

import { router } from "../../ts/router"
import {notification} from "../../ts/common/basic";

const room = ref(localStorage.getItem("room"));
const roomInput = ref(room.value)
const roomInputModelShow = ref(room.value == null || room.value === "")
const roomInputModelCloseable = ref(true)
const enterRoomButtonShow = ref(false)
const isVideoSupported: boolean = mpegts.isSupported()

let player: mpegts.Player

const roomInputRule = ref<FormItemRule>({
  required: true,
  trigger: ["input", "blur"],
  validator() {
    if (roomInput.value == null || roomInput.value === "") {
      enterRoomButtonShow.value = false
      return new Error("我怎么知道你要看谁?")
    } else {
      enterRoomButtonShow.value = true
    }
  }
})

function toLiveHome() {
  router.push('/live/home')
}

function enterRoom() {
  roomInputModelShow.value = false
  roomInputModelCloseable.value = roomInput.value != null && roomInput.value !== ""
  room.value = roomInput.value as string
  localStorage.setItem("room", room.value)
  destroyVideoPlayer()
  initVideoPlayer(room.value)
  document.getElementById("liveRoom").style.display = ""
}

function initVideoPlayer(room: String) {
  player = mpegts.createPlayer({
    type: 'flv',
    cors: true,
    url: 'https://live.5fw.club:7001/live/' + room +'.flv'
  });
  player.attachMediaElement(<HTMLMediaElement>document.getElementById("livePlayer"))
  player.load()
  player.play()
}

function destroyVideoPlayer() {
  if (player != null) {
    player.destroy()
  }
}

onMounted(() => {
  room.value = localStorage.getItem("room")
  roomInput.value = localStorage.getItem("room")
  roomInputModelShow.value = room.value == null || room.value === ""
  if (!isVideoSupported) {
    document.getElementById("livePlayer").style.display = "none"
    notification("warning", "初始化视频播放器失败", "暂不支持当前浏览器")
    return
  }
  if (room.value == null || room.value === "") {
    roomInputModelShow.value = true
    roomInputModelCloseable.value = false
    document.getElementById("liveRoom").style.display = "none"
    notification("info", "未找到历史观看记录", "未找到历史观看记录")
    return
  }
  initVideoPlayer(room.value)
})

onUnmounted(() => {
  destroyVideoPlayer()
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
//       url: 'https://live.5fw.club:7001/live/tiangou.flv'
//     });
//     flvPlayer.attachMediaElement(<HTMLMediaElement>livePlayer)
//     flvPlayer.load()
//     flvPlayer.play()
//   }
// }

</script>

/**
* 直播流
* https://live.5fw.club:7001/live/[参数,就是 Control里的room=的那个].flv
*/

<template>
  <div>
    <n-modal
        v-model:closable="roomInputModelCloseable"
        v-model:close-on-esc="roomInputModelCloseable"
        v-model:mask-closable="roomInputModelCloseable"
        v-model:show="roomInputModelShow"
        block-scroll>
      <n-card class="model-inner-card"
          :bordered="true"
          size="huge"
          role="dialog"
          aria-modal="true"
      >
<!--        <template #header>-->
<!--          <n-gradient-text type="info">-->
<!--            <b>-->
<!--              请输入房间号-->
<!--            </b>-->
<!--          </n-gradient-text>-->
<!--        </template>-->
        <n-form-item :rule="roomInputRule">
          <n-input bordered clearable round placeholder="房间号" v-model:value="roomInput" />
        </n-form-item>

        <template #footer>
          <div>
            <n-button strong secondary round v-show="enterRoomButtonShow" type="info" :on-click="enterRoom">
              进入房间
            </n-button>
          </div>
          <div style="padding-top: 5%">
            <n-button strong secondary round type="success" :on-click="toLiveHome">
              回到Live Home
            </n-button>
          </div>
        </template>
      </n-card>
    </n-modal>
    <div id="liveRoom" class="padding-width70-percent">
      <div>
        <div class="div-inline-block" style="position: relative; float: left">
          <n-h1 style="text-align: left" ><n-gradient-text type="success">{{ room }}的直播间</n-gradient-text></n-h1>
        </div>
        <div class="div-inline-block" style="position: relative; float: right">
          <n-button quaternary round type="primary" @click="roomInputModelShow = true"><b>换台</b></n-button>
        </div>
      </div>
      <video id="livePlayer" style="width: 100%;" controls autoplay/>
    </div>
  </div>
</template>

<style scoped>
.div-inline-block {
  display: inline-block;
}
.padding-width70-percent {
  width: 70%;
  margin: auto;
}
</style>