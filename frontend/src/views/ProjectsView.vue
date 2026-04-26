<template>
  <section class="page">
    <div class="section-heading">
      <p class="section-kicker">PROJECTS</p>
      <h1>Selected Works</h1>
      <p>
        從競賽專題到實習系統，我的作品集中在 AI 應用、全端整合、互動式前端與敘事展示。
      </p>
    </div>

    <div class="project-grid">
      <article
        v-for="project in projects"
        :key="project.id"
        class="project-card project-card--interactive"
        @mousemove="updateGlow($event)"
        @mouseleave="resetGlow($event)"
      >
        <div class="project-card__glow"></div>

        <div class="project-card__top">
          <span class="project-tag">{{ project.tag }}</span>
          <span class="project-year">{{ project.year }}</span>
        </div>

        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>

        <div class="project-stack">
          <span v-for="item in project.stack" :key="item">{{ item }}</span>
        </div>

        <div class="project-card__footer">
          <span>Creative Tech Portfolio</span>
          <span class="arrow">↗</span>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const projects = ref([])

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/projects')
    projects.value = res.data
  } catch (error) {
    console.error('讀取 projects 失敗', error)
  }
})

const updateGlow = (event) => {
  const card = event.currentTarget
  const glow = card.querySelector('.project-card__glow')

  const rect = card.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  glow.style.opacity = '1'
  glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(108, 242, 255, 0.22), transparent 42%)`
}

const resetGlow = (event) => {
  const card = event.currentTarget
  const glow = card.querySelector('.project-card__glow')
  glow.style.opacity = '0'
}
</script>