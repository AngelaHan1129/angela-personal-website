<template>
  <section class="page">
    <div class="section-heading">
      <p class="section-kicker">AWARDS & EXPERIENCE</p>
      <h1>競賽與經歷</h1>
      <p>
        這些成果來自我在 AI、資訊應用、跨域實踐與系統開發上的持續投入，
        也反映出我不只會做功能，更重視完整的提案、展示與落地能力。
      </p>
    </div>

    <div class="timeline">
      <article
        v-for="item in awards"
        :key="item.id"
        class="timeline-card"
      >
        <div class="timeline-card__year">{{ item.year }}</div>
        <div class="timeline-card__content">
          <span class="timeline-card__tag">{{ item.tag }}</span>
          <h2>{{ item.title }}</h2>
          <p>{{ item.description }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const awards = ref([
  {
    id: 1,
    year: '2025',
    tag: 'AI 工具運用',
    title: '資訊應用服務創新競賽 第二名',
    description: '以 eKYC AI 紅隊滲透創新主題參賽，展現 AI 工具整合、系統設計與展示能力。'
  },
  {
    id: 2,
    year: '2025',
    tag: '智慧創新',
    title: 'AI 智慧創新大賞 入圍',
    description: '以 AI 專題成果進入競賽名單，強化作品在創新應用與展示層面的完整度。'
  },
  {
    id: 3,
    year: '2025',
    tag: 'USR 跨域實踐',
    title: 'USR 跨域創新場域實踐競賽 金獎',
    description: '負責遊程規劃、活動設計與場域整合，成功將提案與實務需求連結。'
  },
  {
    id: 4,
    year: '2024',
    tag: 'AI 防詐',
    title: '資訊應用服務創新競賽 第一名',
    description: '以多模態 AI 防詐系統「魔聲仔」參賽，整合網站實作、系統創意與簡報呈現。'
  },
  {
    id: 5,
    year: '2024',
    tag: '敏捷開發',
    title: '鈦坦敏捷開發特別獎 第一名',
    description: '在競賽中展現團隊協作、快速迭代與產品落地能力。'
  },
  {
    id: 6,
    year: '2024',
    tag: '資安',
    title: '尋找資安女婕思 佳作',
    description: '提出智慧醫療健保系統風險與零信任防護策略，展現資安思維與分析能力。'
  }
])
</script>