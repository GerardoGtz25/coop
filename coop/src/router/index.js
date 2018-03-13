import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import connexion from '@/components/connexion'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/connexion',
      component: connexion
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/test',
      component: test
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})
