// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../theme/index.css'
import ElementUI from 'element-ui'
import './assets/font/style.css'

Vue.config.productionTip = false

Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  if(to.path === '/') {
    next();
    return
  }
  if(sessionStorage.getItem('isLogin') === '1') {
    next()
  } else {
    next({path:'/'})
  }
   
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
