<script>
import {defineComponent} from 'vue'
import axios from "axios";

export default defineComponent({
  name: "loginVue",
  data(){
    return {
      loginForm:{
        username: 'admin',
        password: 'admin123',
        remember: false
      },
      rules:{
        username:[{required: true,message: '请输入用户名', trigger:'blur'}],
        password:[{required:true,min:3,max:8, message:'长度在3到8字符', trigger:'blur'}],
      }
    }
  },
  methods: {
    onSubmit(formName){
      this.$refs[formName].validate((valid)=>{
        if (valid){
          axios.post("http://localhost:8080/login",{"username":this.loginForm.username,"password":this.loginForm.password}).then(
              response=>{
                window.sessionStorage.setItem("user",JSON.stringify(response.data))
                this.$router.replace("/home")
              }
          ).catch(error=>{
            alert(error)
          })
        }else{
          alert('请先输入用户名和密码')
          return false
        }
      })
    }
  }
})
</script>

<template>
  <el-form :model="loginForm" label-width="80px" v-bind:rules="rules" class="loginContainer" ref="LoginForm">
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
      <el-button type="primary" @click="onSubmit('LoginForm')">登陆</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<style>
  .loginContainer{
    border-radius: 10px;
    backgroud-clip: content-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: rgb(255, 255, 255);
    border: 1px solid #354a72;
    //box-shadow: 0 0 25px #590b0b;
  }
</style>