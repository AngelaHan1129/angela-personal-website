const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    name: '韓佩璇',
    englishName: 'HAN, PEI-HSUAN',
    title: 'AI Engineer / Full-stack Developer / Creative Technologist',
    school: '國立臺中科技大學 資訊應用菁英班',
    location: 'Taichung, Taiwan',
    email: 'tinaowo111@gmail.com',
    skills: {
      frontend: ['HTML', 'CSS', 'JavaScript', 'Vue3', 'Nuxt3', 'Figma'],
      backend: ['Node.js', 'NestJS', 'PHP', 'ASP.NET MVC', 'Java', 'Python'],
      tools: ['Git', 'GitHub', 'Postman', 'Photoshop', 'Premiere Pro']
    },
    intro: '擅長將 AI、全端工程與互動式前端設計整合成具有敘事性與展示力的完整作品。'
  })
})

module.exports = router