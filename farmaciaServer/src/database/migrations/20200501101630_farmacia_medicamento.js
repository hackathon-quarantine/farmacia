
exports.up = function(knex) {
    return knex.schema.createTable('farmacia_medicamento',(table)=>{
        table.increments();
        table.integer('farmaciaId');
        table.integer('medicamentoId');

        table.foreign('farmaciaId').references('id').inTable('farmacia');
        table.foreign('medicamentoId').references('id').inTable('medicamento');
    })
};

exports.down = function(knex) {
  return knex.shema.dropTable('farmacia_medicamento')
};
