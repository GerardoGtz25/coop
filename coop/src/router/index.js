import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import connexion from '@/components/connexion'
import conversation from '@/components/conversation'

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
      path: '/conversation',
      component: conversation
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})
