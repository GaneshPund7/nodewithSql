const express = require('express');
const admin = express.Router();
const {addAdmin, getAdmin} = require('./admin.controller');

admin.post('/', addAdmin);
admin.get('/', getAdmin);
 module.exports = admin