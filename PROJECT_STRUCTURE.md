# SINE PKU 專案結構說明

## 專案概述
這是一個基於 Vue 3 + TypeScript + Vite 的現代化前端專案，用於展示北京大學 SINE 實驗室的研究項目。

## 目錄結構

```
sine_pku_fronted/
├── src/
│   ├── components/           # 組件目錄
│   │   ├── sections/        # 頁面區段組件
│   │   │   ├── ResearchSection.vue
│   │   │   ├── BackgroundSection.vue
│   │   │   ├── PlanSection.vue
│   │   │   ├── MotivationSection.vue
│   │   │   └── ContactSection.vue
│   │   ├── NavigationBar.vue
│   │   ├── ResearchShowcase.vue
│   │   └── index.ts         # 組件統一匯出
│   ├── composables/         # Vue 3 Composables
│   │   └── useNavigation.ts # 導航邏輯
│   ├── data/               # 資料檔案
│   │   ├── researchData.ts
│   │   ├── academicBackground.ts
│   │   ├── researchPlan.ts
│   │   ├── motivation.ts
│   │   ├── contactInfo.ts
│   │   └── index.ts        # 資料統一匯出
│   ├── styles/             # 樣式檔案
│   │   ├── variables.css   # CSS 變數
│   │   ├── global.css      # 全域樣式
│   │   └── ResearchShowcase.css
│   ├── types/              # TypeScript 類型定義
│   │   └── index.ts
│   ├── utils/              # 工具函數和常數
│   │   └── constants.ts
│   ├── assets/             # 靜態資源
│   ├── App.vue             # 根組件
│   └── main.ts             # 應用程式入口
├── public/                 # 公共資源
├── backend/                # 後端專案（待開發）
└── 配置檔案
    ├── package.json
    ├── vite.config.ts
    ├── tsconfig.json
    └── tsconfig.app.json
```

## 架構特點

### 1. 模組化設計
- **組件化**: 每個功能區塊都是獨立的 Vue 組件
- **Composables**: 使用 Vue 3 的 Composition API 實現邏輯復用
- **類型安全**: 完整的 TypeScript 類型定義

### 2. 樣式管理
- **CSS 變數**: 統一的設計系統，易於維護和主題切換
- **響應式設計**: 支援多種螢幕尺寸
- **動畫效果**: 流暢的過渡動畫和互動效果

### 3. 資料管理
- **集中化**: 所有資料都在 `data/` 目錄中管理
- **類型化**: 每個資料結構都有對應的 TypeScript 介面
- **模組化**: 按功能區塊組織資料檔案

### 4. 開發體驗
- **路徑別名**: 使用 `@/` 指向 `src/` 目錄
- **熱重載**: Vite 提供的快速開發體驗
- **類型檢查**: 完整的 TypeScript 支援

## 主要檔案說明

### 核心檔案
- `App.vue`: 應用程式根組件，負責整體佈局和導航
- `main.ts`: 應用程式入口，初始化 Vue 應用
- `useNavigation.ts`: 導航邏輯 composable，管理頁面切換

### 組件檔案
- `NavigationBar.vue`: 頂部導航欄組件
- `ResearchShowcase.vue`: 主要內容展示組件
- `sections/`: 各個頁面區段的組件

### 樣式檔案
- `variables.css`: 定義所有 CSS 變數
- `global.css`: 全域樣式和通用類別
- `ResearchShowcase.css`: 特定組件的樣式

### 資料檔案
- `researchData.ts`: 研究展示相關資料
- `academicBackground.ts`: 學術背景資料
- `researchPlan.ts`: 研究計劃資料
- `motivation.ts`: 研究動機資料
- `contactInfo.ts`: 聯絡資訊資料

## 開發指南

### 新增組件
1. 在 `components/` 目錄下建立新的 `.vue` 檔案
2. 在 `components/index.ts` 中匯出新組件
3. 在需要使用的地方導入並使用

### 新增樣式
1. 在 `styles/variables.css` 中定義新的 CSS 變數
2. 在 `styles/global.css` 中新增全域樣式
3. 或在組件中使用 scoped 樣式

### 新增資料
1. 在 `data/` 目錄下建立新的 `.ts` 檔案
2. 在 `types/index.ts` 中定義對應的類型
3. 在 `data/index.ts` 中匯出新資料

### 新增類型
1. 在 `types/index.ts` 中定義新的 TypeScript 介面
2. 在需要使用的地方導入並使用

## 技術棧

- **前端框架**: Vue 3
- **開發語言**: TypeScript
- **建構工具**: Vite
- **樣式預處理**: CSS Variables
- **版本控制**: Git

## 開發命令

```bash
# 安裝依賴
npm install

# 開發模式
npm run dev

# 建構生產版本
npm run build

# 預覽生產版本
npm run preview
``` 