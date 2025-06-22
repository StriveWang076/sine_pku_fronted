# SINE PKU 研究展示平台

## 專案概述

這是一個現代化的研究展示平台，用於展示北京大學 SINE 實驗室的研究項目。專案採用 Vue 3 + TypeScript + Vite 技術棧，提供流暢的使用者體驗和優秀的開發體驗。

## 🚀 最新更新

### 專案結構重整 (2024)
- ✅ **模組化架構**: 重新組織專案結構，提高可維護性
- ✅ **類型安全**: 完整的 TypeScript 類型定義
- ✅ **樣式系統**: 統一的 CSS 變數和設計系統
- ✅ **Composables**: 使用 Vue 3 Composition API 實現邏輯復用
- ✅ **路徑別名**: 簡化導入路徑，提高開發效率

## 🏗️ 專案結構

```
sine_pku_fronted/
├── src/
│   ├── components/           # 組件目錄
│   │   ├── sections/        # 頁面區段組件
│   │   ├── NavigationBar.vue
│   │   ├── ResearchShowcase.vue
│   │   └── index.ts         # 組件統一匯出
│   ├── composables/         # Vue 3 Composables
│   │   └── useNavigation.ts # 導航邏輯
│   ├── data/               # 資料檔案
│   │   ├── *.ts            # 各類資料檔案
│   │   └── index.ts        # 資料統一匯出
│   ├── styles/             # 樣式檔案
│   │   ├── variables.css   # CSS 變數
│   │   └── global.css      # 全域樣式
│   ├── types/              # TypeScript 類型定義
│   │   └── index.ts
│   ├── utils/              # 工具函數和常數
│   │   └── constants.ts
│   ├── App.vue             # 根組件
│   └── main.ts             # 應用程式入口
└── 配置檔案
```

## ✨ 主要功能

### 📊 研究展示
- 研究概述和摘要
- 方法論說明
- 結果展示
- 關鍵詞標籤

### 🎓 學術背景
- 教育經歷
- 研究經驗
- 技能展示
- 成就列表

### 📋 研究計劃
- 階段性計劃
- 時間安排
- 目標設定
- 預期成果

### 💡 研究動機
- 個人動機
- 研究興趣
- 未來規劃
- 職業目標

### 📧 聯絡資訊
- 電子郵件
- 電話號碼
- 地址資訊
- 社交媒體連結

## 🛠️ 技術特點

### 前端技術
- **Vue 3**: 最新的 Vue.js 框架
- **TypeScript**: 完整的類型安全
- **Vite**: 快速的開發和建構工具
- **CSS Variables**: 現代化的樣式管理

### 架構設計
- **組件化**: 模組化的組件設計
- **Composables**: 邏輯復用和狀態管理
- **響應式**: 支援多種螢幕尺寸
- **動畫**: 流暢的過渡效果

### 開發體驗
- **熱重載**: 即時的開發反饋
- **類型檢查**: 編譯時錯誤檢查
- **路徑別名**: 簡化的導入路徑
- **ESLint**: 程式碼品質保證

## 🚀 快速開始

### 環境需求
- Node.js 16.0 或更高版本
- npm 或 yarn 套件管理器

### 安裝步驟

1. **克隆專案**
   ```bash
   git clone <repository-url>
   cd sine_pku_fronted
   ```

2. **安裝依賴**
   ```bash
   npm install
   ```

3. **啟動開發伺服器**
   ```bash
   npm run dev
   ```

4. **開啟瀏覽器**
   訪問 `http://localhost:5173`

### 建構部署

```bash
# 建構生產版本
npm run build

# 預覽生產版本
npm run preview
```

## 📁 檔案說明

### 核心檔案
- `App.vue`: 應用程式根組件
- `main.ts`: 應用程式入口點
- `useNavigation.ts`: 導航邏輯管理

### 組件檔案
- `NavigationBar.vue`: 頂部導航欄
- `ResearchShowcase.vue`: 主要內容展示
- `sections/`: 各個頁面區段組件

### 樣式檔案
- `variables.css`: CSS 變數定義
- `global.css`: 全域樣式設定

### 資料檔案
- `data/`: 所有靜態資料檔案
- `types/`: TypeScript 類型定義

## 🎨 設計系統

### 顏色方案
- **主色調**: 藍色漸層 (#667eea → #764ba2)
- **文字色**: 深灰色 (#333333)
- **背景色**: 白色 (#ffffff)
- **邊框色**: 淺灰色 (#e9ecef)

### 間距系統
- **xs**: 0.25rem (4px)
- **sm**: 0.5rem (8px)
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)

### 字體系統
- **主要字體**: Microsoft YaHei, PingFang SC
- **等寬字體**: Consolas, Monaco
- **標題大小**: 2rem (32px)
- **正文大小**: 1rem (16px)

## 🔧 開發指南

### 新增組件
1. 在 `components/` 目錄下建立 `.vue` 檔案
2. 在 `components/index.ts` 中匯出
3. 在需要使用的地方導入

### 新增樣式
1. 在 `styles/variables.css` 中定義變數
2. 在 `styles/global.css` 中新增樣式
3. 或在組件中使用 scoped 樣式

### 新增資料
1. 在 `data/` 目錄下建立 `.ts` 檔案
2. 在 `types/index.ts` 中定義類型
3. 在 `data/index.ts` 中匯出

## 📝 更新日誌

### v1.1.0 (2024)
- 🎉 專案結構重整完成
- ✨ 新增 TypeScript 類型定義
- 🎨 統一樣式系統
- 🔧 優化開發體驗

### v1.0.0 (2024)
- 🚀 初始版本發布
- 📊 基本功能實現
- 🎨 響應式設計
- 📱 移動端支援

## 🤝 貢獻指南

1. Fork 專案
2. 建立功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交變更 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

## 📄 授權條款

本專案採用 MIT 授權條款 - 詳見 [LICENSE](LICENSE) 檔案

## 📞 聯絡資訊

- **專案維護者**: SINE PKU 團隊
- **電子郵件**: [聯絡郵箱]
- **專案連結**: [GitHub 連結]

---

⭐ 如果這個專案對您有幫助，請給我們一個星標！
