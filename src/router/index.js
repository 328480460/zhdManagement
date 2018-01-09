import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Home from '@/components/homepage/Home'
import Production from './production.js';
import Node from './node.js';
import Settings from './settings.js';
import Trace from './trace.js';
import Business from './business.js';
import Document from './document.js';
import Quality from './quality.js';
Vue.use(Router)

export default new Router({
  routes: [ 
    // 登录页
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    // home页
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        ...Production,
        ...Node,
        ...Settings,
        ...Trace,
        ...Business,
        ...Document,
        ...Quality
      ]
    }

  ]
})
