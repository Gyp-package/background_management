import Vue from 'vue'
import App from './App.vue'
// 全局引入
import ElementUI  from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from './router'

import store from './store'
import './api/mock'
import Cookie from 'js-cookie'

// 按需引入
// import {Switch} from 'element-ui';
// import {Container} from 'element-ui';


Vue.config.productionTip = false

// 全局引入
Vue.use(ElementUI);

// 按需引入
// Vue.use(Switch);
// Vue.use(Container);

// 添加全局前置导航守卫
router.beforeEach((to,from,next)=>{
  const token = Cookie.get('token')
  if(!token && to.name!=='login'){
    next({name:'login'})
  }else if(token && to.name==='login'){
    next({name:'home'})
  }else{
    next()
  }
})


new Vue({
  // 5.挂载根结点,全局配置
  router,
  store,
  render: h => h(App),
  created(){
    store.commit('addMenu',router)
  }
}).$mount('#app')





