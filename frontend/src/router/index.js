import Vue from 'vue'
import Router from 'vue-router'
import Gallery01 from '@/components/gallery/gallery01'
import Gallery_Upload01 from '@/components/gallery/upload01'
import Splash from '@/components/skeleton/insertSplash'

Vue.use(Router)

export default new Router({
 // mode: 'history',
  routes: [
    {
      path: '/gallery01',
      name: 'gallery_section_01',
      component: Gallery01
    },
    {
      path: '/gallery01/upload01',
      name: 'gallery_section_01',
      component: Gallery_Upload01
    },    
    {
      path: '/test',
      name: 'gallery_section_01',
      component: Splash
    }
  ]
})
