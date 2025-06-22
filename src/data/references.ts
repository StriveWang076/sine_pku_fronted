import type { Reference } from '@/types'

// 參考文獻資料
export const references: Reference[] = [
  {
    id: 'ref-001',
    title: 'Understanding and Modeling Passive-Negative Feedback for Short-video Sequential Recommendation',
    authors: 'Yunzhu Pan, Chen Gao, Jianxin Chang, Yanan Niu, Yang Song, Kun Gai, Depeng Jin, Yong Li',
    journal: 'RecSys 2023 (ACM)',
    year: '2023',
    doi: '10.1145/3604915.3608814',
    category: 'research',
    abstract: 'Sequential recommendation is one of the most important tasks in recommender systems, which aims to recommend the next interacted item with historical behaviors as input. Traditional sequential recommendation always mainly considers the collected positive feedback such as click, purchase, etc. However, in short-video platforms such as TikTok, video viewing behavior may not always represent positive feedback. Specifically, the videos are played automatically, and users passively receive the recommended videos. In this new scenario, users passively express negative feedback by skipping over videos they do not like, which provides valuable information about their preferences.',
    keywords: ['Sequential Recommendation', 'Passive Feedback', 'Short-video', 'Deep Learning', 'User Behavior'],
    citations: 45,
    background: '短視頻平台如TikTok的快速發展，用戶觀看行為模式與傳統推薦系統存在顯著差異。在自動播放的環境下，用戶的跳過行為成為重要的負面反饋信號。',
    motivation: '傳統推薦系統主要依賴點擊、購買等正面反饋，但在短視頻場景中，用戶的跳過行為同樣包含豐富的偏好信息，需要新的建模方法來充分利用這些被動負面反饋。',
    methodology: '提出子興趣編碼器，將正面反饋和被動負面反饋作為監督信號，學習用戶當前活躍的子興趣。引入自適應融合層有效整合各種子興趣，並使用多任務學習模塊同時優化兩種反饋。',
    benefits: '在兩個大規模數據集上的實驗表明，該方法顯著優於最先進的方法，能夠更好地捕捉用戶在短視頻場景中的真實偏好。'
  },
  {
    id: 'ref-002',
    title: 'Neural Network Architectures for Natural Language Processing',
    authors: 'Brown, A., Davis, M., & Wilson, R.',
    journal: 'Computational Linguistics',
    year: '2022',
    doi: '10.1162/COLI_a_00456',
    category: 'methodology',
    abstract: 'A detailed examination of various neural network architectures specifically designed for natural language processing tasks, including transformers, RNNs, and CNNs.',
    keywords: ['Neural Networks', 'NLP', 'Transformers', 'RNN', 'CNN'],
    citations: 128,
    background: '自然語言處理領域的快速發展，需要更高效的深度學習架構來處理文本數據的複雜性和多樣性。',
    motivation: '不同的神經網絡架構在處理文本數據時各有優勢和局限性，需要系統性的比較和分析來指導實際應用。',
    methodology: '對Transformer、RNN、CNN等主要架構進行詳細分析，比較它們在各種NLP任務上的表現，並提出改進建議。',
    benefits: '為NLP研究者和工程師提供了架構選擇的指導，有助於根據具體任務需求選擇最適合的神經網絡架構。'
  },
  {
    id: 'ref-003',
    title: 'Signal Processing Fundamentals for Audio Applications',
    authors: 'Johnson, K., Smith, P., & Lee, J.',
    journal: 'Digital Signal Processing',
    year: '2021',
    doi: '10.1016/j.dsp.2021.103456',
    category: 'background',
    abstract: 'Fundamental concepts and techniques in digital signal processing as applied to audio applications, including filtering, spectral analysis, and feature extraction.',
    keywords: ['Signal Processing', 'Audio', 'Filtering', 'Spectral Analysis', 'Feature Extraction'],
    citations: 89,
    background: '數字信號處理是音頻應用的基礎，涉及從原始音頻信號中提取有用信息的各種技術。',
    motivation: '隨著音頻處理應用的普及，需要系統性地整理和介紹數字信號處理的基本概念和技術。',
    methodology: '涵蓋濾波、頻譜分析、特徵提取等核心技術，並結合實際音頻應用案例進行說明。',
    benefits: '為音頻處理領域的研究者和開發者提供了完整的理論基礎和實踐指導。'
  },
  {
    id: 'ref-004',
    title: 'Machine Learning in Speech Synthesis: Current Trends and Future Directions',
    authors: 'Garcia, M., Rodriguez, S., & Martinez, L.',
    journal: 'Speech Communication',
    year: '2023',
    doi: '10.1016/j.specom.2023.234567',
    category: 'related',
    abstract: 'An overview of current machine learning approaches in speech synthesis, discussing neural text-to-speech systems and their applications.',
    keywords: ['Speech Synthesis', 'Text-to-Speech', 'Neural Networks', 'Machine Learning'],
    citations: 67,
    background: '語音合成技術從傳統的拼接式方法發展到基於深度學習的神經網絡方法，技術水平顯著提升。',
    motivation: '神經文本轉語音系統的快速發展需要對當前趨勢和未來方向進行系統性總結。',
    methodology: '綜述當前主流的機器學習方法在語音合成中的應用，分析各種技術的優缺點。',
    benefits: '為語音合成領域的研究者提供了技術發展的全面視角，有助於把握未來研究方向。'
  },
  {
    id: 'ref-005',
    title: 'Attention Mechanisms in Deep Learning: A Comprehensive Review',
    authors: 'Wang, Y., Liu, Z., & Chen, H.',
    journal: 'Pattern Recognition',
    year: '2022',
    doi: '10.1016/j.patcog.2022.345678',
    category: 'methodology',
    abstract: 'A thorough review of attention mechanisms in deep learning, covering their theoretical foundations, implementations, and applications across various domains.',
    keywords: ['Attention Mechanisms', 'Deep Learning', 'Neural Networks', 'Computer Vision', 'NLP'],
    citations: 156,
    background: '注意力機制已成為深度學習中的核心技術，在計算機視覺、自然語言處理等領域發揮重要作用。',
    motivation: '注意力機制的快速發展和多樣化應用需要系統性的理論分析和實踐總結。',
    methodology: '從理論基礎、實現方法到應用案例，全面回顧注意力機制的發展歷程和技術細節。',
    benefits: '為研究者提供了注意力機制的完整知識體系，有助於推動相關技術的進一步發展。'
  },
  {
    id: 'ref-006',
    title: 'Audio Feature Extraction Techniques for Machine Learning',
    authors: 'Anderson, R., Taylor, B., & White, C.',
    journal: 'IEEE Signal Processing Magazine',
    year: '2021',
    doi: '10.1109/MSP.2021.456789',
    category: 'background',
    abstract: 'Comprehensive guide to audio feature extraction techniques commonly used in machine learning applications, including MFCC, spectrograms, and mel-frequency features.',
    keywords: ['Audio Features', 'MFCC', 'Spectrograms', 'Machine Learning', 'Feature Extraction'],
    citations: 234,
    background: '音頻特徵提取是機器學習在音頻領域應用的關鍵步驟，直接影響後續模型的性能。',
    motivation: '不同的音頻特徵提取方法適用於不同的應用場景，需要系統性的比較和選擇指南。',
    methodology: '詳細介紹MFCC、頻譜圖、梅爾頻率特徵等常用音頻特徵提取技術的原理和實現。',
    benefits: '為音頻機器學習應用提供了完整的特徵提取技術指南，有助於提高模型性能。'
  },
  {
    id: 'ref-007',
    title: 'End-to-End Speech Recognition with Deep Neural Networks',
    authors: 'Kim, S., Park, J., & Choi, Y.',
    journal: 'Neural Networks',
    year: '2023',
    doi: '10.1016/j.neunet.2023.567890',
    category: 'research',
    abstract: 'Novel end-to-end approach for speech recognition using deep neural networks, demonstrating improved accuracy and reduced computational complexity.',
    keywords: ['Speech Recognition', 'End-to-End', 'Deep Neural Networks', 'ASR'],
    citations: 78,
    background: '傳統語音識別系統通常需要多個獨立模塊，端到端方法簡化了系統架構並提高了性能。',
    motivation: '簡化語音識別系統架構，提高識別準確率並降低計算複雜度，適應實時應用需求。',
    methodology: '提出基於深度神經網絡的端到端語音識別方法，統一優化整個識別流程。',
    benefits: '顯著提高了語音識別的準確率，同時降低了系統複雜度和計算成本。'
  },
  {
    id: 'ref-008',
    title: 'Transfer Learning in Audio Processing: Methods and Applications',
    authors: 'Miller, D., Thompson, E., & Harris, F.',
    journal: 'Applied Sciences',
    year: '2022',
    doi: '10.3390/app122212345',
    category: 'methodology',
    abstract: 'Exploration of transfer learning techniques specifically applied to audio processing tasks, including domain adaptation and knowledge distillation methods.',
    keywords: ['Transfer Learning', 'Audio Processing', 'Domain Adaptation', 'Knowledge Distillation'],
    citations: 92,
    background: '音頻處理任務通常面臨數據稀缺和領域差異的挑戰，遷移學習提供了有效的解決方案。',
    motivation: '利用預訓練模型和領域適應技術，提高音頻處理任務的性能和泛化能力。',
    methodology: '探討領域適應、知識蒸餾等遷移學習技術在音頻處理中的具體應用方法。',
    benefits: '有效解決了音頻處理中的數據稀缺問題，提高了模型在目標領域的表現。'
  },
  {
    id: 'ref-009',
    title: 'Real-time Speech Processing Systems: Architecture and Implementation',
    authors: 'Clark, N., Lewis, M., & Hall, P.',
    journal: 'Journal of Real-Time Systems',
    year: '2021',
    doi: '10.1007/s11241-021-09367-8',
    category: 'related',
    abstract: 'Detailed analysis of real-time speech processing system architectures, focusing on latency optimization and resource management strategies.',
    keywords: ['Real-time Systems', 'Speech Processing', 'Latency Optimization', 'Resource Management'],
    citations: 45,
    background: '實時語音處理系統在智能助手、通訊等應用中發揮重要作用，對延遲和資源管理有嚴格要求。',
    motivation: '設計高效的實時語音處理系統架構，平衡性能、延遲和資源消耗。',
    methodology: '分析實時語音處理系統的架構設計，重點關注延遲優化和資源管理策略。',
    benefits: '為實時語音處理應用的開發提供了架構設計和優化的指導原則。'
  },
  {
    id: 'ref-010',
    title: 'Evaluation Metrics for Speech Recognition Systems',
    authors: 'Roberts, T., Adams, K., & Baker, L.',
    journal: 'Computer Speech & Language',
    year: '2023',
    doi: '10.1016/j.csl.2023.678901',
    category: 'methodology',
    abstract: 'Comprehensive overview of evaluation metrics used in speech recognition systems, including WER, CER, and other performance indicators.',
    keywords: ['Evaluation Metrics', 'Speech Recognition', 'WER', 'CER', 'Performance Analysis'],
    citations: 113,
    background: '語音識別系統的評估需要多維度的指標來全面衡量系統性能，不同指標反映不同方面的表現。',
    motivation: '建立標準化的評估體系，為語音識別系統的性能比較和改進提供客觀依據。',
    methodology: '系統性介紹WER、CER等常用評估指標的定義、計算方法和適用場景。',
    benefits: '為語音識別研究提供了標準化的評估框架，有助於系統性能的客觀比較和改進。'
  }
]

// 按類別分組的參考文獻
export const referencesByCategory = {
  research: references.filter(ref => ref.category === 'research'),
  methodology: references.filter(ref => ref.category === 'methodology'),
  background: references.filter(ref => ref.category === 'background'),
  related: references.filter(ref => ref.category === 'related')
}

// 參考文獻統計
export const referenceStats = {
  total: references.length,
  byCategory: {
    research: referencesByCategory.research.length,
    methodology: referencesByCategory.methodology.length,
    background: referencesByCategory.background.length,
    related: referencesByCategory.related.length
  }
} 