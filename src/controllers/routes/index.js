const router = require('express').Router()
const Customer = require('../../models/customers');

router.use((req, res, next) => {
  res.set({ 'Access-Control-Allow-Origin': 'http://localhost:8080' });
  next();
});

router.get('/dashboard/john', (req, res) =>
  Customer.findById(1)
    .then((customer) => {
      console.log('=-=-=-> customer IN ROUTE', customer.attributes);
      res.json(customer.attributes);
    })
);

module.exports = router;
