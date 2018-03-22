import 'babel-polyfill'
import 'lib-flexible'
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
import router from './router'
import VueLazyload from 'vue-lazyload'

// Vue.config.productionTip = false

fastclick.attach(document.body)
let userAgent = window.navigator.userAgent
if(userAgent.indexOf('NET') != -1){
  Vue.directive('lazy', (el, binding) => {
    el.src = binding.value
  })
}else{
  Vue.use(VueLazyload, {
    loading: require('common/images/default.png')
  })
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
