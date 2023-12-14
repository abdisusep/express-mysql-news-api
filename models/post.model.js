const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

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
  }
}, {
  freezeTableName: true
});

module.exports = Post;