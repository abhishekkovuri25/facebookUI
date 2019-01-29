import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import HelloWorld from '@/components/HelloWorld'
import Header from '@/components/header'
import Posts from '@/components/posts'
import Myprofile from '@/components/myprofile'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/myprofile',
      name: 'Myprofile',
      component: Myprofile
    }
  ]
})
