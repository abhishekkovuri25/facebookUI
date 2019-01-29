import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Upload from '@/components/Upload'

Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(axios)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/post',
      name: 'Upload',
      component: Upload
    }
  ]
})
