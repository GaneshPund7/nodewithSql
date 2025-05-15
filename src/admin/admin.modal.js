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

Admin.associate = (models) => {
    Profile.belongsTo(models.User, {
      foreignKey: 'id',
      as: 'user',
    });
  };
module.exports = Admin ;