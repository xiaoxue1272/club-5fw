<script setup lang="ts">
import {NH1, NH2, NH3, NImage, NPopover, NCollapse, NCollapseItem, NList, NListItem, NGradientText, NCard, NIcon, NText} from "naive-ui";
import { ArrowForward as ArrowRightIcon} from "@vicons/ionicons5"
import axios from "axios";
import {LiveGoBasicRes, LiveStatRes} from "../../ts/components/liveBasic";
import {ref} from "vue";
import {runPromiseCatching} from "../../ts/common/basic";

const liveStat = ref<LiveStatRes>()

queryLiveStat().then((value) => {
  liveStat.value = value
})


async function queryLiveStat(): Promise<LiveStatRes> {
  return runPromiseCatching(
      axios.get("https://live.5fw.club:8090/stat/livestat"),
      (res) => {
        if (res.status != 200) {
          return
        }
        let liveGoRes = (<LiveGoBasicRes<LiveStatRes>>res.data)
        if (liveGoRes.status != 200) {
          return
        }
        console.log(liveStat)
        return liveGoRes.data
      }
  )
}

// or
// axios.get("https://live.5fw.club:8090/stat/livestat").then((res) => {
//   if (res.status != 200) {
//     return
//   }
//   let liveGoRes = (<LiveGoBasicRes<LiveStatRes>>res.data)
//   if (liveGoRes.status != 200) {
//     return
//   }
//   liveStat.value = liveGoRes.data
//   console.log(liveStat)
// })


function cacheRoom(room) {
  localStorage.setItem('room', room)
}


</script>


/**
* 查看在线状态 (谁在播 谁在看)
* https://live.5fw.club:8090/stat/livestat
*/

<template>
  <div>
    <n-h1>Live Home</n-h1>

    <n-image src="/live logo.jpg" width="400" :show-toolbar="false"></n-image>

    <n-popover  trigger="hover">
      <template #trigger>
        <n-h2>谁在播, 谁在看?</n-h2>
      </template>
      <n-h2>扌喿 亻乍 亻尔</n-h2>
    </n-popover>
    <div style="padding-bottom: 10%">
      <n-card bordered style="width: 50%; margin: auto;">
        <n-collapse>
          <n-collapse-item>
            <template #header>
              <n-h3 style="margin: auto">
                <n-gradient-text type="primary">
                  <b>
                    当前直播列表
                  </b>
                </n-gradient-text>
              </n-h3>
            </template>
            <template #arrow>
              <n-icon><ArrowRightIcon/></n-icon>
            </template>
            <n-list bordered hoverable clickable>
              <router-link to="/live/room" v-for="publisher in liveStat.publishers" @click="cacheRoom(publisher.key.split('/')[1])">
                <n-list-item>
                  <n-text strong>
                    <b>{{publisher.key.split("/")[1]}}</b>
                  </n-text>
                </n-list-item>
              </router-link>
            </n-list>
          </n-collapse-item>
        </n-collapse>
      </n-card>
    </div>
  </div>
</template>

<style scoped>

</style>