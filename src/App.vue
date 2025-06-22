<script setup lang="ts">
// 導入 composable
import { useNavigation } from '@/composables/useNavigation'
// 導入組件
import { NavigationBar, ResearchShowcase } from '@/components'

// 使用導航邏輯
const { currentSection, switchSection } = useNavigation()
</script>

<template>
  <!-- 應用程式根容器 -->
  <div id="app">
    <!-- 導航欄組件：固定在頁面頂部，提供頁面切換功能 -->
    <NavigationBar 
      :current-section="currentSection" 
      @sectionChange="switchSection" 
    />
    
    <!-- 主要內容區域：根據當前選中的部分顯示對應內容 -->
    <main class="main-content">
      <ResearchShowcase :current-section="currentSection" />
    </main>
  </div>
</template>

<style scoped>
/* 應用程式根容器樣式 */
#app {
  /* 確保容器至少佔滿整個視窗高度 */
  min-height: 100vh;
  /* 漸層背景：從藍色到紫色的漸變效果 */
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  /* 字體設定：優先使用微軟雅黑，支援中文顯示 */
  font-family: var(--font-family-primary);
}

/* 主要內容區域樣式 */
.main-content {
  /* 為固定導航欄留出空間，避免內容被遮擋 */
  padding-top: 80px;
  /* 確保內容區域至少佔滿剩餘視窗高度 */
  min-height: calc(100vh - 80px);
}
</style>
