import { ref, computed } from 'vue'
import type { SectionType } from '@/types'
import { NAVIGATION_ITEMS } from '@/utils/constants'

export function useNavigation() {
  // 當前選中的頁面區段
  const currentSection = ref<SectionType>('research')

  // 計算當前選中項目的索引
  const currentIndex = computed(() => {
    return NAVIGATION_ITEMS.findIndex((item: { id: string }) => item.id === currentSection.value)
  })

  // 切換到指定區段
  const switchSection = (section: SectionType) => {
    currentSection.value = section
  }

  // 切換到下一個區段
  const nextSection = () => {
    const nextIndex = (currentIndex.value + 1) % NAVIGATION_ITEMS.length
    currentSection.value = NAVIGATION_ITEMS[nextIndex].id as SectionType
  }

  // 切換到上一個區段
  const previousSection = () => {
    const prevIndex = currentIndex.value === 0 
      ? NAVIGATION_ITEMS.length - 1 
      : currentIndex.value - 1
    currentSection.value = NAVIGATION_ITEMS[prevIndex].id as SectionType
  }

  // 檢查是否為第一個區段
  const isFirstSection = computed(() => currentIndex.value === 0)

  // 檢查是否為最後一個區段
  const isLastSection = computed(() => currentIndex.value === NAVIGATION_ITEMS.length - 1)

  return {
    currentSection,
    currentIndex,
    switchSection,
    nextSection,
    previousSection,
    isFirstSection,
    isLastSection
  }
} 