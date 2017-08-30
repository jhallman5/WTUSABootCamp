const router = require('express').Router()

router.use((req, res, next) => {
  res.set({'Access-Control-Allow-Origin': 'http://localhost:8080'})
  next()
})

router.get('/dashboard/john', (req, res) => {
  const user = { id: 1, username: 'jhallman5'}
  res.json(user)
})

module.exports = router;
