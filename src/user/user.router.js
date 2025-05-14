const express = require('express');
const {getUser, addUser} = require('./user.controller');
const user = express.Router();

user.get('/', getUser);
user.post('/', addUser);
// user.post('/admin', addAdmin);

module.exports = user