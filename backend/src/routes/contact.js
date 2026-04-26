const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: '請填寫完整欄位'
    })
  }

  res.json({
    success: true,
    message: '訊息已成功送出',
    data: {
      name,
      email,
      message,
      createdAt: new Date().toISOString()
    }
  })
})

module.exports = router