var dotenv = require('dotenv');
dotenv.config({ path: './.env' });
console.log(process.env.DATABASE_URL);
module.exports = {
  development: {
    client: 'pg',
       connection: {connectionString: process.env.DATABASE_URL, 
    ssl: {
      rejectUnauthorized: false
    },
  },
    migrations: { directory: './data/migrations' },
    seeds: { directory: './data/seeds' },
    pool: {
      min: 2,
      max: 10,
    },
  },

  test: {
    client: 'sqlite3',
    connection: ':memory:',
    migrations: { directory: './data/migrations' },
    seeds: { directory: './data/seeds' },
  },

  production: {
    client: 'pg',
       connection: {connectionString: process.env.DATABASE_URL, 
    ssl: {
      rejectUnauthorized: false
    },
  },
    migrations: { directory: './data/migrations' },
    seeds: { directory: './data/seeds' },
  },
};
