<script setup lang="ts">
import { NModal, NForm, NFormItem, NInput, NButton, NCard } from 'naive-ui'
import {ref} from "vue";
import {FormRules} from "naive-ui/es/form/src/interface";

const loginData = ref({
  account: '',
  password: ''
})

const loginRules = ref<FormRules>({
  account: [{
    required: true,
    message: '请输入账号',
    trigger: ['input']
  }],
  password: [{
    required: true,
    message: '请输入密码',
    trigger: ['input']
  }]
})

</script>

<template>
  <n-modal auto-focus
           close-on-esc
           :block-scroll="false">
    <n-card class="model-inner-card" :bordered="true">
      <n-form size="medium"
              :rules="loginRules"
              :model="loginData"
              :show-label="false">
        <h2>CN 5FW</h2>
        <div class="form-item-layout">
          <n-form-item first path="account">
            <n-input round type="text" v-model:value="loginData.account" placeholder="账号"/>
          </n-form-item>
          <n-form-item first path="password">
            <n-input round type="password" v-model:value="loginData.password" placeholder="密码"/>
          </n-form-item>
        </div>
        <div>
          <n-button style="width: 70%;" strong secondary round type="info">
            登录&注册
          </n-button>
        </div>
      </n-form>
    </n-card>
  </n-modal>
</template>

<style scoped>

.form-item-layout {
  text-align: initial;
  display: inline-block;
  width: 100%;
  margin: 0 auto;
}
</style>