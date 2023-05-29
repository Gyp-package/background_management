import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Main from "../views/Main.vue";
import Mall from "../views/Mall.vue";
import PageOne from "../views/PageOne.vue";
import PageTwo from "../views/PageTwo.vue";
import Login from "../views/Login.vue"

Vue.use(VueRouter);
// 1.创建路由（创建页面）
// 2.映射路由与组件
const routes = [
  {
    path: "/",
    component: Main,
    name:'Main',
    // 重定向
    redirect:'/home',
    children: [
      // 子路由
      // { path: "/home", name:'home',component: Home },
      // { path: "/user", name:'user',component: User },
      // { path: "/mall", name:'mall',component: Mall },
      // { path: "/page1", name:'page1',component: PageOne },
      // { path: "/page2", name:'page2',component: PageTwo },
    ],
  },
  // 登录路由
  {
    path:'/login',
    name:'login',
    component:Login,

  }

];
// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
});
// 4.暴露
export default router;
// 5.挂载根结点,main中
