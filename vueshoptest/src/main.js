import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/base2.css'
// 引入vant
import Vant from 'vant'
import 'vant/lib/index.css'
// import VConsole from 'vconsole'

//移动端适配处理
import './common/rem'
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
