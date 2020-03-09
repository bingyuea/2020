import HelloWorld from '@/components/HelloWorld'
import about from '@/components/about'
import Router from './index'
import Vue from 'vue'

Vue.use(Router)
export default new Router({
  routers:[
    {
      path:'/',
      component: HelloWorld
    },
    {
      path:'/about',
      component: about
    }
  ],
  name:'111111'
})

