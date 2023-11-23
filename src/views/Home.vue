<script>
export default {
  name: "Home",
  data(){
    return {
      // user:JSON.parse(window.sessionStorage.getItem("user"))
      user:window.sessionStorage.getItem("user")
    }
  }
}
</script>

<template>
  <el-container>
    <el-header class="homeHeader">
      <div class="title">微人事</div>
      <el-dropdown class="dropDown">
          <span class="el-dropdown-link">
            {{user}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item>注销登录</el-dropdown-item>
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
  }
</style>