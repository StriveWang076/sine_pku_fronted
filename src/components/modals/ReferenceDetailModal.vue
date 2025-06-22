<script setup lang="ts">
import type { Reference } from '@/types'

interface Props {
  reference: Reference | null
  show: boolean
}

interface Emits {
  (e: 'close'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

// 複製 DOI 到剪貼簿
const copyDOI = async (doi: string) => {
  try {
    await navigator.clipboard.writeText(doi)
    // 這裡可以添加一個提示訊息
  } catch (err) {
    console.error('複製失敗:', err)
  }
}

// 開啟 DOI 連結
const openDOI = (doi: string) => {
  window.open(`https://doi.org/${doi}`, '_blank')
}

// 關閉 Modal
const closeModal = () => {
  emit('close')
}

// 阻止 Modal 背景點擊事件冒泡
const handleModalClick = (event: Event) => {
  event.stopPropagation()
}
</script>

<template>
  <div v-if="show" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click="handleModalClick">
      <div class="modal-header">
        <h2 class="modal-title">📚 參考文獻詳情</h2>
        <button class="modal-close" @click="closeModal">×</button>
      </div>
      
      <div v-if="reference" class="modal-body">
        <div class="detail-section">
          <h3 class="detail-title">{{ reference.title }}</h3>
          <div class="detail-authors">{{ reference.authors }}</div>
          
          <div class="detail-meta">
            <div class="meta-item">
              <span class="meta-label">期刊/會議：</span>
              <span class="meta-value">{{ reference.journal || '未指定' }}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">發表年份：</span>
              <span class="meta-value">{{ reference.year }}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">類別：</span>
              <span class="meta-value category-tag" :class="`category-${reference.category}`">
                {{ 
                  reference.category === 'research' ? '研究文獻' :
                  reference.category === 'methodology' ? '方法論' :
                  reference.category === 'background' ? '背景知識' : '相關研究'
                }}
              </span>
            </div>
            <div v-if="reference.doi" class="meta-item">
              <span class="meta-label">DOI：</span>
              <span class="meta-value doi-link">{{ reference.doi }}</span>
            </div>
          </div>
          
          <!-- 摘要 -->
          <div v-if="reference.abstract" class="detail-section-item">
            <h4 class="section-item-title">
              <span class="section-icon">📝</span>
              摘要
            </h4>
            <p class="section-item-content">{{ reference.abstract }}</p>
          </div>
          
          <!-- 背景 -->
          <div v-if="reference.background" class="detail-section-item">
            <h4 class="section-item-title">
              <span class="section-icon">🌍</span>
              背景
            </h4>
            <p class="section-item-content">{{ reference.background }}</p>
          </div>
          
          <!-- 動機 -->
          <div v-if="reference.motivation" class="detail-section-item">
            <h4 class="section-item-title">
              <span class="section-icon">💡</span>
              動機
            </h4>
            <p class="section-item-content">{{ reference.motivation }}</p>
          </div>
          
          <!-- 方法 -->
          <div v-if="reference.methodology" class="detail-section-item">
            <h4 class="section-item-title">
              <span class="section-icon">⚙️</span>
              方法
            </h4>
            <p class="section-item-content">{{ reference.methodology }}</p>
          </div>
          
          <!-- 效益 -->
          <div v-if="reference.benefits" class="detail-section-item">
            <h4 class="section-item-title">
              <span class="section-icon">🎯</span>
              效益
            </h4>
            <p class="section-item-content">{{ reference.benefits }}</p>
          </div>
          
          <div v-if="reference.keywords && reference.keywords.length > 0" class="detail-keywords">
            <h4>關鍵詞</h4>
            <div class="keywords-list">
              <span v-for="keyword in reference.keywords" :key="keyword" class="keyword-tag">
                {{ keyword }}
              </span>
            </div>
          </div>
          
          <div v-if="reference.citations" class="detail-citations">
            <h4>引用次數</h4>
            <p>{{ reference.citations }} 次</p>
          </div>
        </div>
      </div>
      
      <div class="modal-footer">
        <button
          v-if="reference?.doi"
          class="modal-btn primary-btn"
          @click="openDOI(reference.doi!)"
        >
          📄 查看原文
        </button>
        <button
          v-if="reference?.doi"
          class="modal-btn secondary-btn"
          @click="copyDOI(reference.doi!)"
        >
          📋 複製 DOI
        </button>
        <button class="modal-btn close-btn" @click="closeModal">
          關閉
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '../../styles/ReferenceDetailModal.css';
</style> 