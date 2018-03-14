import Vue from 'vue'
import Router from 'vue-router'
import inscription from '@/components/inscription'
import connexion from '@/components/connexion'
import membres from '@/components/membres'
import channels from '@/components/channels'
import messages from '@/components/message'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/connexion',
      component: connexion
    },
    {
      path: '/inscription',
      component: inscription
    },
    {
      path: '/channels',
      component: channels
    },
    {
      path: '/conversation/:id',
      name: 'conversation',
      component: messages
    },
    {
      path: '/membres',
      component: membres
    },
    {
      path: '*',
      redirect: '/channels'
    }
  ]
})
