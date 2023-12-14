const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Category = sequelize.define('categories', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  freezeTableName: true,
  timestamps: false
});

module.exports = Category;