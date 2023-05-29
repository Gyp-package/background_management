<template>
  <div class="header-container">
    <div class="l-content">
      <el-button
        style="margin-right: 20px"
        icon="el-icon-menu"
        size="mini"
        @click="handleMenu"
      ></el-button>
      <!-- 面包屑区域 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="item in tags"
          :key="item.path"
          :to="{ path: item.path }"
          >{{ item.label }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown @command="handleClick">
        <span class="el-dropdown-link">
          <img src="../assets/images/user.png" alt="用户头像" class="user" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item command="cancel">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Cookie from "js-cookie";
import { computed } from "vue";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    handleMenu() {
      this.$store.commit("collapseMenu");
    },
    handleClick(command) {
      if (command === "cancel") {
        console.log("登出");
        // 清除cookie中的token
        Cookie.remove("token");
        // 清除cookie中的menu
        Cookie.remove("menu");
        // 跳到登录页面
        this.$router.push("/login");
      }
    },
  },
  computed: {
    // 解构赋值
    ...mapState({
      tags: (state) => state.tab.tabsList,
    }),
  },
};
</script>

<style lang="less" scoped>
.header-container {
  padding: 0 20px;
  background-color: #333;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .text {
    font-size: 14px;
    color: #fff;
    margin-left: 10px;
  }
  .r-content {
    .user {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
  .l-content {
    display: flex;
    align-items: center;
    // vue项目中如果无“div身份”，则需要加个/deep/
    /deep/.el-breadcrumb__item {
      .el-breadcrumb__inner {
        &.is-link {
          font-weight: normal;
          color: #666;
        }
      }
      &:last-child {
        .el-breadcrumb__inner {
          color: #fff;
        }
      }
    }
  }
}
span.el-tag.el-tag--small.el-tag--plain {
  margin: 10px;
}
</style>