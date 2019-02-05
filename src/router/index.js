import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/Login'
import Profile from '@/pages/Profile'
import Home from '@/pages/Home'
import Search from '@/components/Search'
import OthersProfile from '@/pages/OthersProfile'

Vue.use(BootstrapVue)
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Search/:qname',
      name: 'Search',
      component: Search
    },
    {
      path: '/othersprofile/:userId',
      name: 'OthersProfile',
      component: OthersProfile
    }
  ]
})
