const router = require('express').Router()

router.get('/dashboard/john', (req, res) => {
  console.log( "(>'')>  in Route" )
  const user = { id: 1, username: 'jhallman5'}
  res.json(user)
})

module.exports = router;
