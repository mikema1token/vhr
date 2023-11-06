<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "loginVue",
  data(){
    return {
      loginForm:{
        username: 'admin',
        password: 'super123',
        remember: false
      },
      rules:{
        username:[{required: true,message: '请输入用户名', trigger:'blur'}],
        password:[{min:3,max:8, message:'长度在3到8字符', trigger:'blur'}],
      }
    }
  },
  methods: {
    onSubmit(){
      console.log("submit",this.loginForm.remember,this.loginForm.password,this.loginForm.username)
    }
  }
})
</script>

<template>
  <el-form :model="loginForm" label-width="80px" v-bind:rules="rules">
    <el-form-item label="登陆系统">
    </el-form-item>
    <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username" autocomplete="off"/>
    </el-form-item>
    <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password" autocomplete="off"/>
    </el-form-item>
    <el-form-item label="记住我">
      <el-switch v-model="loginForm.remember"></el-switch>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">登陆</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped>

</style>