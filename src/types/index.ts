// 研究資料類型定義
export interface ResearchData {
  id: string
  title: string
  description: string
  image?: string
  link?: string
}

// 學術背景類型定義
export interface AcademicBackground {
  degree: string
  institution: string
  year: string
  description: string
}

// 研究計劃類型定義
export interface ResearchPlan {
  phase: string
  title: string
  description: string
  timeline: string
}

// 動機類型定義
export interface Motivation {
  title: string
  content: string
}

// 聯絡資訊類型定義
export interface ContactInfo {
  email: string
  phone: string
  address: string
  linkedin?: string
  github?: string
}

// 參考文獻類型定義
export interface Reference {
  id: string
  title: string
  authors: string
  journal?: string
  year: string
  doi?: string
  url?: string
  abstract?: string
  category: 'research' | 'methodology' | 'background' | 'related'
  keywords?: string[]
  citations?: number
  background?: string
  motivation?: string
  methodology?: string
  benefits?: string
}

// 頁面區段類型定義
export type SectionType = 'research' | 'background' | 'plan' | 'motivation' | 'contact' | 'references' 