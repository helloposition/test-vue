// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 样式初始化
import 'reset-css'
// rem适配
import 'amfe-flexible'
//移动端有300毫秒的延迟问题引入的插件fastclick
import fastClick from 'fastclick'
fastClick.attach(document.body)
//引入轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
// mint-ui
// import Button from 'mint-ui'
// Vue.use(Button)
// import Mint from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(Mint)
// 按需引入
import{ Tabbar, TabItem,Search,Cell} from 'mint-ui'
Vue.component(Tabbar.name,Tabbar)
Vue.component(TabItem.name,TabItem)
Vue.component(Search.name, Search)
Vue.component(Cell.name, Cell)
// 修改tabbar的字体大小
import '../src/common/css/setAll.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
