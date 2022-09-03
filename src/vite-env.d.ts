/*
 * @Description:
 * @Date: 2022-09-03 15:34:43
 * @LastEditors: siwenfeng
 * @LastEditTime: 2022-09-03 21:22:30
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 声明文件，定义全局变量。其它 app.config.globalProperties.xxx，使用 getCurrentInstance() 来获取
interface Window {
  nextLoading: boolean
}
