import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

const Index = ()=> import('../pages/index/index')
const Login = ()=> import('../pages/login/login')

Vue.use(Router)

export default new Router({
  routes: [
    {         
      path: '/', //首页
      name: 'Index',
      component: Index
    },
    {         
      path: '/login', //登录
      name: 'Login',
      component: Login
    }
  ]
})
