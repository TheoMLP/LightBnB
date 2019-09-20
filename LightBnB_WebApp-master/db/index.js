const { Pool } = require('pg');

const params = {
  port: '5432',
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'lightbnb',
};

const pool = new Pool(params);
pool.connect();

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params)
       .then(callback)
       .catch(err => {
         console.log(err.stack)
       })
  },
}