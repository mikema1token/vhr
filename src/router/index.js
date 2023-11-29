import Vue from 'vue'
import VueRouter from 'vue-router'
import loginVue from "@/views/login.vue";
import EmpBasic from "@/views/Emp/EmpBasic.vue";
import Home from "@/views/Home.vue";
import EmpAdv from "@/views/Emp/EmpAdv.vue";
import PerEmp from "@/views/Per/PerEmp.vue"
import PerEc from "@/views/Per/PerEc.vue";
import PerTrain from "@/views/Per/PerTrain.vue";
import PerSalary from "@/views/Per/PerSalary.vue";
import PerMv from "@/views/Per/PerMv.vue";
import SalarySob from "@/views/Sal/SalarySob.vue";
import SalaryCfg from "@/views/Sal/SalaryCfg.vue";
import SalaryTable from "@/views/Sal/SalaryTable.vue";
import SalaryMonth from "@/views/Sal/SalaryMonth.vue";
import SalarySearch from "@/views/Sal/SalarySearch.vue";
import StaAll from "@/views/Sat/StaAll.vue";
import StaScore from "@/views/Sat/StaScore.vue";
import StaPerson from "@/views/Sat/StaPerson.vue";
import StaRecord from "@/views/Sat/StaRecord.vue";
import manager from "@/views/Sys/manager.vue";
import log from "@/views/Sys/log.vue";
import Operator from "@/views/Sys/Operator.vue";
import Recovery from "@/views/Sys/Recovery.vue";
import Init from "@/views/Sys/Init.vue";
import Config from "@/views/Sys/Config.vue";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: loginVue,
    hidden:true
  },
  {
    path:'/home',
    name:'员工资料',
    component: Home,
    children: [
      {
        name:"基本资料",
        path:'/home/emp/basic',
        component: EmpBasic
      },
      {
        name:"高级资料",
        path:"/home/emp/advance",
        component: EmpAdv
      }
    ]
  },
  {
    path:'/home',
    name:'人事管理',
    component: Home,
    children: [
      {
        name:"员工的资料",
        path:'/home/per/emp',
        component: PerEmp
      },
      {
        name:"员工奖惩",
        path:'/home/per/ec',
        component: PerEc
      },
      {
        name:"员工培训",
        path:'/home/per/train',
        component: PerTrain
      },
      {
        name:"员工调薪",
        path:'/home/per/salary',
        component: PerSalary
      },
      {
        name:"员工调动",
        path:'/home/per/mv',
        component: PerMv
      }
    ]
  },
  {
    path:'/home',
    name:'薪资管理',
    component: Home,
    children: [
      {
        name:"工资账套",
        path:'/home/sal/sob',
        component: SalarySob
      },
      {
        name:"账套设置",
        path:'/home/sal/cfg',
        component:SalaryCfg
      },
      {
        name:"工资表管理",
        path:'/home/sal/table',
        component: SalaryTable
      },
      {
        name:"月末处理",
        path:'/home/sal/month',
        component: SalaryMonth
      },
      {
        name:"工资表查询",
        path:'/home/sal/search',
        component: SalarySearch
      }
    ]
  },
  {
    path:'/home',
    name:'统计管理',
    component: Home,
    children:[
      {
        name:"综合信息统计",
        path: "/home/statistics/all",
        component: StaAll
      },
      {
        name:"积分统计",
        path:"/home/statistics/score",
        component: StaScore
      },
      {
        name:"人事信息统计",
        path:"/home/statistics/person",
        component: StaPerson
      },
      {
        name:"人事记录统计",
        path:"/home/statistics/record",
        component: StaRecord
      }
    ]
  },
  {
    path:'/home',
    name:'系统管理',
    component: Home,
    children: [
      {
        name:"基础信息设置",
        path:'/home/system/config',
        component: Config
      },
      {
        name:"系统的管理",
        path:'/home/system/manager',
        component: manager
      },
      {
        name:"操作日志",
        path:'/home/system/log',
        component: log
      },
      {
        name:"操作员管理",
        path:'/home/system/operator',
        component: Operator
      },
      {
        name:"恢复数据",
        path:'/home/system/recovery',
        component: Recovery
      },
      {
        name:"初始化数据",
        path:'/home/system/init',
        component:Init
      }
    ]
  }
]

const router = new VueRouter({
  routes
})



export default router
