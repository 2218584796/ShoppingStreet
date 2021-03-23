<template>
  <div class="cart">
<!--    导航-->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>

<!--    商品列表-->
    <cart-list></cart-list>
<!--    底部汇总-->
    <cart-bottom-bar/>
  </div>
</template>

<script>
  import NavBar from "components/common/nvabar/NavBar";
  import CartList from "./childComps/CartList";
  import CartBottomBar from "./childComps/CartBottomBar";

  import {mapGetters} from 'vuex'

export default {
  name: "cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed:{
    // cartLength(){
    //   return this.$store.getters.cartLength
    // }
    //两种语法：
    // ...mapGetters(['cartLength'])
    ...mapGetters({
      length:'cartLength'
    })
  }
}
</script>

<style scoped>
.nav-bar{
  background-color: var(--color-tint);
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
}
  .cart{
    height: 100vh;
  }
</style>
