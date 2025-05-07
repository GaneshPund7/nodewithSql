const { Sequelize } = require('sequelize');

// Create connection instance
const sequelize = new Sequelize('database_name', 'postgres', 'Nimap@777', {
  host: 'localhost',           
  dialect: 'postgres',         
  logging: false                
});
// 5433 port 
// PgNimap
// 5432
// Test connection
sequelize.authenticate()
  .then(() => {
    console.log(' Connection has been established successfully.');
  })
  .catch(err => {
    console.error(' Unable to connect to the database:', err);
  });

module.exports = sequelize;
