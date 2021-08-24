
exports.up = function(knex) {
  return knex.schema.createTable('todos', (table) => {
    table.increments('id').primary();
    table.string('text');
    table.boolean('completed').defaultTo(false).notNullable();
    table.timestamps(true, true);
  });

};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('todos');
};
