import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Users from '@/components/AllUserPage'
import User from '@/components/UsersPage'
import SignUp from '@/components/login/SignUp'
import imgUpload from '@/components/imgupload'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/user',
      name: 'user',
      component: Users
    },
    {
      path: '/user/:id',
      name: 'detail',
      component: User
    },
    {
      path: '/login/SignUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/test',
      name: 'imgUpload',
      component: imgUpload
    }
  ]
})
