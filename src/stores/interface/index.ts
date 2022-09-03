/*
 * @Description:
 * @Date: 2022-09-03 19:47:53
 * @LastEditors: siwenfeng
 * @LastEditTime: 2022-09-03 22:11:39
 */
export interface UserInfosState {
  authBtnList: string[]
  photo: string
  roles: string[]
  time: number
  userName: string
}
export interface UserInfosStates {
  userInfos: UserInfosState
}

// 路由列表
export interface RoutesListState {
  routesList: string[]
  isColumnsMenuHover: Boolean
  isColumnsNavHover: Boolean
}
// 后端返回原始路由(未处理时)
export interface RequestOldRoutesState {
  requestOldRoutes: string[]
}
