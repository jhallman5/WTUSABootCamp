
exports.up = function(knex, Promise) {
  return knex.schema.createTable('customers', (table) => {
    table.increments()
    table.string('name')
    table.string('email')
    table.string('status')
    table.string('concern')
    table.string('phone')
    table.date('interview_date')
    table.date('created_on').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('customers')
};
