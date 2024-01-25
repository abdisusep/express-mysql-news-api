const sequelize = require('../config/db.config');

const Category = require('./category.model');
const Post = require('./post.model');
const User = require('./user.model');

sequelize.sync({ force: false })
.then(() => {
  console.log('Database synced');
})
.catch((err) => {
  console.error('Error syncing database:', err);
});

module.exports = {
  Category, Post, User
}