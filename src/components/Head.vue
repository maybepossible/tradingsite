<template>
  <div class="header">
    <div class="left">
      <img
        src="@/assets/images/logo.png "
        alt="这是logo图片，正在加载中，请稍等"
      />
    </div>
    <div class="right">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect"
      >
        <el-menu-item index="1">登录/注册</el-menu-item>
        <el-menu-item index="2">个人中心</el-menu-item>
        <el-menu-item index="3">发布信息</el-menu-item>
        <el-menu-item index="4">意见反馈</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 'a'
    }
  }
}
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}
.header {
  width: 100%;
  height: 100px;
  background-color: #fff;
  .left {
    float: left;
    width: 50%;
    height: 100%;
    img {
      width: 100px;
      height: 100px;
      margin: 0 15%;
    }
  }
  .right {
    float: left;
    width: 50%;
    height: 100%;
    .el-menu {
      height: 100%;
      .el-menu-item {
        width: 20%;
      }
    }
  }
}
</style>
