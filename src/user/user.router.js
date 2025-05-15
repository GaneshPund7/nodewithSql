const express = require('express');
const {getUser, addUser, getUserById,getUsers} = require('./user.controller');
const user = express.Router();

user.get('/', getUser);
user.post('/', addUser);
user.get('/ud', getUserById);
user.get('/u', getUsers)
// user.post('/admin', addAdmin);

module.exports = user