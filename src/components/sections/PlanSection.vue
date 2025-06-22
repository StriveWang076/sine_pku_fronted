<script setup lang="ts">
import { researchPlan } from '../../data/researchPlan'
</script>

<template>
  <div class="section-content">
    <!-- 頁面標題區域 -->
    <div class="section-header">
      <h1 class="section-title">📋 研究計劃</h1>
      <p class="section-subtitle">未來發展規劃</p>
    </div>
    
    <!-- 內容網格 -->
    <div class="content-grid">
      <!-- 短期目標卡片 -->
      <div class="card short-term">
        <h3>短期目標 (1-2年)</h3>
        <ul>
          <li v-for="goal in researchPlan.shortTerm" :key="goal">{{ goal }}</li>
        </ul>
      </div>
      
      <!-- 長期目標卡片 -->
      <div class="card long-term">
        <h3>長期目標 (3-5年)</h3>
        <ul>
          <li v-for="goal in researchPlan.longTerm" :key="goal">{{ goal }}</li>
        </ul>
      </div>
      
      <!-- 具體目標卡片 -->
      <div class="card specific-goals">
        <h3>具體目標</h3>
        <ul>
          <li v-for="goal in researchPlan.specificGoals" :key="goal">{{ goal }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '../../styles/ResearchShowcase.css';
</style> 