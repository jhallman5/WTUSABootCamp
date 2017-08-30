
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('customers').del()
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert([
        {id: 1, name: 'jhallman5', email: 'jhallman5@gmail.com', status: 'joined'},
        {id: 2, name: 'steven4', email: 'steven4@gmail.com', status: 'rejected'},
        {id: 3, name: 'lisa3', email: 'lisa3@gmail.com', status: 'open'}
      ]);
    });
};
