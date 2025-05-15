const express = require('express');
const { createUserWithProfile } = require('./profile.controller')
const profile = express.Router();
profile.post('/', createUserWithProfile)

// module.exports = profile;
module.exports = profile