<script setup lang="ts">
import {NButton, NCard, NFormItem, NInput, NModal} from "naive-ui";
import {ref} from "vue";
import {runPromiseCatching} from "../../ts/common/basic";
import axios from "axios";
import {LiveGoBasicRes} from "../../ts/components/liveBasic";

const showModal = ref(false);
const roomInput = ref("");
const keyValue = ref("");
const keyShow = ref(false);
const getSecretKeyButtonDisable = ref(true)
const roomInputRule = ref({
  required: true,
  trigger: ["input", "blur"],
  validator() {
    if (roomInput.value === "") {
      getSecretKeyButtonDisable.value = true
      return new Error("你到底想不想直播?")
    } else {
      getSecretKeyButtonDisable.value = false
    }
  }
})

function getLiveRoomSecretKey() {
  runPromiseCatching(
      axios.get("https://live.5fw.club:8090/control/get?room=" + roomInput.value),
      (res) => {
        if (res.status != 200) {
          return
        }
        const secretKeyRes = (<LiveGoBasicRes<String>>res.data);
        if (secretKeyRes.status != 200) {
          return
        }
        keyShow.value = true;
        keyValue.value = secretKeyRes.data;
      }
  )
}
</script>

/**
* 获取推流密钥 (开播)
* https://live.5fw.club:8090/control/get?room=参数
* 下播 (这个目前不用写)
* https://live.5fw.club:8090/control/delete?room=参数
*/

<template>
  <div>
    <h1>直播管理</h1>
    <h2>你觉得简陋是因为我压根没时间做这个页面</h2>
    <div>
      <n-button @click="showModal = true">获取推流密钥</n-button>
    </div>
    <n-modal closable mask-closable close-on-esc v-model:show="showModal">
      <n-card
        class="model-inner-card"
        title="房间号"
        :bordered="true"
        size="huge"
        role="dialog"
        aria-modal="true"
      >
        <n-form-item :rule="roomInputRule">
          <n-input
              autofocus
              v-model:value="roomInput"
              type="text"
              round
              placeholder="请输入房间号"
          />
        </n-form-item>
        <div>
          <p v-show="keyShow">这是你的秘钥：{{ keyValue }}</p>
        </div>
        <template #footer>
          <n-button type="primary"
                    :disabled="getSecretKeyButtonDisable"
                    round
                    @click="getLiveRoomSecretKey">
            获取推流密钥
          </n-button>
        </template>
      </n-card>
    </n-modal>
  </div>
</template>

<style scoped>
</style>