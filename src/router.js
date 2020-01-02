import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faHeart, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import New from './views/New.vue'
import Popular from './views/Popular.vue'
import Discussion from './views/Discussion.vue'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

library.add(faPlus, faHeart, faEllipsisH)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'new',
      component: New
    },
    {
      path: '/popular',
      name: 'popular',
      component: Popular
    },
    {
      path: '/discussion',
      redirect: { name: 'new' }
    },
    {
      path: '/discussion/:id',
      name: 'discussion',
      component: Discussion
    }
  ]
})
