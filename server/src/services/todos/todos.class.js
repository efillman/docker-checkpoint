const { Service } = require('feathers-knex');

exports.Todos = class Todos extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'todos'
    });
  }

  create (data, params) {
    // This is the information we want from the user signup data
    const { text, completed } = data;

    // The complete todo
    const todoData = {
      text,
      completed,
    };

    // Call the original `create` method with existing `params` and new data
    return super.create(todoData, params);
  }

};
