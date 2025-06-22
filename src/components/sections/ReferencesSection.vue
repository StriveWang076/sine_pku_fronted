<script setup lang="ts">
import { ref, computed } from 'vue'
import { references, referenceStats } from '@/data'
import type { Reference } from '@/types'
import ReferenceDetailModal from '../modals/ReferenceDetailModal.vue'

// 當前選中的類別
const selectedCategory = ref<'all' | 'research' | 'methodology' | 'background' | 'related'>('all')

// Modal 相關狀態
const showModal = ref(false)
const selectedReference = ref<Reference | null>(null)

// 類別選項
const categories = [
  { id: 'all' as const, label: '全部文獻', count: referenceStats.total, icon: '📚' },
  { id: 'research' as const, label: '研究文獻', count: referenceStats.byCategory.research, icon: '🔬' },
  { id: 'methodology' as const, label: '方法論', count: referenceStats.byCategory.methodology, icon: '⚙️' },
  { id: 'background' as const, label: '背景知識', count: referenceStats.byCategory.background, icon: '📖' },
  { id: 'related' as const, label: '相關研究', count: referenceStats.byCategory.related, icon: '🔗' }
]

// 根據選中類別過濾參考文獻
const filteredReferences = computed(() => {
  if (selectedCategory.value === 'all') {
    return references
  }
  return references.filter(ref => ref.category === selectedCategory.value)
})

// 切換類別
const switchCategory = (category: typeof selectedCategory.value) => {
  selectedCategory.value = category
}

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

// 開啟詳情 Modal
const openDetailModal = (reference: Reference) => {
  selectedReference.value = reference
  showModal.value = true
}

// 關閉 Modal
const closeModal = () => {
  showModal.value = false
  selectedReference.value = null
}
</script>

<template>
  <div class="references-section">
    <!-- 標題區域 -->
    <div class="section-header">
      <h1 class="section-title">📚 參考文獻</h1>
      <p class="section-description">
        本研究基於以下學術文獻，涵蓋深度學習、語音信號處理、神經網絡等多個相關領域的最新研究成果。
      </p>
    </div>

    <!-- 統計資訊 -->
    <div class="stats-container">
      <div class="stat-card">
        <div class="stat-number">{{ referenceStats.total }}</div>
        <div class="stat-label">總文獻數</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">{{ referenceStats.byCategory.research }}</div>
        <div class="stat-label">研究文獻</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">{{ referenceStats.byCategory.methodology }}</div>
        <div class="stat-label">方法論</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">{{ referenceStats.byCategory.background }}</div>
        <div class="stat-label">背景知識</div>
      </div>
    </div>

    <!-- 類別篩選器 -->
    <div class="category-filter">
      <button
        v-for="category in categories"
        :key="category.id"
        class="category-btn"
        :class="{ 'category-btn-active': selectedCategory === category.id }"
        @click="switchCategory(category.id)"
      >
        <span class="category-icon">{{ category.icon }}</span>
        <span class="category-label">{{ category.label }}</span>
        <span class="category-count">({{ category.count }})</span>
      </button>
    </div>

    <!-- 參考文獻列表 -->
    <div class="references-list">
      <div
        v-for="(reference, index) in filteredReferences"
        :key="reference.id"
        class="reference-card"
        :class="`reference-${reference.category}`"
      >
        <div class="reference-header">
          <div class="reference-number">[{{ index + 1 }}]</div>
          <div class="reference-category-badge" :class="`badge-${reference.category}`">
            {{ 
              reference.category === 'research' ? '研究' :
              reference.category === 'methodology' ? '方法' :
              reference.category === 'background' ? '背景' : '相關'
            }}
          </div>
        </div>
        
        <h3 class="reference-title">{{ reference.title }}</h3>
        
        <div class="reference-authors">{{ reference.authors }}</div>
        
        <div class="reference-meta">
          <span v-if="reference.journal" class="reference-journal">{{ reference.journal }}</span>
          <span class="reference-year">{{ reference.year }}</span>
        </div>
        
        <p v-if="reference.abstract" class="reference-abstract">
          {{ reference.abstract }}
        </p>
        
        <div class="reference-actions">
          <button
            class="action-btn detail-btn"
            @click="openDetailModal(reference)"
            title="查看詳情"
          >
            🔍 查看詳情
          </button>
          <button
            v-if="reference.doi"
            class="action-btn doi-btn"
            @click="openDOI(reference.doi!)"
            title="查看 DOI"
          >
            📄 DOI
          </button>
          <button
            v-if="reference.doi"
            class="action-btn copy-btn"
            @click="copyDOI(reference.doi!)"
            title="複製 DOI"
          >
            📋 複製
          </button>
        </div>
      </div>
    </div>

    <!-- 空狀態 -->
    <div v-if="filteredReferences.length === 0" class="empty-state">
      <div class="empty-icon">📚</div>
      <h3>暫無相關文獻</h3>
      <p>該類別下暫無參考文獻，請選擇其他類別查看。</p>
    </div>

    <!-- 參考文獻詳情 Modal -->
    <ReferenceDetailModal
      :reference="selectedReference"
      :show="showModal"
      @close="closeModal"
    />
  </div>
</template>

<style scoped>
@import '../../styles/ReferencesSection.css';
</style> 