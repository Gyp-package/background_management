<template>
  <div id="app">
    <!-- <el-switch
  v-model="value"
  active-color="#13ce66"
  inactive-color="#ff4949">
    </el-switch> -->
    <router-view></router-view>
  </div>
</template>
 
<script>
 
export default {

  data() {
      return {
        value: true
      }
  }
}
</script>
<style lang="less"  >
  *{
    margin: 0;
    padding: 0;
  }
</style>