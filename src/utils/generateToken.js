const jwt = require('jsonwebtoken');
const { tokenLife } = require('../config/constants.js');
const crypto = require('crypto')
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: tokenLife,
    });
}
const generateEmailToken = (id) => {
    return crypto.hash('sha256', id)
}

module.exports = { generateToken, generateEmailToken };
