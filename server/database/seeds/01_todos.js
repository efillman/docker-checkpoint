
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, text: 'Todo 1'},
        {id: 2, text: 'Todo 2'},
        {id: 3, text: 'Todo 3'}
      ]);
    });
};
