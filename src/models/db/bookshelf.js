const knex = require('knex')(require('./knexfile').development);
const bookshelf = require('bookshelf')(knex);

const User = bookshelf.Model.extend({
  tableName: 'users',
});

const Customer = bookshelf.Model.extend({
  tableName: 'customers',
});

module.exports = {
  User,
  Customer,
};
