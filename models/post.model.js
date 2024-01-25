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
    validate: {
      notEmpty: {
        msg: 'Title is required',
      },
    },
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Content is required',
      },
    },
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Image is required',
      },
    },
  }
}, {
  freezeTableName: true,
  timestamps: true,
  defaultScope: {
    attributes: { exclude: ['categoryId'] },
  },
});

Post.belongsTo(Category, { foreignKey: 'categoryId', targetKey: 'id', as: 'category' });

module.exports = Post;