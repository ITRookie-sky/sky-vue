// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
/*import axios from 'axios'
Vue.prototype.axios=axios*/
import $ from 'webpack-zepto'
Vue.prototype.ajax=$.ajax;
import router from './router'
import './assets/css/ui.css'
import './assets/css/iconfont.css'
Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App  }
})
