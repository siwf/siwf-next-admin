/*
 * @Description:
 * @Date: 2022-09-03 15:34:43
 * @LastEditors: siwenfeng
 * @LastEditTime: 2022-09-03 19:58:48
 */
import vue from '@vitejs/plugin-vue'
import viteEslint from 'vite-plugin-eslint'
import { resolve } from 'path'
import { defineConfig, loadEnv, ConfigEnv } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'

const pathResolve = (dir: string): string => {
  return resolve(__dirname, '.', dir)
}
const alias: Record<string, string> = {
  '@': pathResolve('src')
}

// https://vitejs.dev/config/
export default defineConfig((mode: ConfigEnv) => {
  const env = loadEnv(mode.mode, process.cwd())
  return {
    resolve: { alias },
    plugins: [
      vue(),
      viteEslint({
        failOnError: false
      }),
      visualizer()
    ],
    root: process.cwd(),
    base: mode.command === 'serve' ? './' : env.VITE_PUBLIC_PATH,
    hmr: true,
    optimizeDeps: {
      include: [
        'element-plus/lib/locale/lang/zh-cn',
        'element-plus/lib/locale/lang/en',
        'element-plus/lib/locale/lang/zh-tw'
      ]
    },
    server: {
      host: '0.0.0.0',
      port: env.VITE_PORT as unknown as number,
      open: env.VITE_OPEN,
      proxy: {
        '/gitee': {
          target: 'https://gitee.com',
          ws: true,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/gitee/, '')
        }
      }
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        output: {
          entryFileNames: `assets/[name].${new Date().getTime()}.js`,
          chunkFileNames: `assets/[name].${new Date().getTime()}.js`,
          assetFileNames: `assets/[name].${new Date().getTime()}.[ext]`,
          compact: true,
          manualChunks: {
            vue: ['vue', 'vue-router', 'pinia']
            // echarts: ['echarts']
          }
        }
      }
    }
  }
})
