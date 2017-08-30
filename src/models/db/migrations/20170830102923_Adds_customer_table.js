
exports.up = function(knex, Promise) {
  return knex.schema.createTable('customers', (table) => {
    table.increments()
    table.string('name')
    table.string('email')
    table.string('status')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('customers')
};
