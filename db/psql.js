
const {Pool} = require('pg');
const host = process.env.PG_HOST;
const port = process.env.PG_PORT;
const user = process.env.PG_USER;
const password = process.env.PG_PASSWORD;
const database = process.env.PG_DATABASE;



function init_pool(connectionString, sslOpt){
    return sslOpt ? new Pool({

        connectionString: connectionString,
        ssl: sslOpt}) :
        new Pool({

            connectionString: connectionString
        })
}

async function query(pool, query, params) {
    const {rows, fields} = await pool.query(query, params);
    return rows;
}

module.exports = {query, init_pool};