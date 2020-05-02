
exports.up = function(knex) {
    return knex.schema.createTable('user', (table)=> {
        table.increments('id').primary();
        table.string('email').notNullable();
        table.string('firstName', 255).notNullable();
        table.string('lastName', 85).notNullable();
        table.string('logitude', 85).notNullable();
        table.string('latitude', 85).notNullable();
        table.string('password', 85).notNullable();
      });
    };

exports.down = function (knex) {
    return knex.schema.dropTable('user');
};