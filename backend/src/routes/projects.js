const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json([
    {
      id: 1,
      year: '2026',
      tag: 'Computer Vision',
      title: 'OBELISK 攻擊意圖預測與追蹤系統',
      description: '結合 YOLO、ByteTrack、MediaPipe Pose、ST-GCN 與 LSTM 做連續型攻擊意圖辨識。',
      stack: ['YOLO', 'ByteTrack', 'MediaPipe Pose', 'ST-GCN', 'LSTM']
    },
    {
      id: 2,
      year: '2025',
      tag: 'AI Security',
      title: '侵國侵城 eKYC AI 攻防系統',
      description: '採用 NestJS、Playwright、Nuxt3 與 RAG，自動生成滲透報告並整合 Gemini、Grok、Vertex AI Agent。',
      stack: ['NestJS', 'Playwright', 'Nuxt3', 'RAG', 'Gemini', 'Grok']
    },
    {
      id: 3,
      year: '2025',
      tag: 'RAG System',
      title: 'SQL 語意相似度 RAG 分析系統',
      description: '以 Parser、Neo4j、pgvector、PostgreSQL 建立 SQL 語意檢索與自動生成輔助流程。',
      stack: ['Python', 'Neo4j', 'pgvector', 'PostgreSQL', 'KNN']
    },
    {
      id: 4,
      year: '2024-2025',
      tag: 'AI Anti-Fraud',
      title: '魔聲仔 多模態 AI 詐騙媒體檢測系統',
      description: '整合文字探勘、音訊與影片 AI 檢測，並設計網站前端、系統創意與簡報敘事。',
      stack: ['JavaScript', 'AI Audio', 'AI Video', 'Text Mining']
    },
    {
      id: 5,
      year: '2024',
      tag: 'Web App',
      title: '翻轉日記',
      description: '使用 Figma 設計介面，以 JavaScript 實作動態效果，透過 Fetch API 串接 PHP 後端並推薦音樂。',
      stack: ['Figma', 'JavaScript', 'Fetch API', 'PHP']
    }
  ])
})

module.exports = router