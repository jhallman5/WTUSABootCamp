const { Customer } = require('./db/bookshelf');

const findById = id =>
  Customer.forge({ id })
    .fetch()
    .then(customer => customer);

module.exports = {
  findById,
};
