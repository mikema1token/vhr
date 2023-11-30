<script>
import {defineComponent} from 'vue'
import axios from "axios";
export default defineComponent({
  name: "PosManager",
  data() {
    return {
      tableData: [],
      posTitle: ''
    }
  },
  mounted() {
    this.getPosList()
  },
  methods:{
    getPosList(){
      axios.get("http://localhost:8080/user/list-pos",{}).then(
         response=>{
           if (response.status===200){
             if (response.data.code==="ok"){
               this.tableData = response.data.data
             }else{
               this.$message.error(response.data.msg)
             }
           }else{
             this.$message.error(response.data)
           }
         }
      ).catch(
          (err)=>{
            this.$message(err)
          }
      )
    },
    AddPos(){
    }
  }
})
</script>

<template>
  <div>
    <div>
      <el-input v-model="posTitle" placeholder=""></el-input>
      <el-button>添加</el-button>
    </div>
    <div>
      <el-table
          :data="tableData"
          style="width: 50%">
        <el-table-column
            prop="id"
            label="编号"
            width="100">
        </el-table-column>
        <el-table-column
            prop="name"
            label="职称"
            width="100">
        </el-table-column>
        <el-table-column
            prop="createDate"
            label="日期"
            width="200">
        </el-table-column>
      </el-table>
    </div>
  </div>

</template>

<style scoped>

</style>