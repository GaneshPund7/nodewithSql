const sequelize = require('../../db');
const { DataTypes } = require('sequelize');

const Profile = sequelize.define('Profile', {
  bio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false, // unless you want it optional
  },
}, {
  tableName: 'profile',
  timestamps: false,
});

// Associations should ideally be defined in your models/index.js
Profile.associate = (models) => {
  Profile.belongsTo(models.User, {
    foreignKey: 'userId',
    as: 'user',
  });
};

module.exports = Profile;
