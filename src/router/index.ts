/*
 * @Description:
 * @Date: 2022-09-03 17:40:02
 * @LastEditors: siwenfeng
 * @LastEditTime: 2022-09-03 21:10:16
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import { dynamicRoutes, staticRoutes } from '@/router/route'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import pinia from '@/stores/index'
import { storeToRefs } from 'pinia'
import { Session } from '@/utils/storage'
import { useRoutesList } from '@/stores/routesList'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: staticRoutes
})

// 路由加载前
router.beforeEach(async (to, from, next) => {
  // eslint-disable-next-line no-debugger
  // debugger
  NProgress.configure({ showSpinner: false })
  if (to.meta.title) NProgress.start()
  const token = Session.get('token')
  if (to.path === '/login' && !token) {
    next()
    NProgress.done()
  } else {
    if (!token) {
      next(
        `/login?redirect=${to.path}&params=${JSON.stringify(
          to.query ? to.query : to.params
        )}`
      )
      Session.clear()
      NProgress.done()
    } else if (token && to.path === '/login') {
      next('/home')
      NProgress.done()
    } else {
      const storesRoutesList = useRoutesList(pinia)
      const { routesList } = storeToRefs(storesRoutesList)
      if (routesList.value.length === 0) {
        next({ ...to, replace: true })
      } else {
        next()
      }
    }
  }
})

// 路由加载后
router.afterEach(() => {
  NProgress.done()
})

export default router
