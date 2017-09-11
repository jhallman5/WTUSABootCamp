const router = require('express').Router();
const Customer = require('../../models/customers');
const path = require('path');

router.get('/api/dashboard/users/all', (req, res) =>
  Customer.findAll()
    .then(customers => res.json(customers))
);

router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;
