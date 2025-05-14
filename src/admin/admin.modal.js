const sequelize = require ('../../db');
const { DataTypes } = require('sequelize');
const Admin = sequelize.define('Admin',{

 adminname:{
type: DataTypes.STRING,
allowNull : false
},

password: {
type: DataTypes.STRING,
allowNull: false,
},
email: {
type: DataTypes. STRING,
allowNull: false

}
},
{
tableName: 'admin',
timestamps: false

});
module.exports = Admin;