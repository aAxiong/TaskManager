import Vue from 'vue'
import Router from 'vue-router'
import Layouts from '@/components/layouts'
import menus from '@/components/menus'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layouts',
      component: Layouts
    }
  ]
})
