<template>
  <tab-bar>
    <tab-bar-item path="/home">
    <!--path把"/home"当做字符串传入path，到TabBarItem-->
      <!--      activeColor动态传入处于热点时改变的颜色-->
      <img slot="item-icon" src="~assets/img/tabbar/首页-不选中.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/首页-选中.png" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/分类-不选中.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/分类-选中.png" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/购物车-不选中.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/购物车-选中.png" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <TabBarItem path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/我的-不选中.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/我的-选中.png" alt="">
      <div slot="item-text">我的</div>
    </TabBarItem>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar"
import TabBarItem from "components/common/tabbar/TabBarItem"
export default {
  name: "MainTabBar",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
