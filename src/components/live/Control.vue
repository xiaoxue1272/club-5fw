<script setup lang="ts">
import { NButton, NModal, NCard, NInput } from "naive-ui";
import { defineComponent, ref } from "vue";
const showModal = ref(false);
const roomvalue = ref("");
const keyValue = ref("");
const keyShow = ref(false);
function showModalTrue() {
  showModal.value = true;
  console.log(showModal.value);
}
function showModalFalse() {
  showModal.value = false;
  keyValue.value = "";
  keyShow.value = false;
  roomvalue.value = "";
}
function showModalMove() {
  if (roomvalue.value == "") {
    alert("请输入房间号");
  } else {
    var xhr;
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest(); //
    }
    xhr.open(
      "get",
      "http://124.221.83.106:8090/control/get?room=" + roomvalue.value,
      true
    );
    xhr.send(null);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        keyShow.value = true;
        keyValue.value = JSON.parse(xhr.response).data;
      }
    };
  }
}
</script>

/**
* 获取推流密钥 (开播)
* http://124.221.83.106:8090/control/get?room=参数
* 下播 (这个目前不用写)
* http://124.221.83.106:8090/control/delete?room=参数
*/

<template>
  <div>
    <h1>control</h1>
    <div>
      <n-button @click="showModalTrue">开播</n-button>
    </div>
    <n-modal v-model:show="showModal">
      <n-card
        style="width: 600px"
        title="房间号"
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
      >
        <n-input
          v-model:value="roomvalue"
          type="text"
          placeholder="请输入房间号"
          :style="{ width: '50%' }"
        />
        <n-button type="primary" ghost @click="showModalMove"> 搜索 </n-button>
        <div>
          <p v-show="keyShow">这是你的秘钥：{{ keyValue }}</p>
        </div>
        <template #footer>
          <div class="but">
            <div></div>
            <div></div>
            <div>
              <n-button @click="showModalFalse">关闭</n-button>
            </div>
          </div>
        </template>
      </n-card>
    </n-modal>
  </div>
</template>

<style scoped>
.but {
  width: 100%;
  display: flex;
}
.but div {
  flex: 1;
}
</style>