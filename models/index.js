const sequelize = require('../config/db.config');

sequelize.sync({ force: false })
.then(() => {
  console.log('Database synced');
})
.catch((err) => {
  console.error('Error syncing database:', err);
});

const Category = require('./category.model');
const Post = require('./post.model');

module.exports = {
  Category, Post
}