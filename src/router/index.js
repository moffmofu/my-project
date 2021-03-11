import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Output from '@/components/Output'
import Top from '@/components/Top'

Vue.use(Router)

export default new Router({
  routes: [
    /*
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    */
    {
      path: '/',
      name: 'top',
      component: Top
    },
    {
      path: '/outputs',
      name: 'Output', // ここの名前を変えても何も起きない。なんなんだろう
      component: Output
    }
  ]
})
