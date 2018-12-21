import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Years from '@/components/years'
import Phones from '@/components/phones'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Years',
      component: Years
    },
    {
      path: '/phones',
      name: 'Phones',
      component: Phones
    }
  ]
})
