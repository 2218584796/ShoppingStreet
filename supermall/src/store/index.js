import Vue from 'vue'
import Vuex from 'vuex'

//1.安装插件
Vue.use(Vuex)

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
//2.创建store对象
const store = new Vuex.Store({
  state:{
    cartList:[]
  },
  mutations,
  actions,
  getters
})

//3.挂在vue实例上
export default store

let a = 12;
let b = a
b=13
console.log(a)
