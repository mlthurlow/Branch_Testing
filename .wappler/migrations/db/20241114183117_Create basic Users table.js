
exports.up = function(knex) {
  return knex.schema
    .createTable('Users', async function (table) {
      table.increments('user_id');
      table.string('Name');
      table.boolean('on_duty');
    })
    .then(async () => {
      await knex('Users').insert({"Name":"Charlie"}),
      await knex('Users').insert({"Name":"Delta"})
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('Users')
};
