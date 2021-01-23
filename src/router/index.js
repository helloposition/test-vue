import Vue from 'vue'
import Router from 'vue-router'
import Patient from '@/pages/patient'
import Work from '@/pages/work'
import Find from '@/pages/find'
import Mine from '@/pages/mine'
// import UseHelp from '@/pages/useHelp'
// 路由懒加载
const UseHelp =()=>import('@/pages/useHelp')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Patient
    },
    {
      path: '/work',
      component: Work
    },
    {
      path: '/find',
      component: Find
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '/useHelp',
      component: UseHelp
    }
  ]
})
