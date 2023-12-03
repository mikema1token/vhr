<script>
import {defineComponent} from 'vue'
import axios from "axios";
export default defineComponent({
  name: "PosManager",
  data() {
    return {
      tableData: [],
      posTitle: '',
      dialogVisible:false,
      id: 0,
      input:"",
      multiSelect: []
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
    DeletePos(index){
        axios.post("http://localhost:8080/user/delete-pos",{id:this.tableData[index].id},{}).then(
            (response)=>{
                if (response.data.code!=="ok"){
                  this.$message.error(response.data.data)
                }else{
                  this.getPosList()
                }
            },
            (response)=>{
                this.$message.error(response.data)
            }
        )
    },
    OpenDialog(index){
      this.dialogVisible = true
      this.id = this.tableData[index].id
    },
    UpdatePos(){
        axios.post("http://localhost:8080/user/update-pos",{
          id:this.id,
          name:this.input
        },{}).then((r)=>{if(r.data.code==='ok'){
          this.getPosList()
          this.dialogVisible = false
        }})
    },
    MultiSelect(rows){
      console.log(rows)
      this.multiSelect = rows
    },
    BatchDelete(){
      let ids = []
      for (const r of this.multiSelect) {
        ids.push(r.id)
      }
      axios.post("http://localhost:8080/user/delete-pos2",ids,{}).then(
          (r)=>{
            if (r.data.code==="ok"){
              this.getPosList()
            }else{
              this.$message.info(r.data)
            }
          }
      )
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
          style="width: 50%"
          @selection-change="MultiSelect">
        <el-table-column type="selection" width="55">
        </el-table-column>
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
              <el-button type="text" size="small" @click="OpenDialog(scope.$index)">修改</el-button>
              <el-button type="text" size="small" @click="DeletePos(scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <el-dialog
          title="提示"
          :visible.sync="dialogVisible"
          width="30%">
        <el-input v-model="input" placeholder="请输入修改后的职位名称"></el-input>
        <span slot="footer" class="dialog-footer">
    <el-button @click="()=>{this.dialogVisible=false,this.id=0}">取 消</el-button>
    <el-button type="primary" @click="UpdatePos">确 定</el-button>
  </span>
      </el-dialog>
    </div>
    <div>
      <el-button @click="BatchDelete">批量删除</el-button>
    </div>
  </div>

</template>

<style scoped>

</style>