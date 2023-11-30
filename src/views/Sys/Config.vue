<script>
import {defineComponent} from 'vue'
import ConfigComponent from './basic/ConfigComponent.vue'
import PosManager from "@/views/Sys/basic/PosManager.vue";
export default defineComponent({
  name: "config",
  data(){
    return {
      activeName: 'first'
    }
  },
  components:{
    PosManager,
   ConfigComponent
  }
})
</script>

<template>
  <el-tabs v-model="activeName" type="card">
    <el-tab-pane label="部门管理" name="first">
      <ConfigComponent></ConfigComponent>
    </el-tab-pane>
    <el-tab-pane label="职位管理" name="second">
      <PosManager></PosManager>
    </el-tab-pane>
    <el-tab-pane label="职称管理" name="third"></el-tab-pane>
    <el-tab-pane label="奖惩规则" name="fourth"></el-tab-pane>
    <el-tab-pane label="权限组" name="five"></el-tab-pane>
  </el-tabs>
</template>

<style scoped>

</style>