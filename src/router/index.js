import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import FoodDetails from '@/components/FoodDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/foodDetails/:id',
      name: 'foodDetails',
      component: FoodDetails
    },
  ]
})
