<script setup lang="ts">
// 導入 Vue 3 的響應式 API
import { ref, computed } from 'vue'
import type { SectionType } from '@/types'

// 組件屬性介面定義
interface Props {
  currentSection?: SectionType // 當前選中的頁面部分
}

// 設定組件屬性，提供預設值
const props = withDefaults(defineProps<Props>(), {
  currentSection: 'research' // 預設顯示研究展示部分
})

// 定義組件事件
const emit = defineEmits<{
  sectionChange: [section: SectionType] // 頁面切換事件，傳遞新的部分名稱
}>()

// 導航選項配置：定義所有可用的頁面部分
const sections = [
  { id: 'research' as SectionType, name: '研究展示', icon: '🔬' },    // 研究展示頁面
  { id: 'background' as SectionType, name: '學術背景', icon: '📚' },  // 學術背景頁面
  { id: 'motivation' as SectionType, name: '申請動機', icon: '🎯' },  // 申請動機頁面
  { id: 'plan' as SectionType, name: '研究計劃', icon: '📋' },        // 研究計劃頁面
  { id: 'references' as SectionType, name: '參考文獻', icon: '📚' },  // 參考文獻頁面
  { id: 'contact' as SectionType, name: '聯絡資訊', icon: '📧' }      // 聯絡資訊頁面
]

// 移動端選單開關狀態
const isMenuOpen = ref(false)

// 計算當前選中項目的索引
const currentIndex = computed(() => {
  return sections.findIndex(section => section.id === props.currentSection)
})

/**
 * 切換頁面部分的處理函數
 * @param section 要切換到的部分ID
 */
const changeSection = (section: SectionType) => {
  // 觸發頁面切換事件
  emit('sectionChange', section)
  // 在移動端切換後自動關閉選單
  if (isMenuOpen.value) {
    setTimeout(() => {
      isMenuOpen.value = false
    }, 300) // 等待動畫完成後關閉
  }
}

/**
 * 切換移動端選單
 */
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <!-- 導航欄容器：固定在頁面頂部 -->
  <nav class="navigation-bar">
    <div class="nav-container">
      <!-- 品牌標識區域 -->
      <div class="nav-brand">
        <div class="pku-logo">
          <!-- 北京大學縮寫 -->
          <span class="pku-text">PKU</span>
          <!-- 申請類型標識 -->
          <span class="gradient-text">碩士申請</span>
        </div>
      </div>
      
      <!-- 導航選單：桌面端顯示完整選單，移動端可收縮 -->
      <div 
        class="nav-menu" 
        :class="{ 'nav-menu-open': isMenuOpen }"
        :data-active="currentIndex"
      >
        <!-- 動態生成導航選項 -->
        <button
          v-for="section in sections"
          :key="section.id"
          class="nav-item"
          :class="{ 
            'nav-item-active': props.currentSection === section.id,
            'nav-item-animate': props.currentSection === section.id
          }"
          @click="changeSection(section.id)"
        >
          <!-- 選項圖標 -->
          <span class="nav-icon">{{ section.icon }}</span>
          <!-- 選項文字 -->
          <span class="nav-text">{{ section.name }}</span>
          <!-- 活動指示器 -->
          <div class="nav-indicator" v-if="props.currentSection === section.id"></div>
        </button>
      </div>
      
      <!-- 移動端選單按鈕：只在移動端顯示 -->
      <button class="mobile-menu-btn" @click="toggleMenu" :class="{ 'menu-btn-active': isMenuOpen }">
        <!-- 漢堡選單圖標 -->
        <span class="hamburger" :class="{ 'hamburger-open': isMenuOpen }"></span>
      </button>
    </div>
  </nav>
</template>

<style scoped>
/* 導航欄主容器樣式 */
.navigation-bar {
  position: fixed; /* 固定在頁面頂部 */
  top: 0;
  left: 0;
  right: 0;
  /* 半透明背景配合模糊效果 */
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px); /* 背景模糊效果 */
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 1000; /* 確保在其他元素之上 */
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1); /* 陰影效果 */
}

