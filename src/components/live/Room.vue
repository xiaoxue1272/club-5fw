<script setup lang="ts">

import flvJs from "flv.js"
import {onMounted, onUnmounted, ref} from "vue";
import {NH1, NGradientText, NModal, NCard, NInput, NButton, FormItemRule, NFormItem} from "naive-ui";

import { router } from "../../ts/router"

const room = ref(localStorage.getItem("room"));
const roomInput = ref(room.value)
const roomInputModelShow = ref(room.value == null || room.value === "")
const roomInputModelCloseable = ref(true)
const enterRoomButtonShow = ref(false)

let flvPlayer = null

const roomInputRule = ref<FormItemRule>({
  required: true,
  trigger: ["input", "blur", "focus"],
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
  console.log('roomInputModelCloseable', roomInputModelCloseable.value, 'roomInputModelShow', roomInputModelShow.value)
  room.value = roomInput.value
  localStorage.setItem("room", roomInput.value)
  destroyVideoPlayer()
  initVideoPlayer(roomInput.value)
  document.getElementById("liveRoomBasicDiv").style.display = ""
}

function initVideoPlayer(room: String) {
  let livePlayer = document.getElementById("livePlayer");
  if (!flvJs.isSupported()) {
    livePlayer.style.display = "none"
  }
  console.log(livePlayer)
  flvPlayer = flvJs.createPlayer({
    type: 'flv',
    cors: true,
    url: 'http://124.221.83.106:7001/live/' + room +'.flv'
  });
  flvPlayer.attachMediaElement(<HTMLMediaElement>livePlayer)
  flvPlayer.load()
  flvPlayer.play()
}

function destroyVideoPlayer() {
  if (flvPlayer != null) {
    flvPlayer.destroy()
  }
}

onMounted(() => {
  room.value = localStorage.getItem("room")
  roomInput.value = localStorage.getItem("room")
  roomInputModelShow.value = room.value == null || room.value === ""
  console.log('roomInputModelCloseable', roomInputModelCloseable.value, 'roomInputModelShow', roomInputModelShow.value)
  if (room.value == null || room.value === "") {
    roomInputModelShow.value = true
    roomInputModelCloseable.value = false
    document.getElementById("liveRoomBasicDiv").style.display = "none"
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
  <div>
    <n-modal
        v-model:closable="roomInputModelCloseable"
        v-model::close-on-esc="roomInputModelCloseable"
        v-model:mask-closable="roomInputModelCloseable"
        v-model:show="roomInputModelShow"
        block-scroll>
      <n-card class="model-inner-card"
          :bordered="true"
          size="huge"
          role="dialog"
          aria-modal="true"
      >
        <template #header>
          <n-gradient-text type="info">
            <b>
              请输入房间号
            </b>
          </n-gradient-text>
        </template>
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
    <div id="liveRoomBasicDiv">
      <div class="padding-width70">
        <div>
          <n-h1 style="text-align: left" ><n-gradient-text type="success">{{ room }}的直播间</n-gradient-text></n-h1>
        </div>
        <div></div>
        <div>
          <n-button quaternary round type="primary" @click="roomInputModelShow = true"><b>换台</b></n-button>
        </div>
      </div>
      <video id="livePlayer" class="padding-width70-percent" controls autoplay/>
    </div>
  </div>
</template>

<style scoped>
.padding-width70-percent {
  width: 70%;
  position: relative;
}
.padding-width70 {
  width: 100%;
  display: flex;
}
.padding-width70 :first-child{
  width: 100%;
  margin-left: 6%;
}
.padding-width70 :last-child{
  margin-right: 15%;
}
</style>