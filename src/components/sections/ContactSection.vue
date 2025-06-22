<script setup lang="ts">
import { contactInfo } from '../../data/contactInfo'
</script>

<template>
  <div class="section-content">
    <!-- 頁面標題區域 -->
    <div class="section-header">
      <h1 class="section-title">📧 聯絡資訊</h1>
      <p class="section-subtitle">歡迎聯繫交流</p>
    </div>
    
    <!-- 內容網格 -->
    <div class="content-grid">
      <!-- 基本資訊卡片 -->
      <div class="card contact-info">
        <h3>基本資訊</h3>
        <div class="contact-item">
          <span class="contact-label">姓名：</span>
          <span>{{ contactInfo.name }}</span>
        </div>
        <div class="contact-item">
          <span class="contact-label">電子郵件：</span>
          <a :href="`mailto:${contactInfo.email}`">{{ contactInfo.email }}</a>
        </div>
        <div class="contact-item">
          <span class="contact-label">電話：</span>
          <a :href="`tel:${contactInfo.phone}`">{{ contactInfo.phone }}</a>
        </div>
        <div class="contact-item">
          <span class="contact-label">地址：</span>
          <span>{{ contactInfo.address }}</span>
        </div>
      </div>
      
      <!-- 社交媒體卡片 -->
      <div class="card social-links">
        <h3>社交媒體</h3>
        <div class="contact-item">
          <span class="contact-label">LinkedIn：</span>
          <a :href="`https://${contactInfo.linkedin}`" target="_blank">{{ contactInfo.linkedin }}</a>
        </div>
        <div class="contact-item">
          <span class="contact-label">GitHub：</span>
          <a :href="`https://${contactInfo.github}`" target="_blank">{{ contactInfo.github }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '../../styles/ResearchShowcase.css';
</style> 