<template>
  <section class="page page--about">
    <!-- Hero 區塊：個人標語與頭像 -->
    <div class="about-hero">
      <div class="about-content">
        <p class="section-kicker">ABOUT</p>
        <h1>Han Pei Hxuan</h1>
        <p class="about-lead">
          把技術與創意做成能被感受到的作品。
        </p>
        <p class="about-intro">
          我目前就讀國立臺中科技大學資訊應用菁英班，擅長將前端互動、
          後端系統與 AI 專題整合成完整作品。我不只追求程式功能實現，
          更在意介面流暢度、專案敘事邏輯與使用者體驗。
        </p>

        <!-- 技術棧 Badge -->
        <div class="about-badges">
          <span><Icon icon="mdi:vuejs" /> Vue 3</span>
          <span><Icon icon="mdi:nodejs" /> Node.js</span>
          <span><Icon icon="mdi:nuxt" /> Nuxt 3</span>
          <span><Icon icon="mdi:robot" /> AI Projects</span>
          <span><Icon icon="mdi:palette-outline" /> Creative Web</span>
        </div>
      </div>

      <ProfileImage />
    </div>

    <!-- 經歷與特質網格 -->
    <div class="about-grid">
      <!-- Profile -->
      <article class="glass-card">
        <h2><Icon icon="mdi:account-outline" /> Profile</h2>
        <p>
          個性開朗、喜歡與人交流。在團隊合作中，習慣主動協調、整合需求並推進進度，
          能將複雜的想法轉化為具體的執行目標，實現有完成度的作品。
        </p>
      </article>

      <!-- Skills -->
      <article class="glass-card">
        <h2><Icon icon="mdi:code-tags" /> Skills</h2>
        <ul>
          <li><strong>前端</strong>：Vue3, Nuxt3, JavaScript, Figma</li>
          <li><strong>後端</strong>：Node.js, NestJS, Python</li>
          <li><strong>AI/專題</strong>：RAG, AI 防詐, YOLO 影像辨識, 多模態系統</li>
        </ul>
      </article>

      <!-- Leadership -->
      <article class="glass-card">
        <h2><Icon icon="mdi:rocket-outline" /> Leadership</h2>
        <p>
          曾擔任資訊管理科學會會長，熟悉跨組溝通、活動規劃與專案時程推進，
          能保持節奏完成目標，協助團隊在壓力下達到最佳績效。
        </p>
      </article>
      
      <!-- Learning -->
      <article class="glass-card">
        <h2><Icon icon="mdi:school-outline" /> Learning Journey</h2>
        <p>
          從早期切版練習，到後來投入 Vue.js、動態設計與系統開發，
          我建立起「設計 + 工程 + 展示」並重的能力，樂於挑戰 AI 與自動化流程應用。
        </p>
      </article>

      <!-- Mindset -->
      <article class="glass-card">
        <h2><Icon icon="mdi:lightbulb-on-outline" /> Mindset</h2>
        <p>
          我相信學習是持續探索、實作、修正與累積的過程。
          網站不僅是畫面展示，更是資訊架構、互動節奏與技術實力的綜合體現。
        </p>
      </article>

      <!-- What I Build -->
      <article class="glass-card">
        <h2><Icon icon="mdi:palette-swatch-outline" /> What I Build</h2>
        <p>
          喜愛建立有互動感、能傳達作品個性的系統。
          無論是創意前端、AI 展示介面或整合式應用，我都希望讓每一個作品都更有辨識度。
        </p>
      </article>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import ProfileImage from '../components/common/ProfileImage.vue'
</script>

<style scoped>
.page--about {
  position: relative;
}

.about-hero {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 40px;
  align-items: center;
  margin-bottom: 60px;
}

.about-content {
  max-width: 720px;
}

.about-lead {
  font-size: 1.2rem;
  color: var(--primary);
  margin-bottom: 16px;
  font-weight: 600;
}

.about-intro {
  color: var(--text-soft);
  line-height: 1.95;
  margin-bottom: 24px;
  max-width: 62ch;
}

.about-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.about-badges span {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 999px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  color: var(--text);
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.glass-card {
  padding: 28px;
  border-radius: 24px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(18px);
  box-shadow: var(--shadow);
}

.glass-card h2 {
  margin-top: 0;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--secondary);
}

.glass-card p,
.glass-card li {
  color: var(--text-soft);
  line-height: 1.85;
}

.glass-card ul {
  margin: 0;
  padding-left: 18px;
}

@media (max-width: 980px) {
  .about-hero {
    grid-template-columns: 1fr;
  }

  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>