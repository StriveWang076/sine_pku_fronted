/// <reference types="vite/client" />

// Vue 組件類型聲明
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
