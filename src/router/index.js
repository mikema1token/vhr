import Vue from 'vue'
import VueRouter from 'vue-router'
import loginVue from "@/views/login.vue";
import Test1 from "@/views/Test1.vue";
import Home from "@/views/Home.vue";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: loginVue
  },
  {
    path:'/home',
    name:'home',
    component: Home
  },
  {
    path:'/home',
    name:'home',
    component: Home
  },
  {
    path:'/home',
    name:'home',
    component: Home,
    children: [
      {
        path:"/test1",
        name:'test1',
        component: Test1
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
