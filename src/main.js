import Vue from 'vue'
import App from './App'
import {router} from './router/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'

Vue.use(ElementUI)


new Vue({
  el: '#app',
  store,
  router,
  // ...App
  render: h => h(App),
  // data: {
  //   currentPageName: ''
  // },
  // mounted () {
  // 	this.currentPageName = this.$route.name
  // }
})
