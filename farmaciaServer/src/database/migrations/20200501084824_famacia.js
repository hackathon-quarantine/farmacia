
exports.up = function(knex) {
    return knex.schema.createTable('farmacia', (table)=> {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('endereco').notNullable();
        table.string('contacto').notNullable();
        table.string('email').notNullable();
        table.string('webSite').notNullable();
        table.string('logitude', 85).notNullable();
        table.string('latitude', 85).notNullable();
      });
    };

exports.down = function (knex) {
    return knex.schema.dropTable('farmacia');
};