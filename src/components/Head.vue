<template>
  <div class="wrap">
    <img
      class="logo"
      src="@/assets/images/logo.jpg"
      alt="正在加载logo图片，请稍等"
    />
    <span>欢迎来到二手交易平台</span>
  </div>
  <div class="userList">
    <v-if>
      <el-menu-item index="0">LOGO</el-menu-item>
    </v-if>
    <v-else>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
      >
        <el-menu-item index="0">LOGO</el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">个人中心</el-menu-item>
        <el-menu-item index="3">发布信息</el-menu-item>
        <el-menu-item index="4">我的订单</el-menu-item>
        <el-menu-item index="5">意见反馈</el-menu-item>
      </el-menu>
    </v-else>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.wrap {
  width: 100%;
  height: 100px;
  img {
    height: 100px;
  }
}
</style>
