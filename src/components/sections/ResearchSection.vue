<script setup lang="ts">
import { researchData } from '../../data/researchData'
</script>

<template>
  <div class="section-content">
    <!-- 頁面標題區域 -->
    <div class="section-header">
      <h1 class="section-title">🔬 研究展示</h1>
      <p class="section-subtitle">基於深度學習的語音信號處理研究</p>
    </div>
    
    <!-- 內容網格：使用響應式佈局 -->
    <div class="content-grid">
      <!-- 研究概述卡片 -->
      <div class="card research-overview">
        <h3>研究概述</h3>
        <p>{{ researchData.abstract }}</p>
        <!-- 關鍵字標籤 -->
        <div class="keywords">
          <span v-for="keyword in researchData.keywords" :key="keyword" class="keyword-tag">
            {{ keyword }}
          </span>
        </div>
      </div>
      
      <!-- 研究方法卡片 -->
      <div class="card methodology">
        <h3>研究方法</h3>
        <ul>
          <li v-for="method in researchData.methodology" :key="method">{{ method }}</li>
        </ul>
      </div>
      
      <!-- 研究成果卡片 -->
      <div class="card results">
        <h3>研究成果</h3>
        <ul>
          <li v-for="result in researchData.results" :key="result">{{ result }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '@/styles/ResearchShowcase.css';
</style> 