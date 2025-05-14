const { Sequelize } = require('sequelize');

// Create connection instance
const sequelize = new Sequelize('Employee', 'postgres', 'Ganesh', {
  host: 'localhost',           
  dialect: 'postgres',         
  logging: false                
});

sequelize.authenticate().then(() => {
    console.log(' Connection has been established successfully.');
  })

  
  .catch(err => {
    console.error(' Unable to connect to the database:', err);
  });

module.exports = sequelize;
// 5433 port 
// PgNimap
// 5432
// Test connection