/*
 * @Description:
 * @Date: 2022-09-03 15:34:43
 * @LastEditors: siwenfeng
 * @LastEditTime: 2022-09-03 16:50:54
 */
import vue from '@vitejs/plugin-vue'
import viteEslint from 'vite-plugin-eslint'
import { resolve } from 'path'
import { defineConfig, loadEnv, ConfigEnv } from 'vite'

const pathResolve = (dir: string): string => {
  return resolve(__dirname, '.', dir)
}
const alias: Record<string, string> = {
  '@': pathResolve('./src/')
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: { alias },
  plugins: [
    vue(),
    viteEslint({
      failOnError: false
    })
  ]
})
