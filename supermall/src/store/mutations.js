export default {
  //mutations唯一的目的就是修改state中的状态
  //mutations中的每个方法完成的事件尽量单一一点

  addCounter(state,payload){
    payload.count++
  },
  addToCart(state,payload){
    payload.checked = true
    state.cartList.push(payload)
  }
}
