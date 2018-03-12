import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import connexion from '@/components/connexion'

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
      path: '*',
      redirect: '/index'
    }
  ]
})
