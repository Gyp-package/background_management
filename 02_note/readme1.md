<!-- element-ui -->

package.json 包含项目的配置文件
devDependencies 开发依赖
dependencies 项目依赖
node_modules 项目依赖文件
npm run serve 打包所有 vue 成静态资源到本地开发服务器
npm run build 命令用于编译和打包您的应用程序,生成 dist 文件夹

cli
main.js 入口文件
全局引入
按需引入,注意配置 babel.config.js

<!-- 路由 -->

引入 vue 以及 vuerouter 以及全局注册，
模块化使用 vue-router:
index 中创建路由，映射以及创建 router 实例，暴露
main.js 中挂载根节点

<!-- 嵌套路由 -->

views 装载路由
components 装载组件,
需要引入组件 import,实例化 component 以及使用做标签

<!-- 布局菜单搭建 -->

i 标签，图标 icon
数据 data 中放入 icon：'不带 el-icon'
图标放入 <i class="图标名称">
动态拼接<i :class="`el-icon-${item.icon}`"></i>

使用 css 样式需要遵守 less 格式
下载 less 以及 less-loader

组件中添加 data 数据，包含路径名称，
views 中配置相关路由
注意 index.js 中引入路由并与组件进行映射

路由跳转由于根节点挂载了 vue 实例，可以直接使用 this.$router.push（item.path）跳转

vuex 的引入：共享组件
js 中共享数据，index 创建并暴露 vuex 实例 store,挂载到根节点 main.js

<!-- axios：接口请求,需要封装 -->
基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中
promise:结局回调地狱，fetch then 一层一层 使用异步函数
catch 捕捉错误，finally 结束动作
async functionf(){标记为 异步函数 ，}其中 await 等待 promise 完成后返回最终结果
await 基于 promise 和事件循环机制实现

utils 封装 axios 请求
api 封装接口

<!-- mock.js: -->
不依赖后端，在前端自己模拟后端接口，拦截 ajax 请求，生成随机数据，

<!-- echars:图表制作，需要显示高度 -->
npm i echarts
home.vue 中的 mounted 中获取 DOM，

div的ref="echarts1"
script中
init初始化，
指定数据项配置，data.data
echarts2Option配置数据xAxis,yAxis以及series

面包屑功能：
1.默认有首页  
2.点击已有属性会添加到面包屑
3.点击已有菜单不会重复添加
style lang="lang" scoped中  /deep/ 子组件中的标签也会继承这个样式。
伪类&:last-child  

tag ：vux组件间共享，使用数据贡共享，store集中管理数据

用户管理：
添加新增表单内容，   elementui实现弹窗
根据姓名搜索信息
编辑，删除信息数据
分页切换显示

<!-- form表单 -->
校验  rules 对象 props 需要校验的对象  
必填校验require:true  message提示信息
user.js填写mock数据，mock.js 管理mock模拟的后台数据，index.js定义前端相关的api（注意post(data),get（params）传参）

编辑时需要深拷贝，保护源数据

<!-- 登录权限 -->
tooken用户权限，登录时返回后端一个接口，后端给出tooken放在请求头中（cookie保存），然后带着token前往服务器请求进行验证，
cookie set,get,remove