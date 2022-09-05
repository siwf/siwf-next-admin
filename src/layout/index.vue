<!--
 * @Description: 
 * @Date: 2022-09-03 17:53:48
 * @LastEditors: siwenfeng
 * @LastEditTime: 2022-09-05 10:54:13
-->
<template>
  <component :is="components.get(themeConfig.layout)" />
</template>

<script lang="ts" setup>
import {
  onBeforeMount,
  onUnmounted,
  getCurrentInstance,
  ref,
  defineAsyncComponent
} from 'vue'
import { storeToRefs } from 'pinia'
import { useThemeConfig } from '@/stores/themeConfig'
import { Local } from '@/utils/storage'

const { proxy } = getCurrentInstance() as any
const storesThemeConfig = useThemeConfig()
const { themeConfig } = storeToRefs(storesThemeConfig)

const components = ref(new Map<string, any>())
components.value.set(
  'defaults',
  defineAsyncComponent(() => import('@/layout/main/defaults.vue'))
)
components.value.set(
  'columns',
  defineAsyncComponent(() => import('@/layout/main/columns.vue'))
)
components.value.set(
  'classic',
  defineAsyncComponent(() => import('@/layout/main/classic.vue'))
)
components.value.set(
  'transverse',
  defineAsyncComponent(() => import('@/layout/main/transverse.vue'))
)
// 窗口大小改变时(适配移动端)
const onLayoutResize = () => {
  if (!Local.get('oldLayout')) Local.set('oldLayout', themeConfig.value.layout)
  const clientWidth = document.body.clientWidth
  if (clientWidth < 1000) {
    themeConfig.value.isCollapse = false
    proxy.mittBus.emit('layoutMobileResize', {
      layout: 'defaults',
      clientWidth
    })
  } else {
    proxy.mittBus.emit('layoutMobileResize', {
      layout: Local.get('oldLayout')
        ? Local.get('oldLayout')
        : themeConfig.value.layout,
      clientWidth
    })
  }
}
// 页面加载前
onBeforeMount(() => {
  onLayoutResize()
  window.addEventListener('resize', onLayoutResize)
})
// 页面卸载时
onUnmounted(() => {
  window.removeEventListener('resize', onLayoutResize)
})
</script>
