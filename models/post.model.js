const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const Category = require('./category.model');

const Post = sequelize.define('posts', {
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  freezeTableName: true
});

Post.belongsTo(Category, { foreignKey: 'category_id', targetKey: 'id', as: 'category' });

module.exports = Post;