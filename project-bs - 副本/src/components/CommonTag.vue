<template>
  <div class="tag">
    <el-tag
      v-for="(item, index) in tags"
      :key="item.path"
      :closable="item.name !== 'home'"
      :effect="$route.name === item.name ? 'dark' : 'plain'"
      @click="changeMenu(item)"
      @close="handleClose(item, index)"
      size="small"
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  // name:'CommonTag',
  // data(){

  // },
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabsList,
    }),
  },
  methods: {
    ...mapMutations(["closeTag"]),
    // 点击tag跳转
    changeMenu(item) {
      this.$router.push({ name: item.name });
    },
    // 点击tag删除内容，需要获取索引，最后一个总是高光
    handleClose(item, index) {
      // 获取tag中的mutation方法
      // this.$store.commit('closeTag',item)
      //上面结构 等同于
      this.closeTag(item);
      const length = this.tags.length - 1;
      // 删除之后逻辑
       if(item.name !== this.$route.name){
        return 
       }
      //  删除最后一项,索引向前1步
      if(index === length) {
        this.$route.push({
          name:this.tags[index-1].name
        })
      }
      // 从中间删除，索引向后一步
      else{
        this.$router.push({
          name:this.tags[index].name
        })
      }
    },
  },
  mounted() {
    console.log(this.$route.name, this.tags);
  },
};
</script>

<style lang="less" scoped>
  .tabs {
    padding: 20px;
    .el-tag {
        margin-right: 15px;
        cursor: pointer;
    }
}
</style>