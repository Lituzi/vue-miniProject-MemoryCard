import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import MemoryPage from '@/components/MemoryPage'
import AddNewPage from '@/components/AddNewPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MemoryPage',
      component: MemoryPage
    },
    {
      path: '/addNewPage',
      name: 'AddNewPage',
      component: AddNewPage
    }
  ]
})
