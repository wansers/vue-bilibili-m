import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Animation from 'components/animation/animation'
import Search from 'components/search/search'
import Fanju from 'components/fanju/fanju'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/animation',
      component: Animation
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/fanju',
      component: Fanju
    }
  ]
})
