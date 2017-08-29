const router = require('express').Router()

router.get('/dashboard/john', (req, res) => {
  const user = { id: 1, username: 'jhallman5'}
  res.set({'Access-Control-Allow-Origin': 'http://localhost:8080'}).json(user)
})

module.exports = router;