/* 導航欄內容容器 */
.nav-container {
  max-width: 1200px; /* 最大寬度限制 */
  margin: 0 auto; /* 水平居中 */
  padding: 0 20px; /* 左右內邊距 */
  display: flex;
  align-items: center;
  justify-content: space-between; /* 品牌和選單分別靠左靠右 */
  height: 80px; /* 固定高度 */
}

/* 品牌標識區域 */
.nav-brand {
  display: flex;
  align-items: center;
}

/* 北京大學標識容器 */
.pku-logo {
  display: flex;
  align-items: center;
  gap: 8px; /* 元素間距 */
}

/* 北京大學縮寫文字樣式 */
.pku-text {
  font-size: 24px;
  font-weight: bold;
  color: #1e3a8a;
  /* 漸層文字效果 */
  background: linear-gradient(135deg, #1e3a8a, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 申請類型文字樣式 */
.gradient-text {
  font-size: 18px;
  font-weight: 600;
  color: #6b7280;
}

/* 導航選單容器 */
.nav-menu {
  display: flex;
  gap: 8px; /* 選項間距 */
  position: relative;
}

/* 滑動背景條 */
.nav-menu::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  border-radius: 12px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
  opacity: 0.1;
}

/* 根據當前選中項目調整背景條位置 */
.nav-menu[data-active="0"]::before {
  width: calc(100% / 6);
  left: 0;
}

.nav-menu[data-active="1"]::before {
  width: calc(100% / 6);
  left: calc(100% / 6);
}

.nav-menu[data-active="2"]::before {
  width: calc(100% / 6);
  left: calc(200% / 6);
}

.nav-menu[data-active="3"]::before {
  width: calc(100% / 6);
  left: calc(300% / 6);
}

.nav-menu[data-active="4"]::before {
  width: calc(100% / 6);
  left: calc(400% / 6);
}

.nav-menu[data-active="5"]::before {
  width: calc(100% / 6);
  left: calc(500% / 6);
}

/* 導航選項按鈕樣式 */
.nav-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border: none;
  background: transparent;
  border-radius: 12px; /* 圓角 */
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); /* 更流暢的過渡動畫 */
  font-size: 14px;
  font-weight: 500;
  color: #6b7280;
  position: relative;
  overflow: hidden;
  border: 2px solid transparent;
}

/* 滑動背景效果 */
.nav-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}

/* 選項懸停效果 */
.nav-item:hover {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
  transform: translateY(-2px); /* 輕微上移效果 */
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
  border-color: rgba(59, 130, 246, 0.3);
}

.nav-item:hover::before {
  left: 0;
}

/* 當前選中選項的樣式 */
.nav-item-active {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white !important;
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
  transform: translateY(-3px);
  border-color: rgba(255, 255, 255, 0.3);
  font-weight: 600;
  position: relative;
}

.nav-item-active::before {
  left: 0;
}

/* 選中狀態的底部邊框 */
.nav-item-active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 3px;
  background: linear-gradient(90deg, #ffffff, #e0e7ff);
  border-radius: 2px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  animation: glowPulse 2s ease-in-out infinite;
}

@keyframes glowPulse {
  0%, 100% {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  }
}

/* 選中狀態下的圖標和文字樣式 */
.nav-item-active .nav-icon {
  color: white;
  transform: scale(1.1);
  filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.5));
}

.nav-item-active .nav-text {
  color: white;
  transform: translateX(0);
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
}

/* 選項動畫效果 */
.nav-item-animate {
  animation: navItemPulse 0.6s ease-out;
}

@keyframes navItemPulse {
  0% {
    transform: translateY(-3px) scale(1);
  }
  50% {
    transform: translateY(-3px) scale(1.05);
  }
  100% {
    transform: translateY(-3px) scale(1);
  }
}

/* 活動指示器 */
.nav-indicator {
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 4px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 2px;
  animation: indicatorSlide 0.4s ease-out;
  box-shadow: 0 2px 8px rgba(255, 255, 255, 0.3);
}

@keyframes indicatorSlide {
  from {
    width: 0;
    opacity: 0;
    transform: translateX(-50%) scaleX(0);
  }
  to {
    width: 24px;
    opacity: 1;
    transform: translateX(-50%) scaleX(1);
  }
}

/* 選項圖標樣式 */
.nav-icon {
  font-size: 16px;
  transition: transform 0.3s ease;
}

