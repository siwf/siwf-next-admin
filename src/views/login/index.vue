<!--
 * @Description:
 * @Date: 2022-09-03 21:07:57
 * @LastEditors: siwenfeng
 * @LastEditTime: 2022-09-04 19:14:32
-->
<template>
  <div>
    <el-button @click="onSignIn">登录</el-button>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

import Cookies from 'js-cookie'
import { initBackEndControlRoutes } from '@/router/backEnd'
import { Session } from '@/utils/storage'

const state = reactive({
  isShowPassword: false,
  ruleForm: {
    userName: 'admin',
    password: '123456',
    code: '1234'
  },
  loading: {
    signIn: false
  }
})
// const route = useRoute()
const router = useRouter()
// 登录
const onSignIn = async () => {
  state.loading.signIn = true
  Session.set('token', Math.random().toString(36).substr(0))
  Cookies.set('userName', state.ruleForm.userName)
  await initBackEndControlRoutes()
  router.push('/')
}
</script>
