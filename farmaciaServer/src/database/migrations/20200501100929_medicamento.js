
exports.up = function(knex) {
  return knex.schema.createTable('medicamento', (table)=>{
    table.increments();
    table.string('nome', 45).notNullable();
    table.string('especificacao').notNullable();
  })
};

exports.down = function(knex) {
  return knex.shema.dropTable('medicamento');
};
