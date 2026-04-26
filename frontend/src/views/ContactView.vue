<template>
  <section class="page">
    <div class="section-heading">
      <p class="section-kicker">CONTACT</p>
      <h1>Let’s Build Something</h1>
      <p>
        如果你對前端互動設計、AI 系統專題、網站開發或合作提案有興趣，
        歡迎直接留言給我。
      </p>
    </div>

    <div class="contact-layout">
      <div class="contact-card">
        <h2>Contact Info</h2>
        <p><strong>Name</strong>：韓佩璇</p>
        <p><strong>Email</strong>：tinaowo111@gmail.com</p>
        <p><strong>Location</strong>：Taichung, Taiwan</p>
        <p><strong>Focus</strong>：Vue / Node.js / AI / Creative Web</p>
      </div>

      <form class="contact-form" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">姓名</label>
          <input id="name" v-model="form.name" type="text" placeholder="請輸入你的姓名" />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" v-model="form.email" type="email" placeholder="your@email.com" />
        </div>

        <div class="form-group">
          <label for="message">訊息內容</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="6"
            placeholder="請輸入合作需求、想法或訊息"
          ></textarea>
        </div>

        <button class="btn btn--primary" type="submit" :disabled="loading">
          {{ loading ? 'Sending...' : 'Send Message' }}
        </button>

        <p v-if="successMessage" class="form-message form-message--success">
          {{ successMessage }}
        </p>

        <p v-if="errorMessage" class="form-message form-message--error">
          {{ errorMessage }}
        </p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import axios from 'axios'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const loading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const submitForm = async () => {
  successMessage.value = ''
  errorMessage.value = ''

  if (!form.name || !form.email || !form.message) {
    errorMessage.value = '請完整填寫所有欄位'
    return
  }

  try {
    loading.value = true

    const res = await axios.post('http://localhost:3000/api/contact', {
      name: form.name,
      email: form.email,
      message: form.message
    })

    successMessage.value = res.data.message || '訊息已成功送出'
    form.name = ''
    form.email = ''
    form.message = ''
  } catch (error) {
    errorMessage.value =
      error.response?.data?.message || '送出失敗，請稍後再試'
  } finally {
    loading.value = false
  }
}
</script>