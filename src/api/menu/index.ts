/*
 * @Description:
 * @Date: 2022-09-03 22:08:23
 * @LastEditors: siwenfeng
 * @LastEditTime: 2022-09-04 19:33:11
 */
import request from '@/utils/request'
import adminMenu from './admin'

/**
 * 后端控制菜单模拟json，路径在 https://gitee.com/lyt-top/vue-next-admin-images/tree/master/menu
 * 后端控制路由，isRequestRoutes 为 true，则开启后端控制路由
 * @method getMenuAdmin 获取后端动态路由菜单(admin)
 * @method getMenuTest 获取后端动态路由菜单(test)
 */
export function useMenuApi() {
  return {
    // params?: object
    getMenuAdmin: () => {
      // return request({
      //   url: '/gitee/lyt-top/vue-next-admin-images/raw/master/menu/adminMenu.json',
      //   method: 'get',
      //   params
      // })
      return adminMenu
    },
    getMenuTest: (params?: object) => {
      return request({
        url: '/gitee/lyt-top/vue-next-admin-images/raw/master/menu/testMenu.json',
        method: 'get',
        params
      })
    }
  }
}
