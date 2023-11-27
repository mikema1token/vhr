import Vue from 'vue'
import VueRouter from 'vue-router'
import loginVue from "@/views/login.vue";
import Test1 from "@/views/Test1.vue";
import Home from "@/views/Home.vue";
import home from "@/views/Home.vue";
import Test2 from "@/views/Test2.vue";
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
    name:'home',
    component: Home,
    children: [
      {
        name:"test1",
        path:'/home/test1',
        component: Test1
      },
      {
        name:"test2",
        path:"/home/test2",
        component: Test2
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