.nav-item:hover .nav-icon {
  transform: scale(1.1);
}

/* 選項文字樣式 */
.nav-text {
  white-space: nowrap; /* 防止文字換行 */
  transition: transform 0.3s ease;
}

.nav-item:hover .nav-text {
  transform: translateX(2px);
}

/* 移動端選單按鈕：預設隱藏 */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.mobile-menu-btn:hover {
  background: rgba(59, 130, 246, 0.1);
}

.menu-btn-active {
  background: rgba(59, 130, 246, 0.15);
}

/* 漢堡選單圖標樣式 */
.hamburger {
  width: 24px;
  height: 2px;
  background: #6b7280;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  border-radius: 1px;
}

/* 漢堡選單的上下線條 */
.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background: #6b7280;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 1px;
}

/* 上線條位置 */
.hamburger::before {
  top: -8px;
}

/* 下線條位置 */
.hamburger::after {
  bottom: -8px;
}

/* 選單開啟時的漢堡圖標樣式 */
.hamburger-open {
  background: transparent; /* 中間線條消失 */
}

/* 選單開啟時上線條變為 X 的上半部分 */
.hamburger-open::before {
  top: 0;
  transform: rotate(45deg);
  background: #3b82f6;
}

/* 選單開啟時下線條變為 X 的下半部分 */
.hamburger-open::after {
  bottom: 0;
  transform: rotate(-45deg);
  background: #3b82f6;
}

/* 移動端響應式設計 */
@media (max-width: 768px) {
  /* 移動端選單樣式 */
  .nav-menu {
    position: absolute; /* 絕對定位 */
    top: 80px; /* 位於導航欄下方 */
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(15px);
    flex-direction: column; /* 垂直排列 */
    padding: 20px;
    gap: 12px;
    /* 初始狀態：隱藏並向上移動 */
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
  
  /* 選單開啟時的狀態 */
  .nav-menu-open {
    transform: translateY(0); /* 回到原位 */
    opacity: 1;
    visibility: visible;
  }
  
  /* 顯示移動端選單按鈕 */
  .mobile-menu-btn {
    display: flex;
  }
  
  /* 隱藏選項文字，只顯示圖標 */
  .nav-text {
    display: none;
  }
  
  /* 調整選項按鈕樣式 */
  .nav-item {
    justify-content: center;
    padding: 16px;
    border-radius: 8px;
  }
  
  /* 移動端選項動畫 */
  .nav-item {
    opacity: 0;
    transform: translateX(-20px);
    transition: all 0.3s ease;
  }
  
  .nav-menu-open .nav-item {
    opacity: 1;
    transform: translateX(0);
  }
  
  /* 為每個選項添加延遲動畫 */
  .nav-menu-open .nav-item:nth-child(1) { transition-delay: 0.1s; }
  .nav-menu-open .nav-item:nth-child(2) { transition-delay: 0.2s; }
  .nav-menu-open .nav-item:nth-child(3) { transition-delay: 0.3s; }
  .nav-menu-open .nav-item:nth-child(4) { transition-delay: 0.4s; }
  .nav-menu-open .nav-item:nth-child(5) { transition-delay: 0.5s; }
  .nav-menu-open .nav-item:nth-child(6) { transition-delay: 0.6s; }
  
  /* 移動端選中效果 */
  .nav-item-active {
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    color: white !important;
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
    transform: translateY(-2px);
    border-color: rgba(255, 255, 255, 0.3);
    font-weight: 600;
  }
  
  .nav-item-active .nav-icon {
    color: white;
    transform: scale(1.2);
    filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.5));
  }
  
  /* 隱藏活動指示器 */
  .nav-indicator {
    display: none;
  }
  
  /* 隱藏底部邊框，因為移動端空間有限 */
  .nav-item-active::after {
    display: none;
  }
  
  /* 隱藏滑動背景條 */
  .nav-menu::before {
    display: none;
  }
}

/* 平板端響應式設計 */
@media (min-width: 769px) and (max-width: 1024px) {
  .nav-container {
    padding: 0 16px;
  }
  
  .nav-item {
    padding: 10px 12px;
    font-size: 13px;
  }
  
  .nav-text {
    font-size: 13px;
  }
}
</style> 