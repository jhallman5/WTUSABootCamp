
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('customers').del()
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert([
        {id: 1, name: 'jhallman5', email: 'jhallman5@gmail.com', status: 'joined', concern: 'Busy' , phone: '(555) 555-5555', interview_date: '2015-05-05' },
        {id: 2, name: 'steven4', email: 'steven4@gmail.com', status: 'rejected', concern:'Out of Shape' , phone: '(123) 456-7890' , interview_date: '2020-12-28'},
        {id: 3, name: 'lisa3', email: 'lisa3@gmail.com', status: 'open', concern: 'Fun' , phone: '(111) 222-3333' , interview_date:'1995-2-26' },
        {id: 4, name: 'thao17', email: 'thao17@gmail.com', status: 'joined', concern: 'Busy' , phone: '(444) 444-4444' , interview_date:'1993-4-24' },
        {id: 5, name: 'zack24', email: 'zack24@gmail.com', status: 'open', concern: 'Out of Shape' , phone: '(777) 777-7777' , interview_date:'2002-2-21' },
        {id: 6, name: 'jeff99', email: 'jeff99@gmail.com', status: 'open', concern: 'Fun' , phone: '(444) 555-6666' , interview_date:'1865-7-26' },
        {id: 7, name: 'rob84', email: 'rob84@gmail.com', status: 'open', concern: 'Out of Shape' , phone: '(777) 888-9999' , interview_date:'2017-8-26' },
        {id: 8, name: 'cindy26', email: 'cindy26@gmail.com', status: 'joined', concern: 'Busy' , phone: '(555) 141-2525' , interview_date:'2017-8-22' },
        {id: 9, name: 'ryan00', email: 'ryan00@gmail.com', status: 'rejected', concern: 'Fun' , phone: '(099) 999-3333' , interview_date:'2017-9-01' },
        {id: 10, name: 'sally70', email: 'sally70@gmail.com', status: 'open', concern: 'Busy' , phone: '(856) 745-2481' , interview_date:'2017-9-02' }
      ]);
    });
};
