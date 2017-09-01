const knex = require('knex')(require('./knexfile').development);
const bookshelf = require('bookshelf')(knex);
const moment = require('moment');

const User = bookshelf.Model.extend({
  tableName: 'users',
});

const Customer = bookshelf.Model.extend({
  tableName: 'customers',
  parse: (attrs) => {
    attrs.interview_date = moment(attrs.interview_date).format('MMM Do YY');
    attrs.created_on = moment(attrs.created_on).format('MMM Do YY');
    return attrs;
  },
});

module.exports = {
  User,
  Customer,
};
