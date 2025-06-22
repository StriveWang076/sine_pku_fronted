<script setup lang="ts">
import { academicBackground } from '../../data/academicBackground'
</script>

<template>
  <div class="section-content">
    <!-- 頁面標題區域 -->
    <div class="section-header">
      <h1 class="section-title">📚 學術背景</h1>
      <p class="section-subtitle">教育經歷與研究經驗</p>
    </div>
    
    <!-- 內容網格 -->
    <div class="content-grid">
      <!-- 教育背景卡片 -->
      <div class="card education">
        <h3>教育背景</h3>
        <div v-for="edu in academicBackground.education" :key="edu.degree" class="education-item">
          <h4>{{ edu.degree }} - {{ edu.major }}</h4>
          <p>{{ edu.university }} | {{ edu.year }}</p>
          <p class="gpa">GPA: {{ edu.gpa }}</p>
        </div>
      </div>
      
      <!-- 研究經驗卡片 -->
      <div class="card experience">
        <h3>研究經驗</h3>
        <div v-for="exp in academicBackground.researchExperience" :key="exp.title" class="experience-item">
          <h4>{{ exp.title }}</h4>
          <p class="institution">{{ exp.institution }} | {{ exp.duration }}</p>
          <p>{{ exp.description }}</p>
        </div>
      </div>
      
      <!-- 發表論文卡片 -->
      <div class="card publications">
        <h3>發表論文</h3>
        <div v-for="pub in academicBackground.publications" :key="pub.title" class="publication-item">
          <h4>{{ pub.title }}</h4>
          <p v-if="pub.journal">{{ pub.journal }} | {{ pub.year }}</p>
          <p v-if="pub.conference">{{ pub.conference }} | {{ pub.year }}</p>
          <span class="status">{{ pub.status }}</span>
        </div>
      </div>
      
      <!-- 技能專長卡片 -->
      <div class="card skills">
        <h3>技能專長</h3>
        <div v-for="skillGroup in academicBackground.skills" :key="skillGroup.category" class="skill-group">
          <h4>{{ skillGroup.category }}</h4>
          <div class="skill-tags">
            <span v-for="skill in skillGroup.items" :key="skill" class="skill-tag">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '../../styles/ResearchShowcase.css';
</style> 