exports.up = (knex) => {
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.boolean('isAdmin').defaultTo("false");

        table.timestamps('created_at').defaultTo(knex.fn.now());
        table.timestamps('updated_at').defaultTo(knex.fn.now());
    })
}

exports.down = (knex) => {
    return knex.schema.dropTableIfExists('users');
};