const { DataTypes } = require('sequelize');
const sequelize = require('../../db');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  job :{
    type: DataTypes.STRING
  }
}, {
  tableName: 'users',
  timestamps: false
});

User.associate = (modals)=>{
  User.hasOne(modals.Profile,{
    foreignKey : 'userId'
  })
};

module.exports = User;
