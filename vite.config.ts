/*
 * @Description:
 * @Date: 2022-09-03 15:34:43
 * @LastEditors: siwenfeng
 * @LastEditTime: 2022-09-03 15:48:57
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteEslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteEslint({
      failOnError: false
    })
  ]
})
