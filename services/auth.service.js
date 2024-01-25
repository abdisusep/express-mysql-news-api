require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const model = require('../models');
const User = model.User;

const registerUser = async (data) => {
    try {
        const { name, email, password, password_confirmation } = data;

        const createdUser = await User.create({
          name,
          email,
          password,
          password_confirmation,
        });

        return {
          code: 201,
          message: 'Created'
        };
    } catch (err) {
        throw new Error(err);
    }
}

const loginUser = async (data) => {
    try {
        const { email, password } = data;

        const user = await User.findOne({ 
            where: { email },
            attributes: { include: ['password'] },
        });

        if (!user) {
          return {
            status: 'error',
            code: 404,
            message: 'User not found',
          };
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
          return {
            status: 'error',
            code: 401,
            message: 'Invalid password',
          };
        }

        const secretKey = process.env.JWT_SECRET_KEY;
        const token = jwt.sign({ userId: user.id, email: user.email, name: user.name }, secretKey, {
          expiresIn: '1h',
        });

        const decodedToken = jwt.decode(token);
        const expirationTime = decodedToken ? decodedToken.exp : null;

        return {
          message: 'Login successful',
          data: {
            email: user.email,
            name: user.name,
            token: token,
            expired: expirationTime ? new Date(expirationTime * 1000).toISOString() : null,
          },
        };
    } catch (err) {
        throw new Error(err);
    }
}

module.exports = {
    registerUser, loginUser
}