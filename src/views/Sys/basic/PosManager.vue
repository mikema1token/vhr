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
      axios.post("http://localhost:8080/user/add-pos",{name:this.posTitle},{}).then(
          (response)=>{
            if (response.data.code==="ok"){
              this.getPosList()
            }else{
              this.$message.error(response.data.msg)
            }
          },
          (response)=>{
            this.$message.error(response.data)
          }
      )
    },
    DeletePos(row){

    }
  }
})
</script>

<template>
  <div>
    <div>
      <el-input v-model="posTitle" placeholder=""></el-input>
      <el-button @click="AddPos">添加</el-button>
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
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
              <el-button type="text" size="small">修改</el-button>
              <el-button type="text" size="small" @click="DeletePos()">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>

</template>

<style scoped>

</style>