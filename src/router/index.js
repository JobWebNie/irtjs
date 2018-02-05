import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import technologyMain from '@/components/technologyMain'
import Mainindexfour from '@/components/index/indexboxfour'
import zhuanjiaMain from '@/components/zhuanjiaMain'
import technicalDetails from '@/components/technicalDetails'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/shouye',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/jishu',
      props: true,
      // name: 'technologyMain',
      component: technologyMain
    },
    {
      path: '/zhuanjia',
      name: 'zhuanjiaMain',
      component: zhuanjiaMain
    },
    {
      path: '/technicalDetails/:id',
      name: 'technicalDetails',
      component: technicalDetails
    }
  ]
})
