const pg = require('pg');
const Pool = pg.Pool;
let config = {};

if (process.env.DATABASE_URL) {
    let params = url.parse(process.env.DATABASE_URL);
    let auth = params.auth.split(':');

    config = {
        user: auth[0],
        password: auth[1],
        host: params.hostname,
        port: params.port,
        database: params.pathname.split('/')[1],
        ssl: true, // heroku requires ssl to be true
        max: 10, // max number of clients in the pool
        idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
    };
} else {
    // not on heroku, no process.env.DATABASE_URL
    config = {
        user: process.env.PG_USER || null,
        password: process.env.DATABASE_SECRET || null,
        host: process.env.DATABASE_SERVER || 'localhost',
        port: process.env.DATABASE_PORT || 5432,
        database: process.env.DATABASE_NAME || 'movies',
        max: 10,
        idleTimoutMillis: 30000
    }
}

const pool = new Pool(config);

pool.connect();

pool.on('connect', () => {
    console.log(`Postgresql connected to ${config.host} using ${config.database} on port ${config.port}`);
});

pool.on('error', (error) => {
    console.log(`ERROR connecting postgresql: ${error}`);
});

module.exports = pool;