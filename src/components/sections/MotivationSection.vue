<script setup lang="ts">
import { motivation } from '../../data/motivation'
</script>

<template>
  <div class="section-content">
    <!-- 頁面標題區域 -->
    <div class="section-header">
      <h1 class="section-title">🎯 申請動機</h1>
      <p class="section-subtitle">為什麼選擇北京大學</p>
    </div>
    
    <!-- 內容網格 -->
    <div class="content-grid">
      <!-- 個人興趣卡片 -->
      <div class="card personal-motivation">
        <h3>個人興趣</h3>
        <p>{{ motivation.personal }}</p>
      </div>
      
      <!-- 學術追求卡片 -->
      <div class="card academic-motivation">
        <h3>學術追求</h3>
        <p>{{ motivation.academic }}</p>
      </div>
      
      <!-- 職業規劃卡片 -->
      <div class="card career-motivation">
        <h3>職業規劃</h3>
        <p>{{ motivation.career }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '../../styles/ResearchShowcase.css';
</style> 