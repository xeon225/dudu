// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './cmui.css'

Vue.config.productionTip = false

import common from './assets/common.js';
Vue.prototype.common = common
Vue.config.productionTip = false;

import Lazyload from "vue-lazyload-img"
Vue.use(Lazyload,{
    // 默认false， 推荐true
    fade: true,
    // 推荐不写这项，现在手机都很快了，加了这项，图片加载速度会变慢
    // 这个选项会拖慢图片加载速度
    // 但是如果你打开这个选项，能节省流量，因为只有页面停止20ms之后，才开始加载图片
    // speed: 20, 
    // 默认300ms, 个人觉得没必要修改，可以不填
    time: 300,
    // 默认0px，竖直方向预加载图片，体验更好
    preload: 10,
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
