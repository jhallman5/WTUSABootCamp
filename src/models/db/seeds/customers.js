
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('customers').del()
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert([
        {id: 1, name: 'jhallman5', email: 'jhallman5@gmail.com', status: 'joined', concern: 'Busy' , phone: '(555) 555-5555', interview_date: '2015-05-05' },
        {id: 2, name: 'steven4', email: 'steven4@gmail.com', status: 'rejected', concern:'Out of Shape' , phone: '(123) 456-7890' , interview_date: '2020-12-28'},
        {id: 3, name: 'lisa3', email: 'lisa3@gmail.com', status: 'open', concern: 'Fun' , phone: '(111) 222-3333' , interview_date:'1995-2-26' }
      ]);
    });
};
