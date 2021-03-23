import Vue from 'vue'
import App from "./App"
import router from "./router"
import store from "./store";
import toast from "components/common/toast/index"
import fastClick from "fastclick"
import VueLazyLoad from "vue-lazyload"

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

//安装toast插件
Vue.use(toast)

//解决移动端300毫秒延迟
fastClick.attach(document.body)

//使用懒加载插件
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/home/lazyload.png')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
