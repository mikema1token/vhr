import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from '@/store/index'

Vue.config.productionTip = false
Vue.use(ElementUI)
router.beforeEach((to,from,next)=>{
  if (to.path==='/'){
    next()
  }else{
    let user = window.sessionStorage.getItem("user")
    if (user===null){
      next('/')
    }else{
      next()
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
