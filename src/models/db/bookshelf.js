const knex = require('knex')(require('./knexfile'))
const bookshelf = require('bookshelf')

const User = bookshelf.Model.extend({
  tableName: 'users'
})

const Customer = bookshelf.Model.extend({
  tableName: 'customers'
})

module.exports = bookshelf
