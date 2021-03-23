<template>
  <div class="bottom-bar">
    <div class="check-content">
      <CheckButton :is-checked="isSelectAll"
                   class="check-button"
                   @click.native="checkClick"/>
      <span>全选</span>
    </div>

    <div class="price">
      合计:¥{{totalPrice}}
    </div>

    <div class="calculate" @click="calculateClick">
      去结算({{checkLength}})
    </div>
  </div>
</template>

<script>
  import CheckButton from "components/content/checkButton/CheckButton";
  import {mapGetters} from 'vuex'
  import {itemListenerMixin} from "../../../common/mixin";
    export default {
        name: "CartBottomBar",
      components:{
        CheckButton
      },
      computed:{
          ...mapGetters(['cartList']),
        totalPrice(){
          return this.$store.state.cartList.filter(item => {
            return item.checked
          }).reduce((preValue,item) => {
            return preValue + item.price * item.count
          },0).toFixed(2)
        },
        checkLength(){
          return this.$store.state.cartList.filter(item => item.checked).length
        },
        isSelectAll(){
          // return !(this.cartList.filter(item => !item.checked).length)
          if (this.cartList.length === 0) return false
          // return !this.cartList.find(item => !item.checked)
          for (let item of this.cartList){
            if (!item.checked){
              return false
            }
          }
          return true
        }
      },
      methods:{
        checkClick(){
          if (this.isSelectAll){ // 全部选中
            this.cartList.forEach(item => item.checked = false)
          }else {
            this.cartList.forEach(item => item.checked = true)
          }
        },
        calculateClick(){
          if (!this.isSelectAll){
            this.$toast.show('请选择购买的商品',1500)
          }
        }
      }
    }
</script>

<style scoped>
  .bottom-bar{
    height: 40px;
    background-color: #F5F5F5;
    position: relative;
    line-height: 40px;
    display: flex;
  }
  .check-content{
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 70px;
  }
  .check-button{
    width: 22px;
    height: 22px;
    line-height: 22px;
    padding: 2px 0 0 2px;
    margin-right: 5px;
  }
  .price{
    margin-left: 20px;
    flex: 1;
  }
  .calculate{
    width: 85px;
    height: 40px;
    background-color: #FF4500;
    color: #ffffff;
    text-align: center;
  }
</style>
