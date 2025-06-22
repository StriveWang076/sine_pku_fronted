// 學術背景數據：包含教育經歷、研究經驗、發表論文和技能專長
export const academicBackground = {
  // 教育背景資訊
  education: [
    {
      degree: '學士學位',
      major: '計算機科學與技術',
      university: '某知名大學',
      year: '2020-2024',
      gpa: '3.8/4.0'
    }
  ],
  // 研究經驗資訊
  researchExperience: [
    {
      title: '語音信號處理研究助理',
      institution: '某研究實驗室',
      duration: '2023.03 - 2024.06',
      description: '參與語音識別算法的開發和優化，負責數據預處理和模型訓練'
    },
    {
      title: '機器學習項目研究',
      institution: '某大學實驗室',
      duration: '2022.09 - 2023.12',
      description: '研究深度學習在自然語言處理中的應用，發表相關論文'
    }
  ],
  // 發表論文資訊
  publications: [
    {
      title: '基於注意力機制的語音識別改進方法',
      journal: 'IEEE Transactions on Audio, Speech, and Language Processing',
      year: '2024',
      status: '已發表'
    },
    {
      title: '深度學習在語音合成中的應用研究',
      conference: 'ICASSP 2024',
      year: '2024',
      status: '已接收'
    }
  ],
  // 技能專長分類
  skills: [
    { category: '程式語言', items: ['Python', 'C++', 'MATLAB', 'JavaScript'] },
    { category: '深度學習框架', items: ['PyTorch', 'TensorFlow', 'Keras'] },
    { category: '語音處理工具', items: ['Librosa', 'Praat', 'HTK'] },
    { category: '其他技能', items: ['Linux', 'Git', 'Docker', 'LaTeX'] }
  ]
} 