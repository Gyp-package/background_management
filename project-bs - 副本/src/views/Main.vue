<template>
  <div id="app">
  <el-container>
    <el-aside width="auto">
      <commin-aside></commin-aside>
    </el-aside>
    <el-container>
      <el-header>
        <common-header>
      </common-header>
    </el-header>
      <common-tag></common-tag>
      <el-main>
         <!-- 路由匹配组件 -->
         <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
  </div>
</template>

<script>
// 引入侧边栏
import ComminAside from '@/components/ComminAside.vue';
import CommonHeader from '@/components/CommonHeader.vue';
import CommonTag from '../components/CommonTag.vue';
export default {
    //  data(){

    //  },
     components:{
      ComminAside,
      CommonHeader,
      CommonTag,
      
     }

}
</script>

<style long="less" scoped>
  .el-header{
    padding: 0;
  }
</style>