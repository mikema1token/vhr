import Vue from 'vue'
import VueRouter from 'vue-router'
import loginVue from "@/views/login.vue";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: loginVue
  },
]

const router = new VueRouter({
  routes
})

export default router
