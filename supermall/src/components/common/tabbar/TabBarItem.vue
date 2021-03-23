<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
name: "TabBarItem",
  props:{
    path:String, // 接收path为字符串形式
    activeColor:{
      type:String,
      default:'#ff5777'
    }
  },
  data(){
  return {
    // isActive:true
  }
  },
  computed:{
  isActive(){
    // /home -> item1(/home) = true
    // /home -> item1(/category) = false
    // /home -> item1(/cart) = false
    // /home -> item1(/profile) = false
    //计算属性，动态决定isActive是true还是false，来改变下面导航谁处于热点
    return this.$route.path.indexOf(this.path) !== -1
  },
    activeStyle(){
    //判断当前位置是否活跃，如果活跃就添加color，不活跃添加空（默认颜色）
    return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods:{
  itemClick(){
    this.$router.replace(this.path) // 点击哪一个跳转到哪一个
  }
  }
}
</script>

<style scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img{
  width: 20px;
  height: 20px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
/*.active{*/
/*  color: pink;*/
/*}*/
</style>
