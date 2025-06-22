<script setup lang="ts">
// 導入子組件
import ResearchSection from './sections/ResearchSection.vue'
import BackgroundSection from './sections/BackgroundSection.vue'
import MotivationSection from './sections/MotivationSection.vue'
import PlanSection from './sections/PlanSection.vue'
import ContactSection from './sections/ContactSection.vue'
import ReferencesSection from './sections/ReferencesSection.vue'
import type { SectionType } from '@/types'

// 組件屬性介面定義
interface Props {
  currentSection: SectionType // 當前選中的頁面部分
}

// 接收父組件傳遞的屬性
const props = defineProps<Props>()
</script>

<template>
  <!-- 展示容器：包含所有頁面內容 -->
  <div class="showcase-container">
    <!-- 研究展示頁面 -->
    <ResearchSection v-if="props.currentSection === 'research'" />
    
    <!-- 學術背景頁面 -->
    <BackgroundSection v-if="props.currentSection === 'background'" />
    
    <!-- 申請動機頁面 -->
    <MotivationSection v-if="props.currentSection === 'motivation'" />
    
    <!-- 研究計劃頁面 -->
    <PlanSection v-if="props.currentSection === 'plan'" />
    
    <!-- 參考文獻頁面 -->
    <ReferencesSection v-if="props.currentSection === 'references'" />
    
    <!-- 聯絡資訊頁面 -->
    <ContactSection v-if="props.currentSection === 'contact'" />
  </div>
</template>

<style scoped>
/* 展示容器主樣式 */
.showcase-container {
  max-width: 1200px; /* 最大寬度限制 */
  margin: 0 auto; /* 水平居中 */
  padding: 40px 20px; /* 上下左右內邊距 */
}

/* 移動端響應式設計 */
@media (max-width: 768px) {
  /* 調整容器內邊距 */
  .showcase-container {
    padding: 20px 15px;
  }
}
</style> 