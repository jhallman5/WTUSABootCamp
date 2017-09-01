const { Customer } = require('./db/bookshelf');

const findById = id =>
  Customer.forge({ id })
    .fetch()
    .then(customer => customer);

const findAll = () =>
  Customer.forge()
    .fetchAll()
    .then(customers => customers);

module.exports = {
  findById,
  findAll,
};
