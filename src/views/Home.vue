<script>
import axios from "axios";

export default {
  name: "Home",
  data(){
    return {
      user:JSON.parse(window.sessionStorage.getItem("user"))
    }
  },
  methods: {
    handleCommand(command){
      if (command!="logout"){
        return
      }
      axios.post("http://localhost:8080/logout",{},{}).then(response=>{
        this.$message.info("exit")
      }).catch(err=>{
        this.$message.error(err)
      })
    }
  }
}
</script>

<template>
  <el-container>
    <el-header class="homeHeader">
      <div class="title">微人事</div>
      <el-dropdown class="dropDown" @command="handleCommand">
          <span class="el-dropdown-link">
            {{user.username}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="nothing">个人中心</el-dropdown-item>
            <el-dropdown-item command="nothing">设置</el-dropdown-item>
            <el-dropdown-item command="logout">注销登录</el-dropdown-item>
          </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<style>
  .homeHeader{
    background-color: #590b0b;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 15px;
    box-sizing: border-box;
  }

  .title{
    font-size: 30px;
    font-family: "Microsoft JhengHei";
    color: #354a72;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }

  .dropDown{
    cursor: pointer;
    display: flex;
    justify-content: right;
  }
</style>