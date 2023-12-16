const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const Category = require('./category.model');

const Post = sequelize.define('posts', {
  categoryId: {
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
  freezeTableName: true,
  timestamps: true
});

Post.belongsTo(Category, { foreignKey: 'categoryId', targetKey: 'id', as: 'category' });

module.exports = Post;