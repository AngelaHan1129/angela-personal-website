<template>
  <section class="hero" ref="heroRef" @mousemove="handleMouseMove" @mouseleave="resetTilt">
    <div class="hero-grid"></div>
    <div class="hero-glow hero-glow--one"></div>
    <div class="hero-glow hero-glow--two"></div>

    <div class="hero__content">
      <p class="hero__eyebrow">AI × FULL-STACK × CREATIVE TECHNOLOGIST</p>
      <h1 class="hero__title">
        Build
        <span>Intelligent Systems</span>
        With Motion
      </h1>
      <p class="hero__desc">
        我把 AI、全端工程與互動設計整合成有敘事感的數位作品，
        從 RAG、eKYC 到多模態辨識，都不只追求功能，也追求體驗。
      </p>

      <div class="hero__actions">
        <router-link to="/projects" class="btn btn--primary">View Projects</router-link>
        <router-link to="/about" class="btn btn--ghost">About Me</router-link>
      </div>

      <div class="hero__stats">
        <div class="stat-card">
          <strong>Vue3 / Nuxt3</strong>
          <span>Interactive frontend experience</span>
        </div>
        <div class="stat-card">
          <strong>Node / NestJS</strong>
          <span>API and system architecture</span>
        </div>
      </div>
    </div>

    <div class="orbit-scene" ref="orbitRef">
      <div class="core" ref="coreRef">
        <div class="core__inner">
          <h2>Angela</h2>
          <p>Creative Developer</p>
        </div>
      </div>

      <div class="orbit orbit--one">
        <span class="orbit__item orbit__item--top">Vue 3</span>
        <span class="orbit__item orbit__item--bottom">Node.js</span>
      </div>

      <div class="orbit orbit--two">
        <span class="orbit__item orbit__item--left">RAG</span>
        <span class="orbit__item orbit__item--right">AI Security</span>
      </div>

      <div class="orbit orbit--three">
        <span class="orbit__item orbit__item--top">YOLO</span>
        <span class="orbit__item orbit__item--bottom">Nuxt 3</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'

const heroRef = ref(null)
const orbitRef = ref(null)
const coreRef = ref(null)

let orbitTween1 = null
let orbitTween2 = null
let orbitTween3 = null
let floatTween = null

const handleMouseMove = (e) => {
  const rect = heroRef.value.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width - 0.5
  const y = (e.clientY - rect.top) / rect.height - 0.5

  gsap.to(orbitRef.value, {
    rotateY: x * 20,
    rotateX: -y * 18,
    x: x * 16,
    y: y * 10,
    duration: 0.6,
    ease: 'power3.out'
  })

  gsap.to(coreRef.value, {
    x: x * 22,
    y: y * 22,
    duration: 0.5,
    ease: 'power2.out'
  })
}

const resetTilt = () => {
  gsap.to(orbitRef.value, {
    rotateY: 0,
    rotateX: 0,
    x: 0,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  })

  gsap.to(coreRef.value, {
    x: 0,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  })
}

onMounted(() => {
  gsap.from('.hero__eyebrow', {
    y: 24,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  })

  gsap.from('.hero__title', {
    y: 36,
    opacity: 0,
    duration: 1,
    delay: 0.12,
    ease: 'power3.out'
  })

  gsap.from('.hero__desc', {
    y: 24,
    opacity: 0,
    duration: 0.9,
    delay: 0.28,
    ease: 'power3.out'
  })

  gsap.from('.hero__actions', {
    y: 20,
    opacity: 0,
    duration: 0.8,
    delay: 0.42,
    ease: 'power3.out'
  })

  gsap.from('.hero__stats .stat-card', {
    y: 20,
    opacity: 0,
    duration: 0.8,
    stagger: 0.12,
    delay: 0.5,
    ease: 'power3.out'
  })

  gsap.from('.orbit-scene', {
    scale: 0.84,
    opacity: 0,
    duration: 1.2,
    delay: 0.2,
    ease: 'power3.out'
  })

  orbitTween1 = gsap.to('.orbit--one', {
    rotate: 360,
    duration: 14,
    repeat: -1,
    ease: 'none'
  })

  orbitTween2 = gsap.to('.orbit--two', {
    rotate: -360,
    duration: 22,
    repeat: -1,
    ease: 'none'
  })

  orbitTween3 = gsap.to('.orbit--three', {
    rotate: 360,
    duration: 30,
    repeat: -1,
    ease: 'none'
  })

  floatTween = gsap.to(coreRef.value, {
    y: '-=12',
    duration: 2.2,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })
})

onBeforeUnmount(() => {
  orbitTween1?.kill()
  orbitTween2?.kill()
  orbitTween3?.kill()
  floatTween?.kill()
})
</script>