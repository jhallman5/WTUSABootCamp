const router = require('express').Router()
const Customer = require('../../models/customers');
const path = require('path')

router.use((req, res, next) => {
  res.set({ 'Access-Control-Allow-Origin': 'http://localhost:8080' });
  next();
});

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'))
})

router.get('/dashboard/john', (req, res) =>
  Customer.findById(1)
    .then(customer => res.json(customer.attributes))
);

router.get('/dashboard/users/all', (req, res) =>
  Customer.findAll()
    .then(customers => res.json(customers))
);

router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'))
})

module.exports = router;
