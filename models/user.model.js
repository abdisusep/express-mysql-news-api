const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const bcrypt = require('bcrypt');

const User = sequelize.define('users', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Name is required',
      },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Password is required',
      },
    },
  },
  password_confirmation: {
    type: DataTypes.VIRTUAL,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Password confirmation is required',
      },
      isMatch(value) {
        if (value !== this.password) {
          throw new Error('Password confirmation does not match');
        }
      },
    },
  },
}, {
  freezeTableName: true,
  timestamps: false,
  defaultScope: {
    attributes: { exclude: ['password'] },
  },
  hooks: {
    beforeCreate: async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      user.password = hashedPassword;
    },
  },
});

module.exports = User;